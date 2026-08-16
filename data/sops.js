// Comprehensive Amazon CSA Knowledge Base & Standard Operating Procedures (SOP) Database
export const SOP_DATA = [
  {
    id: "sop-dnr",
    title: "Delivered Not Received (DNR) Protocol",
    category: "Delivery & Logistics",
    critical: true,
    summary: "Standard resolution path when tracking shows 'Delivered' but customer states package is missing.",
    steps: [
      "Verify customer identity and order number.",
      "Check tracking status and carrier details (Amazon Logistics, UPS, USPS, FedEx).",
      "Check Photo on Delivery (POD) and GPS coordinates if available in CRM.",
      "If marked delivered < 48 hours ago: Advise customer to check secure locations, household members, neighbors, and wait up to 48 hours as carriers sometimes prematurely scan.",
      "If marked delivered > 48 hours ago: Verify account concession eligibility.",
      "Offer Replacement if stock is available; if out of stock or time-sensitive, issue Full Refund (Original Payment Method or Gift Card balance based on preference).",
      "Document the case with standard DNR notes and file carrier incident report."
    ],
    exceptions: [
      "High-Value items (>$500) may require Incident Report (Police / Carrier investigation) before concession.",
      "Accounts with high concession history / concession warning flag require SME or Lead approval."
    ],
    tags: ["DNR", "Tracking", "Missing Package", "Carrier", "Refund", "Replacement"]
  },
  {
    id: "sop-verification",
    title: "Customer Authentication & Account Security (Zero-Tolerance)",
    category: "Security & Account",
    critical: true,
    summary: "Mandatory security questions and data protection rules before accessing or disclosing account information.",
    steps: [
      "Confirm Customer Full Name associated with the account.",
      "Verify at least TWO secondary identifiers (e.g., Email address, Billing Address, Last 4 digits of payment card, Recent Order ID).",
      "For phone OTP verification: Trigger one-time password to the registered phone number ONLY upon customer agreement.",
      "NEVER read out sensitive data (full credit card number, complete password, CVV, or complete unverified address) to the customer.",
      "NEVER change account email or ship-to address to an unverified location requested mid-chat without secondary authentication."
    ],
    exceptions: [
      "If the customer fails verification 3 times, state polite refusal, log the security event, and guide them to Amazon.com Account Recovery page.",
      "If customer is calling on behalf of another person, refuse action unless authorized as an official account manager."
    ],
    tags: ["Authentication", "Security", "Zero-Tolerance", "OTP", "Verification", "Compliance"]
  },
  {
    id: "sop-damaged-defective",
    title: "Damaged, Defective, or Incorrect Item Received",
    category: "Returns & Replacements",
    critical: false,
    summary: "Workflow for physical goods arriving broken, defective, or different from listing description.",
    steps: [
      "Acknowledge the inconvenience and validate the item details and order date.",
      "Confirm if the item was 'Fulfilled by Amazon' (FBA) or 'Fulfilled by Merchant' (FBM).",
      "For FBA Items within 30 days: Issue pre-paid return mailing label / QR code for drop-off (Kohls, UPS, Whole Foods).",
      "Check if item is eligible for 'Returnless Refund' or 'Advance Replacement'.",
      "If item is hazmat, perishable, or return costs exceed item value (<$15), system may approve returnless concession.",
      "Instruct customer on packing guidelines and estimated refund timeline (3-5 business days upon carrier scan)."
    ],
    exceptions: [
      "Customized or personalized items are generally non-returnable unless error was on the seller's side.",
      "Items beyond 30-day window require manufacturer warranty referral or exception approval."
    ],
    tags: ["Damaged", "Defective", "Return", "FBA", "Returnless Refund", "Drop-off"]
  },
  {
    id: "sop-digital-prime",
    title: "Digital Orders & Prime Video / Kindle Accidental Purchases",
    category: "Digital & Subscriptions",
    critical: false,
    summary: "Handling accidental digital media rentals, Kindle book purchases, and Prime membership cancellations.",
    steps: [
      "Confirm digital order timestamp and device used.",
      "Prime Video: If watched duration is 0% (or less than a few minutes), approve one-time accidental purchase refund.",
      "Kindle Books: Eligible for self-service or agent refund if requested within 7 days of purchase and not fully read.",
      "Amazon Music / Appstore In-App Purchases: Check device purchase controls and guide customer to enable Parental Controls / PIN.",
      "Prime Membership Cancellation: If unused in current billing cycle, process full pro-rated refund; if benefits were utilized, schedule cancellation at end of term."
    ],
    exceptions: [
      "Accounts with repeated digital return abuse within 90 days will have automatic refund capability blocked.",
      "Third-party subscriptions (e.g., Paramount+ via Prime Video Channels) follow separate channel partner terms."
    ],
    tags: ["Digital", "Prime Video", "Kindle", "Subscriptions", "Accidental Purchase", "Prime"]
  },
  {
    id: "sop-atoz-claims",
    title: "Third-Party Marketplace (FBM) & A-to-z Guarantee Claims",
    category: "Marketplace & 3P",
    critical: false,
    summary: "Resolving disputes between buyers and 3rd-party marketplace sellers under the A-to-z Guarantee.",
    steps: [
      "Verify order was sold and shipped by a 3rd Party Merchant (FBM).",
      "Check if buyer has sent a message to the seller via Buyer-Seller Messaging.",
      "Wait Requirement: Seller must be given 48 hours to respond and resolve the inquiry.",
      "If 48 hours have passed without seller resolution OR seller refused a valid return: File an A-to-z Guarantee Claim on behalf of the customer.",
      "Document reason code: Item Not Received, Item Materially Different, or Return Request Denied.",
      "Advise customer that claims team investigates and resolves within 3-5 business days."
    ],
    exceptions: [
      "Do NOT file A-to-z claim if 48-hour seller response window is still active unless severe harassment/fraud is evident."
    ],
    tags: ["A-to-z", "Marketplace", "FBM", "Third Party", "Dispute", "Claims"]
  },
  {
    id: "sop-concession-matrix",
    title: "Goodwill Concessions & Promotional Credits Protocol",
    category: "Concessions & Policies",
    critical: true,
    summary: "Guidelines on when and how much promotional gift card or shipping concession can be granted.",
    steps: [
      "Identify the root cause of customer friction (e.g., late guaranteed delivery, agent misguidance, multiple contacts).",
      "Check associate concession authorization tier (Standard Tier: Up to $10 - $20 Courtesy Credit).",
      "Apply courtesy credit strictly as an Amazon Account Balance Credit or Promo Balance.",
      "Document clear business justification in CRM contact notes.",
      "Do NOT promise future recurring discounts or off-platform reimbursements."
    ],
    exceptions: [
      "Never issue concession simply to boost personal CSAT if the customer issue is resolved according to standard policy.",
      "High volume concession spikes are audited daily by CS Operations QA."
    ],
    tags: ["Concessions", "Promo Credit", "Goodwill", "CSAT", "Policy", "Audit"]
  }
];
