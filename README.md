# Amazon Customer Service Associate (CSA) Training & Nesting Mastery

An interactive web application designed to help customer service associates master Amazon Standard Operating Procedures (SOPs), pass QA compliance audits, excel in nesting/OJT, and build muscle memory for live chat and phone interactions.

---

## 🚀 Key Features

### 1. 🎯 Interactive Mock Contact Simulator
- **Branching Decision Scenarios:** Realistic customer contacts covering DNR (Delivered Not Received), damaged goods, account authentication, accidental digital purchases, and 3P Marketplace A-to-z claims.
- **Dynamic Customer Sentiment Gauge:** Real-time visual feedback based on your empathy, speed, and policy accuracy.
- **Live Scoring & AHT Tracking:** Evaluates Empathy & Tone, Process & Security Compliance, and First Contact Resolution (FCR).
- **Web Audio Sound Effects:** Real-time audio cues for message pings, success chimes, and QA warnings.

### 2. 📚 SOP Knowledge Engine
- **Instant Keyword & Category Search:** Real-time filtering across Amazon policies, concessions, delivery rules, return matrices, and exception boundaries.
- **Visual Decision Tree:** Step-by-step interactive workflow for complex procedures like 48-hour DNR logic and concession matrices.

### 3. 📝 QA & Certification Exam Simulator
- **Timed Practice Tests:** 10 randomized exam questions with instant scoring.
- **Zero-Tolerance Compliance Flags:** Highlights critical security protocols (verification rules, unauthorized concessions) to prevent immediate floor failures.
- **Detailed Explanations:** Real-time SOP references on every question.

### 4. ⚡ OJT Nesting Command Center & Phrase Library
- **1-Click Macro Phrasing:** Fast copy-to-clipboard templates for greetings, hold permissions, de-escalation, policy firmness, and CSAT-friendly closings.
- **Acronym Decoder:** Instant search glossary for Amazon CS terms (`DNR`, `FCR`, `AHT`, `ACW`, `CSAT`, `KNET`, `POD`, `FBA`, `FBM`, `SME`, etc.).

### 5. 🛠️ SME / Lead Escalation Message Builder
- Form generator that creates structured, professional escalation messages formatted for **Slack**, **Amazon Chime**, or **MS Teams** during nesting support.

---

## 💻 Running Locally

You can run the web app locally using standard Node.js or any static file server:

```bash
# Navigate to the project directory
cd amazon-csa-mastery

# Start local preview server (port 3000)
npm run dev
# Or with python:
python3 -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

---

## 🐙 Pushing to Your GitHub Repository

Initialize and push this project to your GitHub repository in 3 easy steps:

```bash
cd amazon-csa-mastery

# 1. Initialize git and commit files
git init
git add .
git commit -m "feat: complete amazon csa training and nesting simulator webapp"

# 2. Set your branch to main
git branch -M main

# 3. Link your GitHub repository and push
# Replace <YOUR-GITHUB-USERNAME> and <YOUR-REPO-NAME> with your actual repository:
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

*(If using GitHub CLI `gh`, you can run `gh repo create amazon-csa-mastery --public --source=. --push`)*

---

## ▲ Deploying to Vercel

This repository is pre-configured with `vercel.json` for 1-click deployment.

### Option A: Via GitHub (Recommended)
1. Push your repository to GitHub (following the steps above).
2. Visit [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository `amazon-csa-mastery`.
4. Click **Deploy**. Vercel will automatically detect the static build configuration and provide an instant live URL.

### Option B: Via Vercel CLI
```bash
# Install and run Vercel CLI
npx vercel
```

---

## 🛠️ Architecture & Tech Stack
- **Core:** Semantic HTML5, Vanilla JavaScript (ES Modules), Modern CSS3 (CSS Variables, Grid/Flexbox).
- **Audio Engine:** Web Audio API for zero-dependency sound synthesis.
- **State Management:** LocalStorage persistence for user themes, sound preferences, and session performance.
- **Zero Build Friction:** No heavy bundlers required; runs natively in modern browsers and deploys instantly to any static host or edge CDN.
