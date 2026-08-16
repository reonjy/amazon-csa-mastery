// Main Application Logic for Amazon CSA Training & Nesting Mastery
import { SOP_DATA } from './data/sops.js';
import { SCENARIO_DATA } from './data/scenarios.js';
import { QUIZ_QUESTIONS } from './data/quiz.js';
import { MACRO_CATEGORIES, ACRONYMS_DATA } from './data/macros.js';

/* ==========================================================================
   Sound Effects Synthesizer (Web Audio API)
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playTone(freq, type = 'sine', duration = 0.12, volume = 0.15) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio unavailable", e);
    }
  }

  playClick() {
    this.playTone(600, 'triangle', 0.05, 0.08);
  }

  playMessagePing() {
    this.playTone(523.25, 'sine', 0.1, 0.12); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.15, 0.12), 80); // E5
  }

  playSuccess() {
    this.playTone(523.25, 'sine', 0.08, 0.15); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.08, 0.15), 90); // E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.2, 0.18), 180); // G5
  }

  playWarning() {
    this.playTone(220, 'sawtooth', 0.2, 0.12);
  }
}

const sounds = new SoundEngine();

/* ==========================================================================
   Application State & Persistence
   ========================================================================== */
const AppState = {
  theme: localStorage.getItem('csa_theme') || 'dark',
  soundEnabled: localStorage.getItem('csa_sound') !== 'false',
  activeTab: 'simulator',
  
  // Simulator State
  activeScenarioId: SCENARIO_DATA[0].id,
  currentTurnIndex: 1,
  simTimerSeconds: 0,
  simTimerInterval: null,
  simScores: {
    empathy: 100,
    compliance: 100,
    fcr: 100
  },
  scenarioCompleted: {},

  // Exam State
  examQuestions: [...QUIZ_QUESTIONS],
  examUserAnswers: {},
  examTimeSeconds: 600,
  examTimerInterval: null,
  examScore: null,

  // Selected Macro Category
  selectedMacroCategory: MACRO_CATEGORIES[0].id
};

/* ==========================================================================
   UI Helpers: Toasts & Formatting
   ========================================================================== */
function showToast(message, icon = '✓') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  sounds.playClick();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function updateReadinessScore() {
  const completedScenarios = Object.keys(AppState.scenarioCompleted).length;
  const totalScenarios = SCENARIO_DATA.length;
  const scenarioPct = (completedScenarios / totalScenarios) * 60; // 60% weight
  
  const examPct = AppState.examScore !== null ? (AppState.examScore / 100) * 40 : 0; // 40% weight
  const totalReadiness = Math.round(scenarioPct + examPct);

  const bar = document.getElementById('global-readiness-bar');
  const val = document.getElementById('global-readiness-val');
  if (bar && val) {
    bar.style.width = `${totalReadiness}%`;
    val.textContent = `${totalReadiness}%`;
  }
}

/* ==========================================================================
   Theme & Audio Controls
   ========================================================================== */
function initThemeAndAudio() {
  document.body.setAttribute('data-theme', AppState.theme);
  updateThemeIcons();

  const themeBtn = document.getElementById('btn-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', AppState.theme);
      localStorage.setItem('csa_theme', AppState.theme);
      updateThemeIcons();
      sounds.playClick();
    });
  }

  sounds.enabled = AppState.soundEnabled;
  updateSoundIcons();

  const soundBtn = document.getElementById('btn-sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      AppState.soundEnabled = !AppState.soundEnabled;
      sounds.enabled = AppState.soundEnabled;
      localStorage.setItem('csa_sound', AppState.soundEnabled);
      updateSoundIcons();
      if (sounds.enabled) sounds.playClick();
    });
  }
}

function updateThemeIcons() {
  const moon = document.getElementById('theme-moon-icon');
  const sun = document.getElementById('theme-sun-icon');
  if (AppState.theme === 'light') {
    moon?.classList.remove('hidden');
    sun?.classList.add('hidden');
  } else {
    moon?.classList.add('hidden');
    sun?.classList.remove('hidden');
  }
}

function updateSoundIcons() {
  const onIcon = document.getElementById('sound-on-icon');
  const offIcon = document.getElementById('sound-off-icon');
  if (AppState.soundEnabled) {
    onIcon?.classList.remove('hidden');
    offIcon?.classList.add('hidden');
  } else {
    onIcon?.classList.add('hidden');
    offIcon?.classList.remove('hidden');
  }
}

