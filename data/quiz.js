// Certification & QA Exam Question Bank
export const QUIZ_QUESTIONS = [
  {
    id: "q-1",
    category: "Security & Verification",
    critical: true,
    question: "A caller asks for the tracking status of an order. What is the MINIMUM verification requirement before sharing shipping or order details?",
    options: [
      "Ask only for their first name.",
      "Confirm full name and at least two secondary identifiers (such as billing address, email, or last 4 digits of card on file).",
      "Read out their home address and ask if it sounds familiar.",
      "No verification is needed if they provide the 17-digit Order ID."
    ],
    correctAnswer: 1,
    explanation: "Standard compliance requires full name plus at least two secondary account identifiers. Reading out sensitive account data is a critical Zero-Tolerance security breach."
  },
  {
    id: "q-2",
    category: "Delivery & DNR",
    critical: false,
    question: "An order delivered by Amazon Logistics (AMZL) is marked as delivered 6 hours ago, but the customer states they cannot find the package. What is the correct initial SOP step?",
    options: [
      "Immediately issue a full refund without questions.",
      "Advise the customer to check delivery photo/secure spots and allow up to 48 hours, as carriers sometimes scan ahead.",
      "Tell the customer to file a police report immediately.",
      "Transfer the customer to the carrier's external phone line."
    ],
    correctAnswer: 1,
    explanation: "Under the DNR (Delivered Not Received) SOP, packages scanned delivered within 48 hours may turn up. If the customer has immediate urgency or high friction, assess stock/options, but standard guidance is to check POD and wait up to 48 hours before concession."
  },
  {
    id: "q-3",
    category: "Returns & Concessions",
    critical: true,
    question: "Which of the following is considered an UNAUTHORIZED concession that can trigger a QA audit flag?",
    options: [
      "Providing a prepaid return mailing label for an item damaged upon arrival within 30 days.",
      "Issuing a $50 courtesy gift card to an angry customer without Lead/SME approval to prevent a negative CSAT.",
      "Issuing an immediate replacement for an out-of-stock item when authorized by the system.",
      "Applying a $5 promotional credit for a delayed guaranteed Prime delivery within standard associate limits."
    ],
    correctAnswer: 1,
    explanation: "Bribery/concession inflation (issuing unauthorized high-value credits solely to manipulate CSAT) violates Amazon Customer Service Code of Conduct and Concession Matrices."
  },
  {
    id: "q-4",
    category: "Marketplace & 3P",
    critical: false,
    question: "When is an associate authorized to file an A-to-z Guarantee Claim for an order Fulfilled by Merchant (FBM)?",
    options: [
      "Immediately when the customer opens a chat about a 3P item.",
      "Only after the customer has messaged the 3P seller and 48 hours have elapsed without a satisfactory seller response.",
      "Only if the merchant has been banned from Amazon.",
      "Never; customers must always file claims directly through their bank."
    ],
    correctAnswer: 1,
    explanation: "3P merchants must be given a 48-hour response window via Buyer-Seller messaging before an agent can escalate to an A-to-z Guarantee claim."
  },
  {
    id: "q-5",
    category: "Digital & Prime",
    critical: false,
    question: "A customer calls stating their child accidentally rented a 4K movie on Prime Video 30 minutes ago. The watch time shows 0 minutes. What is the SOP resolution?",
    options: [
      "Advise them that all digital sales are final and non-refundable.",
      "Process a one-time refund for the accidental purchase and guide the customer on setting up a Parental Control PIN.",
      "Transfer the call to Amazon Studios legal department.",
      "Cancel their entire Prime membership."
    ],
    correctAnswer: 1,
    explanation: "Accidental Prime Video rentals with 0 watch time are eligible for immediate refunds. Providing Parental Control PIN guidance ensures First Contact Resolution (FCR)."
  },
  {
    id: "q-6",
    category: "Security & Verification",
    critical: true,
    question: "A customer requests to change the delivery address for an in-transit $1,500 smartphone to a brand new shipping address. What MUST you do?",
    options: [
      "Immediately change the address since the customer has the order number.",
      "Refuse without explaining and hang up.",
      "Verify identity through 2-factor authentication (OTP) and follow carrier transit SOP (in-transit high-value reroutes cannot be sent to unverified addresses; offer locker pickup or cancel/reorder).",
      "Send the phone to the nearest retail store."
    ],
    correctAnswer: 2,
    explanation: "High-value address diversion is a primary vector for account takeovers. Mandatory multi-factor verification and carrier transit constraints must be strictly adhered to."
  },
  {
    id: "q-7",
    category: "Soft Skills & De-escalation",
    critical: false,
    question: "What is the best way to demonstrate 'Customer Obsession' during high-friction calls?",
    options: [
      "Over-apologize repeatedly ('I am so terribly sorry 20 times') without checking tool records.",
      "Acknowledge the customer's specific situation, state what you are doing in real-time, and take ownership of the resolution path.",
      "Agree with the customer that Amazon's systems are broken and blame delivery drivers.",
      "Put the customer on hold for 10 minutes without permission."
    ],
    correctAnswer: 1,
    explanation: "True Customer Obsession involves empathy paired with decisive ownership, transparent communication, and solution-driven execution."
  },
  {
    id: "q-8",
    category: "Returns & Concessions",
    critical: false,
    question: "A perishable food item or hazmat product arrived damaged. What is the standard return method?",
    options: [
      "Force customer to repackage hazmat goods and take them to a post office.",
      "Issue a Returnless Refund / Concession as perishable or hazardous items are generally non-returnable by mail.",
      "Demand the customer mail the damaged item directly to Amazon HQ.",
      "Deny any concession."
    ],
    correctAnswer: 1,
    explanation: "Due to safety regulations, hazardous materials, broken glass, or perishable groceries typically qualify for Returnless Refunds upon verification."
  },
  {
    id: "q-9",
    category: "Soft Skills & Metrics",
    critical: false,
    question: "What does 'FCR' stand for and why is it critical during nesting?",
    options: [
      "Fast Call Rate; finishing contacts as quickly as possible.",
      "First Contact Resolution; solving the customer's issue completely on the first contact so they don't have to reach out again.",
      "Frequent Customer Routing; assigning repeat callers to leads.",
      "Full Concession Rate; percentage of calls where free credits are given."
    ],
    correctAnswer: 1,
    explanation: "FCR (First Contact Resolution) measures whether an associate resolved the root cause of the customer's issue on the very first contact without unnecessary transfers or callbacks."
  },
  {
    id: "q-10",
    category: "Nesting & OJT",
    critical: false,
    question: "When escalating an issue in the Trainer/SME support channel during live nesting, what is the best format?",
    options: [
      "'Help, what do I do with this customer??'",
      "'[Order ID / Channel] + [Customer Issue] + [SOP Checked] + [My Proposed Action]'",
      "'Can someone take this call for me?'",
      "'Customer is angry, giving $50 credit.'"
    ],
    correctAnswer: 1,
    explanation: "Formatting your question with the Order ID, the SOP you checked, and your proposed resolution shows ownership, speeds up SME guidance, and demonstrates quality nesting."
  }
];
