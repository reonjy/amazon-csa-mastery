// Customer Service Associate Macro Templates & Acronym Decoder
export const MACRO_CATEGORIES = [
  {
    id: "openings",
    name: "Warm Openings & Greetings",
    macros: [
      {
        id: "m-open-1",
        title: "Standard Prime Greeting",
        text: "Hello [Customer Name]! Thank you for contacting Amazon Customer Support. My name is [Your Name]. I hope you're having a good day so far. How may I assist you today?"
      },
      {
        id: "m-open-2",
        title: "Empathy Opening (Friction Acknowledged)",
        text: "Hello [Customer Name], thank you for reaching out to us today. I see you are inquiring about order #[Order ID]. I'd be more than happy to look into this for you right away."
      }
    ]
  },
  {
    id: "verification",
    name: "Verification & Security Phrases",
    macros: [
      {
        id: "m-ver-1",
        title: "Standard 2-Point Verification",
        text: "For your account security and data protection, could you please confirm your full name, along with your billing address or the email address linked to your Amazon account?"
      },
      {
        id: "m-ver-2",
        title: "Requesting OTP Consent",
        text: "To protect your account details on this transaction, I can send a temporary One-Time Passcode to your registered phone number ending in [Last 2 Digits]. May I go ahead and trigger that code now?"
      },
      {
        id: "m-ver-3",
        title: "Polite Refusal on Verification Failure",
        text: "I truly apologize for any inconvenience, but because we are unable to verify the account details on file, I am unable to make changes or disclose order specifics on this line. For your protection, please visit Amazon.com/help to access secure account recovery options."
      }
    ]
  },
  {
    id: "hold",
    name: "Hold & Research Phrases",
    macros: [
      {
        id: "m-hold-1",
        title: "Hold Request with Clear Timeline",
        text: "I am actively checking the carrier tracking logs and warehouse records. May I place you on a brief hold for 1 to 2 minutes while I gather the necessary details?"
      },
      {
        id: "m-hold-2",
        title: "Hold Refresh / Check-in",
        text: "Thank you so much for your patience. I am still reviewing the details with our logistics team and need just one more minute. I appreciate you holding."
      },
      {
        id: "m-hold-3",
        title: "Returning from Hold",
        text: "Thank you for waiting, [Customer Name]! I have located the information regarding your shipment."
      }
    ]
  },
  {
    id: "deescalation",
    name: "De-escalation & Policy Phrasing",
    macros: [
      {
        id: "m-deesc-1",
        title: "Empathetic Ownership (Package Delay)",
        text: "I completely understand how important it was to receive this on time, and I truly apologize for the unexpected shipping delay. Let's find the best solution right now to get this resolved for you."
      },
      {
        id: "m-deesc-2",
        title: "Firm Policy with Alternative Option",
        text: "While I am unable to process a direct refund without the item being returned as per standard manufacturer guidelines, I can immediately provide you with a pre-paid return label with free scheduled home pickup."
      },
      {
        id: "m-deesc-3",
        title: "Damaged Goods Apology & Immediate Fix",
        text: "I am so sorry that your item arrived in that condition. That is definitely not the standard we strive for. I have already arranged a priority replacement order at no extra cost to you."
      }
    ]
  },
  {
    id: "closings",
    name: "Wrap-up & CSAT-Friendly Closings",
    macros: [
      {
        id: "m-close-1",
        title: "Comprehensive Resolution Recap",
        text: "To recap, I have [summarize action: e.g. processed your refund of $XX.XX / ordered your replacement item]. You will receive a confirmation email within 15 minutes. Have I answered all of your questions today?"
      },
      {
        id: "m-close-2",
        title: "Warm Farewell",
        text: "It was a pleasure assisting you today, [Customer Name]. Thank you for being a valued Amazon member, and have a wonderful rest of your day!"
      }
    ]
  }
];

export const ACRONYMS_DATA = [
  { term: "DNR", full: "Delivered Not Received", description: "Package marked as delivered by tracking system, but customer cannot locate it." },
  { term: "FCR", full: "First Contact Resolution", description: "Solving the customer's issue completely on their first contact without callbacks or transfers." },
  { term: "AHT", full: "Average Handling Time", description: "Total duration spent on a contact (Talk/Chat time + Hold time + After-Call Work)." },
  { term: "ACW", full: "After Call Work", description: "Time spent writing contact notes, filing tickets, and tagging reason codes after the customer disconnects." },
  { term: "CSAT", full: "Customer Satisfaction", description: "Post-contact survey rating submitted by customers measuring satisfaction with associate assistance." },
  { term: "SOP", full: "Standard Operating Procedure", description: "The official step-by-step policy and resolution workflow documented in the Amazon Knowledge Base." },
  { term: "KNET", full: "Knowledge Network", description: "Internal Amazon training portal hosting interactive training modules, courses, and compliance testing." },
  { term: "FBA", full: "Fulfilled by Amazon", description: "Items stored in Amazon fulfillment centers, packed, and shipped directly by Amazon logistics." },
  { term: "FBM", full: "Fulfilled by Merchant", description: "Items sold and shipped directly by 3rd-party marketplace sellers from their own facilities." },
  { term: "A-to-z", full: "A-to-z Guarantee", description: "Amazon buyer protection policy covering timely delivery and physical condition of items purchased from 3P sellers." },
  { term: "POD", full: "Photo on Delivery", description: "Visual image captured by delivery drivers upon leaving a package at customer premises." },
  { term: "OTP", full: "One-Time Passcode", description: "Dynamic verification code sent to customer's phone/email for high-value or account security validation." },
  { term: "SME", full: "Subject Matter Expert", description: "Senior support associate or team mentor available on support chat channels during nesting to guide floor agents." },
  { term: "OJT", full: "On-the-Job Training", description: "The nesting / bridge phase where trainees handle live customer contacts under supervision." }
];