/* ==========================================================================
   Tab Navigation
   ========================================================================== */
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      switchTab(target);
    });
  });
}

function switchTab(tabId) {
  AppState.activeTab = tabId;
  sounds.playClick();

  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === tabId);
  });

  document.querySelectorAll('.tab-pane').forEach(p => {
    p.classList.toggle('active', p.id === `pane-${tabId}`);
  });
}

/* ==========================================================================
   TAB 1: Simulator Logic
   ========================================================================== */
function initSimulator() {
  renderScenarioSidebar();
  loadScenario(AppState.activeScenarioId);
}

function renderScenarioSidebar() {
  const container = document.getElementById('scenario-list-container');
  if (!container) return;

  container.innerHTML = SCENARIO_DATA.map(sc => {
    const isCompleted = AppState.scenarioCompleted[sc.id];
    return `
      <div class="scenario-item ${sc.id === AppState.activeScenarioId ? 'active' : ''}" data-id="${sc.id}">
        <div class="scenario-item-title">${sc.title}</div>
        <div class="scenario-item-meta">
          <span>${sc.channel}</span> • 
          <span>${sc.customerName}</span>
          ${isCompleted ? '<span class="badge badge-accent">Completed</span>' : ''}
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.scenario-item').forEach(item => {
    item.addEventListener('click', () => {
      const scId = item.getAttribute('data-id');
      loadScenario(scId);
    });
  });
}

function loadScenario(scenarioId) {
  const scenario = SCENARIO_DATA.find(s => s.id === scenarioId) || SCENARIO_DATA[0];
  AppState.activeScenarioId = scenario.id;
  AppState.currentTurnIndex = 1;
  AppState.simScores = { empathy: 100, compliance: 100, fcr: 100 };
  
  renderScenarioSidebar();
  updateLiveScoreUI();

  // CRM Header
  document.getElementById('sim-cust-avatar').textContent = scenario.customerName.split(' ').map(n => n[0]).join('');
  document.getElementById('sim-cust-name').textContent = scenario.customerName;
  document.getElementById('sim-cust-type').textContent = scenario.customerType;
  document.getElementById('sim-channel-badge').textContent = scenario.channel;
  
  const meta = scenario.orderInfo;
  document.getElementById('sim-order-meta').innerHTML = `
    <span>Order: <strong>${meta.orderId}</strong></span>
    <span>Item: <strong>${meta.item}</strong></span>
    <span>Status: <strong class="status-warning">${meta.status}</strong></span>
  `;

  // Briefing
  document.getElementById('sim-briefing-text').textContent = scenario.background;

  // Reset mood
  setCustomerMood(scenario.initialMood);

  // Clear chat thread & reset turn
  const chatThread = document.getElementById('chat-thread-container');
  chatThread.innerHTML = '';

  // Start Handling Timer
  startSimTimer();

  // Render Turn 1
  renderTurn(1);
}

function startSimTimer() {
  clearInterval(AppState.simTimerInterval);
  AppState.simTimerSeconds = 0;
  const timerDisplay = document.getElementById('live-timer');
  if (timerDisplay) timerDisplay.textContent = '00:00';

  AppState.simTimerInterval = setInterval(() => {
    AppState.simTimerSeconds++;
    if (timerDisplay) timerDisplay.textContent = formatTime(AppState.simTimerSeconds);
  }, 1000);
}

function setCustomerMood(mood) {
  const moodEmoji = document.getElementById('sim-mood-emoji');
  const moodText = document.getElementById('sim-mood-text');
  if (!moodEmoji || !moodText) return;

  const moodMap = {
    angry: { emoji: '😡', text: 'Angry' },
    furious: { emoji: '🤬', text: 'Furious' },
    annoyed: { emoji: '😤', text: 'Annoyed' },
    neutral: { emoji: '😐', text: 'Neutral' },
    pleasant: { emoji: '🙂', text: 'Calm' },
    delighted: { emoji: '😊', text: 'Delighted' }
  };

  const current = moodMap[mood] || moodMap.neutral;
  moodEmoji.textContent = current.emoji;
  moodText.textContent = current.text;
}

function renderTurn(turnNum) {
  const scenario = SCENARIO_DATA.find(s => s.id === AppState.activeScenarioId);
  if (!scenario) return;

  const turn = scenario.turns.find(t => t.turnIndex === turnNum);
  if (!turn) {
    finishScenario();
    return;
  }

  // Turn Indicator
  const turnBadge = document.getElementById('turn-indicator');
  if (turnBadge) turnBadge.textContent = `Step ${turnNum} of ${scenario.turns.length}`;

  // Add Customer Message to chat
  addChatMessage('customer', scenario.customerName, turn.customerMessage);
  sounds.playMessagePing();

  // Render Associate response options
  const optionsContainer = document.getElementById('options-container');
  if (!optionsContainer) return;

  optionsContainer.innerHTML = turn.options.map((opt, idx) => {
    const letter = ['A', 'B', 'C', 'D'][idx];
    return `
      <button class="response-option-btn" data-option-id="${opt.id}">
        <span class="option-letter">${letter}</span>
        <span class="option-text">${opt.text}</span>
      </button>
    `;
  }).join('');

  optionsContainer.querySelectorAll('.response-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const optId = btn.getAttribute('data-option-id');
      handleOptionSelected(optId, turn);
    });
  });
}

function addChatMessage(sender, name, message, feedback = null, quality = null) {
  const container = document.getElementById('chat-thread-container');
  if (!container) return;

  const wrap = document.createElement('div');
  wrap.className = `chat-bubble-wrap ${sender}`;
  wrap.innerHTML = `
    <span class="chat-sender-name">${name}</span>
    <div class="chat-bubble">${message}</div>
    ${feedback ? `<div class="feedback-bubble ${quality}">${feedback}</div>` : ''}
  `;

  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;
}

function handleOptionSelected(optionId, currentTurn) {
  const selectedOpt = currentTurn.options.find(o => o.id === optionId);
  if (!selectedOpt) return;

  // Add associate message with QA feedback
  addChatMessage('associate', 'You (Associate)', selectedOpt.text, selectedOpt.feedback, selectedOpt.quality);

  // Apply score impacts
  const imp = selectedOpt.impact;
  AppState.simScores.empathy = Math.max(0, Math.min(100, AppState.simScores.empathy + imp.empathy));
  AppState.simScores.compliance = Math.max(0, Math.min(100, AppState.simScores.compliance + imp.compliance));
  AppState.simScores.fcr = Math.max(0, Math.min(100, AppState.simScores.fcr + imp.fcr));

  if (imp.mood) {
    setCustomerMood(imp.mood);
  }

  if (selectedOpt.quality === 'best') {
    sounds.playSuccess();
  } else if (selectedOpt.quality === 'bad') {
    sounds.playWarning();
  } else {
    sounds.playClick();
  }

  updateLiveScoreUI();

  // Clear options temporarily
  const optionsContainer = document.getElementById('options-container');
  if (optionsContainer) {
    optionsContainer.innerHTML = '<div class="text-secondary font-mono" style="padding: 0.5rem;">Customer is reviewing your response...</div>';
  }

  setTimeout(() => {
    AppState.currentTurnIndex++;
    renderTurn(AppState.currentTurnIndex);
  }, 900);
}

function updateLiveScoreUI() {
  const emp = document.getElementById('live-empathy-score');
  const comp = document.getElementById('live-compliance-score');
  const fcr = document.getElementById('live-fcr-score');

  if (emp) emp.textContent = `${AppState.simScores.empathy}%`;
  if (comp) comp.textContent = `${AppState.simScores.compliance}%`;
  if (fcr) fcr.textContent = `${AppState.simScores.fcr}%`;
}

function finishScenario() {
  clearInterval(AppState.simTimerInterval);
  sounds.playSuccess();

  const avgScore = Math.round((AppState.simScores.empathy + AppState.simScores.compliance + AppState.simScores.fcr) / 3);
  AppState.scenarioCompleted[AppState.activeScenarioId] = avgScore;
  updateReadinessScore();

  // Show Modal
  const modal = document.getElementById('modal-scenario-complete');
  if (modal) {
    document.getElementById('modal-score-circle').textContent = `${avgScore}%`;
    document.getElementById('modal-empathy-val').textContent = `${AppState.simScores.empathy}%`;
    document.getElementById('modal-compliance-val').textContent = `${AppState.simScores.compliance}%`;
    document.getElementById('modal-fcr-val').textContent = `${AppState.simScores.fcr}%`;
    document.getElementById('modal-time-val').textContent = formatTime(AppState.simTimerSeconds);

    const feedbackBox = document.getElementById('modal-feedback-content');
    if (feedbackBox) {
      if (avgScore >= 85) {
        feedbackBox.innerHTML = `
          <div class="feedback-bubble best">
            <strong>✓ Nesting Ready:</strong> Excellent customer ownership, respectful policy adherence, and clean first contact resolution!
          </div>
        `;
      } else {
        feedbackBox.innerHTML = `
          <div class="feedback-bubble bad">
            <strong>⚠ Review SOPs:</strong> Some critical compliance or empathy boundaries were crossed. Retry this scenario to solidify the correct SOP flow.
          </div>
        `;
      }
    }

    modal.classList.remove('hidden');
  }
}

/* ==========================================================================
   TAB 2: SOP Knowledge Engine Logic
   ========================================================================== */
function initSOPs() {
  renderSOPs(SOP_DATA);

  const searchInput = document.getElementById('sop-search-input');
  const clearBtn = document.getElementById('sop-clear-btn');
  const filterPills = document.querySelectorAll('.filter-pill');

  let activeCategory = 'all';

  function filterData() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    if (clearBtn) clearBtn.classList.toggle('hidden', query.length === 0);

    const filtered = SOP_DATA.filter(sop => {
      const matchCat = activeCategory === 'all' || sop.category === activeCategory;
      const matchQuery = !query || 
        sop.title.toLowerCase().includes(query) ||
        sop.summary.toLowerCase().includes(query) ||
        sop.steps.some(st => st.toLowerCase().includes(query)) ||
        sop.tags.some(tg => tg.toLowerCase().includes(query));

      return matchCat && matchQuery;
    });

    renderSOPs(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterData);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      filterData();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-cat') || 'all';
      sounds.playClick();
      filterData();
    });
  });
}

function renderSOPs(sops) {
  const container = document.getElementById('sops-grid-container');
  if (!container) return;

  if (sops.length === 0) {
    container.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <p class="text-secondary">No matching SOPs found. Try searching for "DNR", "Returns", or "Verification".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = sops.map(sop => `
    <div class="sop-card">
      <div class="sop-header-row">
        <h3 class="sop-title">${sop.title}</h3>
        <span class="badge ${sop.critical ? 'badge-critical' : 'badge-accent'}">
          ${sop.critical ? 'Zero-Tolerance' : sop.category}
        </span>
      </div>
      <p class="sop-summary">${sop.summary}</p>
      
      <ul class="sop-steps-list">
        ${sop.steps.map(step => `<li>${step}</li>`).join('')}
      </ul>

      ${sop.exceptions && sop.exceptions.length > 0 ? `
        <div class="sop-exceptions-box">
          <strong>Exceptions & Escalation Limits:</strong>
          <ul style="padding-left: 1.2rem; margin-top: 0.25rem;">
            ${sop.exceptions.map(ex => `<li>${ex}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="sop-tags-row">
        ${sop.tags.map(t => `<span class="sop-tag">#${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   TAB 3: QA & Certification Exam Logic
   ========================================================================== */
function initExam() {
  renderExamQuestions();

  const startBtn = document.getElementById('btn-start-exam');
  const submitBtn = document.getElementById('btn-submit-exam');

  if (startBtn) {
    startBtn.addEventListener('click', startNewExam);
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', submitExam);
  }

  startNewExam();
}

function startNewExam() {
  AppState.examUserAnswers = {};
  AppState.examTimeSeconds = 600; // 10 minutes
  clearInterval(AppState.examTimerInterval);

  const banner = document.getElementById('exam-result-banner');
  if (banner) banner.classList.add('hidden');

  renderExamQuestions();
  updateExamStats();

  const submitBtn = document.getElementById('btn-submit-exam');
  if (submitBtn) submitBtn.disabled = true;

  AppState.examTimerInterval = setInterval(() => {
    AppState.examTimeSeconds--;
    const timerDisplay = document.getElementById('exam-timer-display');
    if (timerDisplay) timerDisplay.textContent = formatTime(AppState.examTimeSeconds);

    if (AppState.examTimeSeconds <= 0) {
      clearInterval(AppState.examTimerInterval);
      submitExam();
    }
  }, 1000);
}

function renderExamQuestions() {
  const container = document.getElementById('exam-questions-container');
  if (!container) return;

  container.innerHTML = AppState.examQuestions.map((q, qIndex) => `
    <div class="exam-q-card" id="exam-card-${q.id}">
      <div class="exam-q-header">
        <span class="exam-q-num">Question ${qIndex + 1} of ${AppState.examQuestions.length}</span>
        <span class="badge ${q.critical ? 'badge-critical' : 'badge-outline'}">
          ${q.critical ? 'Zero-Tolerance Security' : q.category}
        </span>
      </div>
      <div class="exam-q-title">${q.question}</div>
      <div class="exam-q-options">
        ${q.options.map((opt, optIndex) => `
          <label class="exam-option-label" data-qid="${q.id}" data-optindex="${optIndex}">
            <input type="radio" name="q_${q.id}" value="${optIndex}" ${AppState.examUserAnswers[q.id] === optIndex ? 'checked' : ''}>
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
      <div id="exam-exp-${q.id}" class="exam-explanation-box hidden"></div>
    </div>
  `).join('');

  container.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const qId = e.target.name.replace('q_', '');
      AppState.examUserAnswers[qId] = parseInt(e.target.value, 10);
      sounds.playClick();
      updateExamStats();
    });
  });
}

function updateExamStats() {
  const answeredCount = Object.keys(AppState.examUserAnswers).length;
  const total = AppState.examQuestions.length;

  const countElem = document.getElementById('exam-answered-count');
  if (countElem) countElem.textContent = `${answeredCount} / ${total}`;

  const submitBtn = document.getElementById('btn-submit-exam');
  if (submitBtn) {
    submitBtn.disabled = answeredCount < total;
  }
}

function submitExam() {
  clearInterval(AppState.examTimerInterval);
  sounds.playSuccess();

  let correctCount = 0;
  let criticalMissed = 0;

  AppState.examQuestions.forEach(q => {
    const userAnswer = AppState.examUserAnswers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;
    if (isCorrect) correctCount++;
    if (!isCorrect && q.critical) criticalMissed++;

    const expBox = document.getElementById(`exam-exp-${q.id}`);
    if (expBox) {
      expBox.classList.remove('hidden');
      expBox.className = `exam-explanation-box ${isCorrect ? 'correct' : 'incorrect'}`;
      expBox.innerHTML = `
        <strong>${isCorrect ? '✓ Correct' : '✗ Incorrect'}:</strong> ${q.explanation}
      `;
    }
  });

  const percentage = Math.round((correctCount / AppState.examQuestions.length) * 100);
  AppState.examScore = percentage;
  updateReadinessScore();

  const banner = document.getElementById('exam-result-banner');
  if (banner) {
    banner.classList.remove('hidden');
    const passed = percentage >= 85 && criticalMissed === 0;

    banner.innerHTML = `
      <h2 style="color: ${passed ? 'var(--success)' : 'var(--danger)'}; margin-bottom: 0.5rem;">
        ${passed ? '🎉 Congratulations! Certification Exam Passed' : '⚠ Retake Required (Under 85% or Critical Missed)'}
      </h2>
      <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">
        Your Score: ${percentage}% (${correctCount} / ${AppState.examQuestions.length} correct)
      </p>
      ${criticalMissed > 0 ? `
        <div class="feedback-bubble bad" style="display: inline-flex; margin-bottom: 0.75rem;">
          Critical Security Alert: You missed ${criticalMissed} Zero-Tolerance policy question(s).
        </div>
      ` : ''}
      <p class="section-desc">Review the answer explanations marked above to reinforce key SOPs before nesting.</p>
    `;
    banner.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   TAB 4: OJT Macros & Acronyms Logic
   ========================================================================== */
function initNestingMacros() {
  renderMacroCategories();
  renderMacroCards(AppState.selectedMacroCategory);
  renderAcronyms(ACRONYMS_DATA);

  const searchInput = document.getElementById('acronym-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = ACRONYMS_DATA.filter(a => 
        a.term.toLowerCase().includes(query) ||
        a.full.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query)
      );
      renderAcronyms(filtered);
    });
  }
}

