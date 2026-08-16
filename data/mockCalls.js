// Comprehensive Realistic Amazon Mock Call Scenarios & Verbatim Transcripts
export const MOCK_CALLS_DATA = [
  {
    id: "call-lost-item-dnr",
    title: "Lost Package (DNR > 48h) — High Friction & Urgent Resolution",
    category: "Lost Item / Delivery",
    callType: "Inbound Phone Call",
    caller: "Marcus Vance",
    customerTenure: "Prime Member (6 Years)",
    orderId: "113-9081234-5512309",
    item: "Levoit Air Purifier Core 400S ($219.99)",
    trackingStatus: "Marked 'Delivered to Porch' 3 days ago by AMZL",
    callDuration: "3 min 45 sec",
    summary: "Customer waited the mandatory 48 hours after delivery scan. Package is missing. Associate verifies account, confirms concession eligibility, and executes an immediate priority replacement.",
    transcript: [
      {
        speaker: "Agent",
        text: "Thank you for calling Amazon Customer Support! My name is Alex. May I please have your first and last name, along with the email address linked to your Amazon account?",
        notes: "Proper warm opening with mandatory standard verification request."
      },
      {
        speaker: "Customer",
        text: "Hi Alex, my name is Marcus Vance, email is m.vance@example.com. Look, I'm calling because your app says my Levoit Air Purifier was delivered 3 days ago, but there is nothing here. I waited the 48 hours like your automated email told me to, but still nothing!",
        notes: "Customer followed standard 48h waiting SOP and provides verification details."
      },
      {
        speaker: "Agent",
        text: "Thank you for confirming your name and email, Marcus. I completely understand how frustrating it is to wait on an essential item like an air purifier, especially when the tracking says delivered. Thank you for already giving it that 48-hour window. I am pulling up your order 113-9081234 right now to fix this for you.",
        notes: "Strong empathy statement, acknowledges customer's patience, takes ownership without blaming carrier."
      },
      {
        speaker: "Customer",
        text: "Thank you. My allergies have been acting up and I really needed it this weekend.",
        notes: "Customer shares emotional context."
      },
      {
        speaker: "Agent",
        text: "I completely empathize, Marcus. I just checked the delivery photo and GPS ping—it seems the driver may have left it at the wrong building complex down the street. Since it has been past 48 hours, I can issue an immediate free replacement with One-Day Priority Shipping so it arrives tomorrow by 1 PM, or I can process a full refund to your card. Which would you prefer?",
        notes: "Checked internal CRM (POD + GPS), confirmed eligibility, and provided customer choice."
      },
      {
        speaker: "Customer",
        text: "Tomorrow by 1 PM would be fantastic. Please send the replacement.",
        notes: "Customer selects replacement."
      },
      {
        speaker: "Agent",
        text: "May I place you on a brief hold for about 1 minute while I lock in that priority replacement in our fulfillment system?",
        notes: "Proper hold request with clear time estimate."
      },
      {
        speaker: "Customer",
        text: "Sure, go ahead.",
        notes: "Customer gives permission for hold."
      },
      {
        speaker: "Agent",
        text: "[Returns from hold] Thank you so much for holding, Marcus! I have successfully generated replacement order #113-4491820-0091823 with Priority Next-Day Delivery at $0.00 charge. It is scheduled to arrive tomorrow, Tuesday before 1:00 PM. I also filed an internal carrier investigation for the lost unit so this doesn't happen again.",
        notes: "Clear confirmation of new order number, zero charges, guaranteed ETA, and carrier note."
      },
      {
        speaker: "Customer",
        text: "Alex, you've been a lifesaver. Thank you so much for taking care of it so quickly!",
        notes: "Positive CSAT sentiment achieved."
      },
      {
        speaker: "Agent",
        text: "It was truly my pleasure! You will receive the tracking confirmation email within 15 minutes. Have I answered all of your questions today, Marcus?",
        notes: "Validation question to confirm First Contact Resolution (FCR)."
      },
      {
        speaker: "Customer",
        text: "Yes, you did everything. Have a great day!",
        notes: "Customer validates resolution."
      },
      {
        speaker: "Agent",
        text: "Thank you for choosing Amazon and for being a valued Prime member. Have a wonderful rest of your day and feel better soon!",
        notes: "Warm, personalized closing referencing customer's situation."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "Verified customer before discussing order details.",
        "Acknowledged the 48-hour wait time with empathy.",
        "Offered choice between replacement and refund.",
        "Asked permission before placing customer on hold."
      ]
    }
  },
  {
    id: "call-damaged-returnless",
    title: "Damaged & Leaking Liquid (Returnless Concession SOP)",
    category: "Damaged Item / Concession",
    callType: "Inbound Phone Call",
    caller: "Linda Chen",
    customerTenure: "Amazon Customer (3 Years)",
    orderId: "111-7782910-1092834",
    item: "1-Gallon Organic Extra Virgin Olive Oil ($38.50)",
    trackingStatus: "Delivered 2 hours ago",
    callDuration: "2 min 50 sec",
    summary: "Customer received a shattered glass container of olive oil that soaked the shipping box. Associate avoids asking customer to return hazardous broken glass and processes a Returnless Refund.",
    transcript: [
      {
        speaker: "Agent",
        text: "Thank you for calling Amazon. My name is Jordan. May I please have your full name and the billing zip code on your account?",
        notes: "Professional opening and secure 2-point authentication."
      },
      {
        speaker: "Customer",
        text: "Hello Jordan, my name is Linda Chen, zip code is 98101. I just opened my Amazon box and it is a complete disaster! The glass gallon of olive oil completely shattered in transit. Oil is leaking through the cardboard onto my kitchen counter and there's broken glass everywhere!",
        notes: "Customer is distressed about safety and property mess."
      },
      {
        speaker: "Agent",
        text: "Oh no, Linda! I am so sorry to hear that. Please be extremely careful with those broken glass shards—please do not handle the broken bottle directly so you don't cut yourself. Let me get this taken care of immediately so you don't have to worry about returning anything.",
        notes: "Safety-first empathy! Immediate reassurance that return of hazardous material is NOT required."
      },
      {
        speaker: "Customer",
        text: "Wait, so I don't have to pack up broken glass and take it to UPS? That would be so dangerous.",
        notes: "Customer expresses relief regarding return policy."
      },
      {
        speaker: "Agent",
        text: "Absolutely not! For your safety and according to Amazon Hazmat SOP, items containing broken glass or leaking liquids qualify for a Returnless Concession. I have already processed a full refund of $38.50 back to your original Visa card, which will reflect in 3 to 5 business days. Please safely dispose of the damaged package.",
        notes: "Correctly applied Hazmat/Liquid returnless refund SOP with clear timeline."
      },
      {
        speaker: "Customer",
        text: "That is such a relief, Jordan. Can you also send me a replacement or should I re-order?",
        notes: "Customer inquiry on replacement."
      },
      {
        speaker: "Agent",
        text: "You can certainly re-order directly through your app whenever you're ready, or I can place the replacement order for you right now with free expedited shipping.",
        notes: "Helpful, proactive customer care."
      },
      {
        speaker: "Customer",
        text: "I will just re-order it on my app now that the refund is processed. Thank you so much for being so helpful!",
        notes: "Customer is satisfied."
      },
      {
        speaker: "Agent",
        text: "You are very welcome, Linda. I've sent the refund receipt to your email. Is there anything else I can assist you with today?",
        notes: "Standard FCR validation."
      },
      {
        speaker: "Customer",
        text: "Nope, that was super fast. Have a nice day!",
        notes: "Clean conclusion."
      },
      {
        speaker: "Agent",
        text: "Thank you for calling Amazon. Have a wonderful day and stay safe!",
        notes: "Polite sign-off."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "Prioritized customer physical safety regarding broken glass.",
        "Correctly identified liquid/hazmat returnless refund policy.",
        "Prevented improper return shipment to fulfillment center."
      ]
    }
  },
  {
    id: "call-wrong-item-baby",
    title: "Wrong Item Received (Urgent Infant Formula Replacement)",
    category: "Wrong Item / Urgent Delivery",
    callType: "Inbound Phone Call",
    caller: "Daniel Roberts",
    customerTenure: "Prime Member (4 Years)",
    orderId: "114-1192830-4819201",
    item: "Enfamil Infant Formula 4-Pack ($124.00)",
    trackingStatus: "Delivered 1 hour ago",
    callDuration: "3 min 15 sec",
    summary: "Customer ordered infant formula for his baby but received a pair of garden gloves instead. Associate handles high-urgency friction, issues priority replacement, and provides prepaid drop-off label.",
    transcript: [
      {
        speaker: "Agent",
        text: "Thank you for contacting Amazon. My name is Priya. May I have your name and the delivery address on your order?",
        notes: "Friendly greeting and account verification."
      },
      {
        speaker: "Customer",
        text: "Hi Priya, Daniel Roberts here, address is 450 Maple Avenue. I am in a real bind right now. I ordered baby formula for my 6-month-old that was supposed to arrive today. I opened the box and it's a pair of heavy-duty gardening gloves! I am running out of formula for my baby tonight. What can you do?!",
        notes: "High-stress urgency situation."
      },
      {
        speaker: "Agent",
        text: "Daniel, I completely understand the extreme urgency of this situation, and I am so deeply sorry for this warehouse mix-up. Let me immediately check local same-day inventory to see if we can get your formula delivered this evening, or arrange a same-day locker pickup.",
        notes: "Immediate empathetic validation of baby formula urgency; prioritizes speed of resolution."
      },
      {
        speaker: "Customer",
        text: "Please check, that would help so much.",
        notes: "Customer waiting on inventory check."
      },
      {
        speaker: "Agent",
        text: "Thank you for your patience, Daniel. I located stock at our local sub-same-day delivery station. I have placed an emergency replacement order for the Enfamil 4-Pack at no charge, scheduled for delivery between 5:00 PM and 10:00 PM tonight. I also waived all shipping fees.",
        notes: "Executed sub-same-day emergency dispatch."
      },
      {
        speaker: "Customer",
        text: "Oh thank goodness! And what do I do with these garden gloves?",
        notes: "Inquiry on incorrect item return."
      },
      {
        speaker: "Agent",
        text: "I generated a pre-paid QR code return label sent to your email. Whenever you have time in the next 30 days, you can simply show that QR code at any UPS Store or Kohl's drop-off without needing a box or tape. But please focus on your family tonight!",
        notes: "Clear, zero-friction return instructions with extended 30-day window."
      },
      {
        speaker: "Customer",
        text: "Priya, thank you from the bottom of my heart. You saved the evening.",
        notes: "Delighted customer sentiment."
      },
      {
        speaker: "Agent",
        text: "I am so glad I could help you and your baby, Daniel! Have I resolved everything for you today?",
        notes: "Warm FCR check."
      },
      {
        speaker: "Customer",
        text: "Yes, 100%. Thank you!",
        notes: "Call resolved."
      },
      {
        speaker: "Agent",
        text: "Thank you for being an Amazon Prime member. Take care of your little one and have a great evening!",
        notes: "Personalized sign-off."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "Treated baby food / medical urgency with top priority.",
        "Utilized Sub-Same Day fulfillment capabilities.",
        "Provided QR code drop-off instructions without causing stress."
      ]
    }
  },
  {
    id: "call-late-refund-status",
    title: "Late Refund Inquiry (Drop-off Scan vs Bank Processing Window)",
    category: "Refunds & Billing",
    callType: "Inbound Phone Call",
    caller: "Samantha Miller",
    customerTenure: "Prime Member (8 Years)",
    orderId: "112-5501928-3382910",
    item: "Sony Wireless Noise-Cancelling Headphones ($298.00)",
    trackingStatus: "Dropped off at Kohl's 5 days ago",
    callDuration: "3 min 10 sec",
    summary: "Customer dropped off return at Kohl's 5 days ago and is upset that the credit is not showing on her bank statement. Associate verifies drop-off scan, explains bank settlement timelines, and verifies refund authorization.",
    transcript: [
      {
        speaker: "Agent",
        text: "Thank you for calling Amazon Customer Service. My name is Chris. May I please verify your name and the last 4 digits of the card used for your recent order?",
        notes: "Standard greeting and payment method authentication."
      },
      {
        speaker: "Customer",
        text: "Hi Chris, Samantha Miller, card ends in 4109. I returned a $300 pair of Sony headphones at the Kohl's drop-off 5 days ago on Wednesday. The guy gave me a receipt, but I checked my bank account today and the money is still not there! Where is my refund?",
        notes: "Customer is concerned about missing $300 refund."
      },
      {
        speaker: "Agent",
        text: "Thank you for verifying your details, Samantha. I know how important it is to see that credit back in your account, especially for a high-value item like those Sony headphones. Let me check the carrier drop-off tracking ID and our payment gateway status right now.",
        notes: "Validates concern and takes immediate ownership."
      },
      {
        speaker: "Customer",
        text: "Please do, I have the receipt in front of me.",
        notes: "Customer provides receipt availability."
      },
      {
        speaker: "Agent",
        text: "I have good news! I checked the carrier logs: Kohl's scanned your return on Wednesday at 2:15 PM, and Amazon's billing system issued the refund of $298.00 back to your Visa on Thursday morning. The refund authorization code is REF-9928104.",
        notes: "Detailed transparency with timestamp and reference code."
      },
      {
        speaker: "Customer",
        text: "Okay, but why isn't it showing on my online banking app yet?",
        notes: "Customer questions banking delays."
      },
      {
        speaker: "Agent",
        text: "Great question, Samantha! While Amazon releases the funds immediately upon carrier processing, standard banking institutions typically take 3 to 5 business days to clear and post merchant refunds to your statement. Because the weekend occurred, your bank should post the funds by tomorrow (Tuesday) evening at the latest.",
        notes: "Accurately distinguishes between Amazon refund issuance and financial institution clearance timelines."
      },
      {
        speaker: "Customer",
        text: "Ah, that makes sense. I forgot about the weekend! Can you email me the refund receipt with that code just in case?",
        notes: "Customer understands and requests proof."
      },
      {
        speaker: "Agent",
        text: "I just sent the official Amazon Refund Confirmation email directly to your inbox with the breakdown and ARN tracking number. Have I resolved all of your questions today, Samantha?",
        notes: "Sent ARN receipt + FCR confirmation."
      },
      {
        speaker: "Customer",
        text: "Yes, you explained it clearly. Thanks Chris!",
        notes: "Customer satisfied."
      },
      {
        speaker: "Agent",
        text: "It was my pleasure, Samantha. Thank you for being a Prime member and have a wonderful week ahead!",
        notes: "Professional close."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "Verified carrier scan timestamp to confirm physical item custody.",
        "Provided Acquirer Reference Number (ARN) / refund authorization.",
        "Accurately educated customer on 3-5 business day bank processing window."
      ]
    }
  },
  {
    id: "call-prime-autorenew",
    title: "Prime Annual Auto-Renewal Billing & Pro-rated Cancellation",
    category: "Subscriptions & Prime",
    callType: "Inbound Phone Call",
    caller: "George Henderson",
    customerTenure: "Amazon Customer (5 Years)",
    orderId: "SUB-PRIME-2026-8819",
    item: "Amazon Prime Annual Membership ($139.00)",
    trackingStatus: "Billed 2 days ago",
    callDuration: "2 min 40 sec",
    summary: "Customer was surprised by an unexpected $139 annual Prime renewal fee. Associate checks benefit usage, confirms zero benefits used since renewal, and issues a 100% full pro-rated refund.",
    transcript: [
      {
        speaker: "Agent",
        text: "Thank you for contacting Amazon Support. My name is Taylor. May I have your full name and the email address on your account please?",
        notes: "Opening & security verification."
      },
      {
        speaker: "Customer",
        text: "George Henderson, g.henderson@workmail.com. I just checked my credit card bill and I have an unauthorized $139 charge from Amazon! I did not buy anything for $139. Did my card get stolen?!",
        notes: "Customer panicked about potential card fraud."
      },
      {
        speaker: "Agent",
        text: "Hello George, thank you for confirming your info. I understand that seeing an unexpected charge is alarming! Let me check your account billing history right away to identify this charge for you.",
        notes: "De-escalates panic and investigates billing."
      },
      {
        speaker: "Customer",
        text: "Please check, I am ready to dispute it with my bank.",
        notes: "Customer mentions bank dispute."
      },
      {
        speaker: "Agent",
        text: "I see the charge right here, George. It was your annual Amazon Prime Membership auto-renewal that processed 2 days ago on August 14th. It looks like your 1-year subscription reached its renewal date.",
        notes: "Clear explanation of billing root cause."
      },
      {
        speaker: "Customer",
        text: "Oh! I forgot I signed up for Prime a year ago for holiday shopping. I really don't use it anymore. Can I cancel it and get my money back?",
        notes: "Customer requests cancellation and refund."
      },
      {
        speaker: "Agent",
        text: "You certainly can, George! I checked your Prime activity since the renewal date and you have not used any Prime shipping benefits, Prime Video, or Amazon Music. According to our Prime Membership policy, you are eligible for a 100% full refund of the $139.00. I can process the cancellation and refund right now.",
        notes: "Checked benefit utilization SOP. Approved full refund."
      },
      {
        speaker: "Customer",
        text: "Yes, please do that! Thank you.",
        notes: "Customer confirms action."
      },
      {
        speaker: "Agent",
        text: "I have successfully cancelled the Prime membership and initiated the full refund of $139.00 back to your credit card. You will see that reflected in 3 to 5 business days. Is there anything else on your Amazon account I can help you with today?",
        notes: "Confirmation of cancellation and refund + FCR check."
      },
      {
        speaker: "Customer",
        text: "That was so painless. I appreciate your quick help, Taylor!",
        notes: "Customer relieved."
      },
      {
        speaker: "Agent",
        text: "You are very welcome, George. Thank you for calling Amazon and have a great rest of your day!",
        notes: "Polite close."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "Quickly clarified auto-renewal charge to ease fraud concerns.",
        "Verified zero Prime benefit usage to authorize full refund.",
        "Prevented bank chargeback through prompt first contact resolution."
      ]
    }
  },
  {
    id: "call-3p-hostile-seller",
    title: "3P Marketplace Seller Dispute (Defective Item & A-to-z Claim)",
    category: "Marketplace & A-to-z",
    callType: "Inbound Phone Call",
    caller: "Maria Santos",
    customerTenure: "Prime Member (2 Years)",
    orderId: "701-9928104-0019283",
    item: "Cordless Drill Kit 20V ($119.00)",
    trackingStatus: "Delivered 6 days ago (Merchant: TechPro Direct - FBM)",
    callDuration: "3 min 30 sec",
    summary: "Customer received a broken drill from a third-party seller. The seller refused to provide a prepaid return label and demanded $25 restocking fee. Associate steps in under A-to-z Guarantee.",
    transcript: [
      {
        speaker: "Agent",
        text: "Thank you for calling Amazon Customer Support. My name is Kevin. May I have your full name and billing zip code please?",
        notes: "Standard opening & 2-point authentication."
      },
      {
        speaker: "Customer",
        text: "Maria Santos, zip code 33101. Kevin, I am fed up with this third-party seller on Amazon. I bought a drill that arrived with a completely cracked battery that won't hold a charge. I messaged the seller 3 days ago asking for a return label. The seller replied saying I have to pay $25 shipping and restocking fee to return a broken drill! Why is Amazon allowing this?",
        notes: "Customer reporting 3P seller violation of Amazon return policy."
      },
      {
        speaker: "Agent",
        text: "Maria, I am so sorry you had to deal with that! Third-party sellers on Amazon are required to match or exceed Amazon's return policies, and customers should NEVER have to pay return fees for items that arrive defective or damaged. Let me review your message history with this seller right now.",
        notes: "Reassures customer on Amazon marketplace standards and checks buyer-seller messaging."
      },
      {
        speaker: "Customer",
        text: "Yes, look at the messages, he was very rude.",
        notes: "Customer confirms messages."
      },
      {
        speaker: "Agent",
        text: "I am reviewing the message thread right now. Since more than 48 hours have passed and the seller refused to provide a pre-paid label for a defective product, you are 100% protected under our Amazon A-to-z Guarantee. I am filing the claim right now for the full $119.00 refund on your behalf.",
        notes: "Validates 48-hour seller response window and files A-to-z claim with proper reason code."
      },
      {
        speaker: "Customer",
        text: "Thank you! What do I need to do with the broken drill?",
        notes: "Inquiry on disposition."
      },
      {
        speaker: "Agent",
        text: "You do not need to ship it back to the seller or pay any fees. Our A-to-z Claims Guarantee team will review the claim and complete your full refund within 3 to 5 business days. You will receive email notifications as soon as it's finalized. You don't need to communicate with the seller anymore.",
        notes: "Protects customer from further seller harassment and provides clear timeline."
      },
      {
        speaker: "Customer",
        text: "Kevin, that is such a huge relief. Amazon always takes care of their customers.",
        notes: "Customer trust restored."
      },
      {
        speaker: "Agent",
        text: "We always stand behind our customer promise, Maria. Have I resolved all of your questions today?",
        notes: "FCR verification."
      },
      {
        speaker: "Customer",
        text: "Yes, you did everything perfectly. Thank you so much!",
        notes: "Call resolved."
      },
      {
        speaker: "Agent",
        text: "Thank you for choosing Amazon. Have a wonderful rest of your day!",
        notes: "Closing."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "Enforced Amazon 3P marketplace return policy compliance.",
        "Verified 48h buyer-seller message timestamp before filing claim.",
        "Shielded customer from unauthorized seller restocking fees."
      ]
    }
  }
];