function renderMacroCategories() {
  const container = document.getElementById('macro-category-tabs');
  if (!container) return;

  container.innerHTML = MACRO_CATEGORIES.map(cat => `
    <button class="macro-cat-btn ${cat.id === AppState.selectedMacroCategory ? 'active' : ''}" data-cat-id="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  container.querySelectorAll('.macro-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-cat-id');
      AppState.selectedMacroCategory = catId;
      sounds.playClick();
      renderMacroCategories();
      renderMacroCards(catId);
    });
  });
}

function renderMacroCards(catId) {
  const container = document.getElementById('macro-cards-container');
  if (!container) return;

  const category = MACRO_CATEGORIES.find(c => c.id === catId) || MACRO_CATEGORIES[0];

  container.innerHTML = category.macros.map(m => `
    <div class="macro-item-card" data-copy-text="${encodeURIComponent(m.text)}">
      <div class="macro-info">
        <div class="macro-title">${m.title}</div>
        <div class="macro-text">"${m.text}"</div>
      </div>
      <div class="macro-copy-icon">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.macro-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const text = decodeURIComponent(card.getAttribute('data-copy-text'));
      copyToClipboard(text, "Macro copied to clipboard!");
    });
  });
}

function renderAcronyms(list) {
  const container = document.getElementById('acronyms-list-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<p class="text-secondary" style="font-size: 0.8rem;">No matching acronyms found.</p>`;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="acronym-card">
      <div class="acronym-header">
        <span class="acronym-term">${item.term}</span>
        <span class="acronym-full">${item.full}</span>
      </div>
      <p class="acronym-desc">${item.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   TAB 5: SME Escalation Builder Logic
   ========================================================================== */
function initSMEBuilder() {
  const generateBtn = document.getElementById('btn-generate-sme');
  const copyBtn = document.getElementById('btn-copy-sme');
  const resetBtn = document.getElementById('btn-reset-sme');

  function generateEscalation() {
    const orderId = document.getElementById('sme-order-id')?.value.trim() || 'N/A';
    const channel = document.getElementById('sme-channel-type')?.value.trim() || 'N/A';
    const category = document.getElementById('sme-issue-category')?.value || 'N/A';
    const sopChecked = document.getElementById('sme-sop-checked')?.value.trim() || 'N/A';
    const proposedAction = document.getElementById('sme-proposed-action')?.value.trim() || 'N/A';
    const specificQuestion = document.getElementById('sme-specific-question')?.value.trim() || 'N/A';

    const formatted = 
`==============================================
🚨 [SME / LEAD ESCALATION REQUEST]
==============================================
• Order / Tracking ID : ${orderId}
• Channel / Price Tier : ${channel}
• Issue Category       : ${category}
• SOP Checked & Action : ${sopChecked}
• Proposed Resolution  : ${proposedAction}
----------------------------------------------
❓ SPECIFIC APPROVAL / QUESTION NEEDED:
"${specificQuestion}"
==============================================`;

    const outputElem = document.getElementById('sme-formatted-output');
    if (outputElem) outputElem.textContent = formatted;
    sounds.playClick();
  }

  if (generateBtn) generateBtn.addEventListener('click', generateEscalation);

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const outputElem = document.getElementById('sme-formatted-output');
      if (outputElem) {
        copyToClipboard(outputElem.textContent, "Escalation message copied for Slack/Chime!");
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.getElementById('sme-order-id').value = '';
      document.getElementById('sme-channel-type').value = '';
      document.getElementById('sme-sop-checked').value = '';
      document.getElementById('sme-proposed-action').value = '';
      document.getElementById('sme-specific-question').value = '';
      document.getElementById('sme-formatted-output').textContent = 'Fill form and click "Generate Formatted Escalation"...';
      sounds.playClick();
    });
  }

  // Initial generation
  generateEscalation();
}

/* ==========================================================================
   Clipboard Helper
   ========================================================================== */
function copyToClipboard(text, successMsg = "Copied to clipboard!") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast("Copy failed, please select manually", "⚠");
  }
  textArea.remove();
}

/* ==========================================================================
   Modal Close Handlers
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('modal-scenario-complete');
  const closeBtn = document.getElementById('modal-close-btn');
  const nextBtn = document.getElementById('modal-next-scenario-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal?.classList.add('hidden');
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      modal?.classList.add('hidden');
      const currentIndex = SCENARIO_DATA.findIndex(s => s.id === AppState.activeScenarioId);
      const nextIndex = (currentIndex + 1) % SCENARIO_DATA.length;
      loadScenario(SCENARIO_DATA[nextIndex].id);
    });
  }
}

/* ==========================================================================
   App Bootstrap
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndAudio();
  initTabs();
  initSimulator();
  initSOPs();
  initExam();
  initNestingMacros();
  initSMEBuilder();
  initModals();
  updateReadinessScore();
});
