// Comprehensive Realistic Amazon Mock Call Scenarios & Verbatim Transcripts
// Agent Name: Mark (Consistent across all calls)

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
    summary: "Customer waited the mandatory 48 hours after delivery scan. Package is missing. Mark verifies account, confirms concession eligibility, and executes an immediate priority replacement.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon Customer Support! My name is Mark. May I please have your first and last name, along with the email address linked to your Amazon account?",
        notes: "Proper warm opening with mandatory standard verification request."
      },
      {
        speaker: "Customer",
        text: "Hi Mark, my name is Marcus Vance, email is m.vance@example.com. Look, I'm calling because your app says my Levoit Air Purifier was delivered 3 days ago, but there is nothing here. I waited the 48 hours like your automated email told me to, but still nothing!",
        notes: "Customer followed standard 48h waiting SOP and provides verification details."
      },
      {
        speaker: "Mark (Agent)",
        text: "Thank you for confirming your name and email, Marcus. I completely understand how frustrating it is to wait on an essential item like an air purifier, especially when the tracking says delivered. Thank you for already giving it that 48-hour window. I am pulling up your order 113-9081234 right now to fix this for you.",
        notes: "Strong empathy statement, acknowledges customer's patience, takes ownership without blaming carrier."
      },
      {
        speaker: "Customer",
        text: "Thank you. My allergies have been acting up and I really needed it this weekend.",
        notes: "Customer shares emotional context."
      },
      {
        speaker: "Mark (Agent)",
        text: "I completely empathize, Marcus. I just checked the delivery photo and GPS ping—it seems the driver may have left it at the wrong building complex down the street. Since it has been past 48 hours, I can issue an immediate free replacement with One-Day Priority Shipping so it arrives tomorrow by 1 PM, or I can process a full refund to your card. Which would you prefer?",
        notes: "Checked internal CRM (POD + GPS), confirmed eligibility, and provided customer choice."
      },
      {
        speaker: "Customer",
        text: "Tomorrow by 1 PM would be fantastic. Please send the replacement.",
        notes: "Customer selects replacement."
      },
      {
        speaker: "Mark (Agent)",
        text: "May I place you on a brief hold for about 1 minute while I lock in that priority replacement in our fulfillment system?",
        notes: "Proper hold request with clear time estimate."
      },
      {
        speaker: "Customer",
        text: "Sure, go ahead.",
        notes: "Customer gives permission for hold."
      },
      {
        speaker: "Mark (Agent)",
        text: "[Returns from hold] Thank you so much for holding, Marcus! I have successfully generated replacement order #113-4491820-0091823 with Priority Next-Day Delivery at $0.00 charge. It is scheduled to arrive tomorrow, Tuesday before 1:00 PM. I also filed an internal carrier investigation for the lost unit so this doesn't happen again.",
        notes: "Clear confirmation of new order number, zero charges, guaranteed ETA, and carrier note."
      },
      {
        speaker: "Customer",
        text: "Mark, you've been a lifesaver. Thank you so much for taking care of it so quickly!",
        notes: "Positive CSAT sentiment achieved."
      },
      {
        speaker: "Mark (Agent)",
        text: "It was truly my pleasure! You will receive the tracking confirmation email within 15 minutes. Have I answered all of your questions today, Marcus?",
        notes: "Validation question to confirm First Contact Resolution (FCR)."
      },
      {
        speaker: "Customer",
        text: "Yes, you did everything. Have a great day!",
        notes: "Customer validates resolution."
      },
      {
        speaker: "Mark (Agent)",
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
    summary: "Customer received a shattered glass container of olive oil that soaked the shipping box. Mark avoids asking customer to return hazardous broken glass and processes a Returnless Refund.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon. My name is Mark. May I please have your full name and the billing zip code on your account?",
        notes: "Professional opening and secure 2-point authentication."
      },
      {
        speaker: "Customer",
        text: "Hello Mark, my name is Linda Chen, zip code is 98101. I just opened my Amazon box and it is a complete disaster! The glass gallon of olive oil completely shattered in transit. Oil is leaking through the cardboard onto my kitchen counter and there's broken glass everywhere!",
        notes: "Customer is distressed about safety and property mess."
      },
      {
        speaker: "Mark (Agent)",
        text: "Oh no, Linda! I am so sorry to hear that. Please be extremely careful with those broken glass shards—please do not handle the broken bottle directly so you don't cut yourself. Let me get this taken care of immediately so you don't have to worry about returning anything.",
        notes: "Safety-first empathy! Immediate reassurance that return of hazardous material is NOT required."
      },
      {
        speaker: "Customer",
        text: "Wait, so I don't have to pack up broken glass and take it to UPS? That would be so dangerous.",
        notes: "Customer expresses relief regarding return policy."
      },
      {
        speaker: "Mark (Agent)",
        text: "Absolutely not! For your safety and according to Amazon Hazmat SOP, items containing broken glass or leaking liquids qualify for a Returnless Concession. I have already processed a full refund of $38.50 back to your original Visa card, which will reflect in 3 to 5 business days. Please safely dispose of the damaged package.",
        notes: "Correctly applied Hazmat/Liquid returnless refund SOP with clear timeline."
      },
      {
        speaker: "Customer",
        text: "That is such a relief, Mark. Can you also send me a replacement or should I re-order?",
        notes: "Customer inquiry on replacement."
      },
      {
        speaker: "Mark (Agent)",
        text: "You can certainly re-order directly through your app whenever you're ready, or I can place the replacement order for you right now with free expedited shipping.",
        notes: "Helpful, proactive customer care."
      },
      {
        speaker: "Customer",
        text: "I will just re-order it on my app now that the refund is processed. Thank you so much for being so helpful!",
        notes: "Customer is satisfied."
      },
      {
        speaker: "Mark (Agent)",
        text: "You are very welcome, Linda. I've sent the refund receipt to your email. Is there anything else I can assist you with today?",
        notes: "Standard FCR validation."
      },
      {
        speaker: "Customer",
        text: "Nope, that was super fast. Have a nice day!",
        notes: "Clean conclusion."
      },
      {
        speaker: "Mark (Agent)",
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
    summary: "Customer ordered infant formula for his baby but received a pair of garden gloves instead. Mark handles high-urgency friction, issues priority replacement, and provides prepaid drop-off label.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for contacting Amazon. My name is Mark. May I have your name and the delivery address on your order?",
        notes: "Friendly greeting and account verification."
      },
      {
        speaker: "Customer",
        text: "Hi Mark, Daniel Roberts here, address is 450 Maple Avenue. I am in a real bind right now. I ordered baby formula for my 6-month-old that was supposed to arrive today. I opened the box and it's a pair of heavy-duty gardening gloves! I am running out of formula for my baby tonight. What can you do?!",
        notes: "High-stress urgency situation."
      },
      {
        speaker: "Mark (Agent)",
        text: "Daniel, I completely understand the extreme urgency of this situation, and I am so deeply sorry for this warehouse mix-up. Let me immediately check local same-day inventory to see if we can get your formula delivered this evening, or arrange a same-day locker pickup.",
        notes: "Immediate empathetic validation of baby formula urgency; prioritizes speed of resolution."
      },
      {
        speaker: "Customer",
        text: "Please check, that would help so much.",
        notes: "Customer waiting on inventory check."
      },
      {
        speaker: "Mark (Agent)",
        text: "Thank you for your patience, Daniel. I located stock at our local sub-same-day delivery station. I have placed an emergency replacement order for the Enfamil 4-Pack at no charge, scheduled for delivery between 5:00 PM and 10:00 PM tonight. I also waived all shipping fees.",
        notes: "Executed sub-same-day emergency dispatch."
      },
      {
        speaker: "Customer",
        text: "Oh thank goodness! And what do I do with these garden gloves?",
        notes: "Inquiry on incorrect item return."
      },
      {
        speaker: "Mark (Agent)",
        text: "I generated a pre-paid QR code return label sent to your email. Whenever you have time in the next 30 days, you can simply show that QR code at any UPS Store or Kohl's drop-off without needing a box or tape. But please focus on your family tonight!",
        notes: "Clear, zero-friction return instructions with extended 30-day window."
      },
      {
        speaker: "Customer",
        text: "Mark, thank you from the bottom of my heart. You saved the evening.",
        notes: "Delighted customer sentiment."
      },
      {
        speaker: "Mark (Agent)",
        text: "I am so glad I could help you and your baby, Daniel! Have I resolved everything for you today?",
        notes: "Warm FCR check."
      },
      {
        speaker: "Customer",
        text: "Yes, 100%. Thank you!",
        notes: "Call resolved."
      },
      {
        speaker: "Mark (Agent)",
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
    summary: "Customer dropped off return at Kohl's 5 days ago and is upset that the credit is not showing on her bank statement. Mark verifies drop-off scan, explains bank settlement timelines, and verifies refund authorization.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon Customer Service. My name is Mark. May I please verify your name and the last 4 digits of the card used for your recent order?",
        notes: "Standard greeting and payment method authentication."
      },
      {
        speaker: "Customer",
        text: "Hi Mark, Samantha Miller, card ends in 4109. I returned a $300 pair of Sony headphones at the Kohl's drop-off 5 days ago on Wednesday. The guy gave me a receipt, but I checked my bank account today and the money is still not there! Where is my refund?",
        notes: "Customer is concerned about missing $300 refund."
      },
      {
        speaker: "Mark (Agent)",
        text: "Thank you for verifying your details, Samantha. I know how important it is to see that credit back in your account, especially for a high-value item like those Sony headphones. Let me check the carrier drop-off tracking ID and our payment gateway status right now.",
        notes: "Validates concern and takes immediate ownership."
      },
      {
        speaker: "Customer",
        text: "Please do, I have the receipt in front of me.",
        notes: "Customer provides receipt availability."
      },
      {
        speaker: "Mark (Agent)",
        text: "I have good news! I checked the carrier logs: Kohl's scanned your return on Wednesday at 2:15 PM, and Amazon's billing system issued the refund of $298.00 back to your Visa on Thursday morning. The refund authorization code is REF-9928104.",
        notes: "Detailed transparency with timestamp and reference code."
      },
      {
        speaker: "Customer",
        text: "Okay, but why isn't it showing on my online banking app yet?",
        notes: "Customer questions banking delays."
      },
      {
        speaker: "Mark (Agent)",
        text: "Great question, Samantha! While Amazon releases the funds immediately upon carrier processing, standard banking institutions typically take 3 to 5 business days to clear and post merchant refunds to your statement. Because the weekend occurred, your bank should post the funds by tomorrow (Tuesday) evening at the latest.",
        notes: "Accurately distinguishes between Amazon refund issuance and financial institution clearance timelines."
      },
      {
        speaker: "Customer",
        text: "Ah, that makes sense. I forgot about the weekend! Can you email me the refund receipt with that code just in case?",
        notes: "Customer understands and requests proof."
      },
      {
        speaker: "Mark (Agent)",
        text: "I just sent the official Amazon Refund Confirmation email directly to your inbox with the breakdown and ARN tracking number. Have I resolved all of your questions today, Samantha?",
        notes: "Sent ARN receipt + FCR confirmation."
      },
      {
        speaker: "Customer",
        text: "Yes, you explained it clearly. Thanks Mark!",
        notes: "Customer satisfied."
      },
      {
        speaker: "Mark (Agent)",
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
    summary: "Customer was surprised by an unexpected $139 annual Prime renewal fee. Mark checks benefit usage, confirms zero benefits used since renewal, and issues a 100% full pro-rated refund.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for contacting Amazon Support. My name is Mark. May I have your full name and the email address on your account please?",
        notes: "Opening & security verification."
      },
      {
        speaker: "Customer",
        text: "George Henderson, g.henderson@workmail.com. I just checked my credit card bill and I have an unauthorized $139 charge from Amazon! I did not buy anything for $139. Did my card get stolen?!",
        notes: "Customer panicked about potential card fraud."
      },
      {
        speaker: "Mark (Agent)",
        text: "Hello George, thank you for confirming your info. I understand that seeing an unexpected charge is alarming! Let me check your account billing history right away to identify this charge for you.",
        notes: "De-escalates panic and investigates billing."
      },
      {
        speaker: "Customer",
        text: "Please check, I am ready to dispute it with my bank.",
        notes: "Customer mentions bank dispute."
      },
      {
        speaker: "Mark (Agent)",
        text: "I see the charge right here, George. It was your annual Amazon Prime Membership auto-renewal that processed 2 days ago on August 14th. It looks like your 1-year subscription reached its renewal date.",
        notes: "Clear explanation of billing root cause."
      },
      {
        speaker: "Customer",
        text: "Oh! I forgot I signed up for Prime a year ago for holiday shopping. I really don't use it anymore. Can I cancel it and get my money back?",
        notes: "Customer requests cancellation and refund."
      },
      {
        speaker: "Mark (Agent)",
        text: "You certainly can, George! I checked your Prime activity since the renewal date and you have not used any Prime shipping benefits, Prime Video, or Amazon Music. According to our Prime Membership policy, you are eligible for a 100% full refund of the $139.00. I can process the cancellation and refund right now.",
        notes: "Checked benefit utilization SOP. Approved full refund."
      },
      {
        speaker: "Customer",
        text: "Yes, please do that! Thank you.",
        notes: "Customer confirms action."
      },
      {
        speaker: "Mark (Agent)",
        text: "I have successfully cancelled the Prime membership and initiated the full refund of $139.00 back to your credit card. You will see that reflected in 3 to 5 business days. Is there anything else on your Amazon account I can help you with today?",
        notes: "Confirmation of cancellation and refund + FCR check."
      },
      {
        speaker: "Customer",
        text: "That was so painless. I appreciate your quick help, Mark!",
        notes: "Customer relieved."
      },
      {
        speaker: "Mark (Agent)",
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
    summary: "Customer received a broken drill from a third-party seller. The seller refused to provide a prepaid return label and demanded $25 restocking fee. Mark steps in under A-to-z Guarantee.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon Customer Support. My name is Mark. May I have your full name and billing zip code please?",
        notes: "Standard opening & 2-point authentication."
      },
      {
        speaker: "Customer",
        text: "Maria Santos, zip code 33101. Mark, I am fed up with this third-party seller on Amazon. I bought a drill that arrived with a completely cracked battery that won't hold a charge. I messaged the seller 3 days ago asking for a return label. The seller replied saying I have to pay $25 shipping and restocking fee to return a broken drill! Why is Amazon allowing this?",
        notes: "Customer reporting 3P seller violation of Amazon return policy."
      },
      {
        speaker: "Mark (Agent)",
        text: "Maria, I am so sorry you had to deal with that! Third-party sellers on Amazon are required to match or exceed Amazon's return policies, and customers should NEVER have to pay return fees for items that arrive defective or damaged. Let me review your message history with this seller right now.",
        notes: "Reassures customer on Amazon marketplace standards and checks buyer-seller messaging."
      },
      {
        speaker: "Customer",
        text: "Yes, look at the messages, he was very rude.",
        notes: "Customer confirms messages."
      },
      {
        speaker: "Mark (Agent)",
        text: "I am reviewing the message thread right now. Since more than 48 hours have passed and the seller refused to provide a pre-paid label for a defective product, you are 100% protected under our Amazon A-to-z Guarantee. I am filing the claim right now for the full $119.00 refund on your behalf.",
        notes: "Validates 48-hour seller response window and files A-to-z claim with proper reason code."
      },
      {
        speaker: "Customer",
        text: "Thank you! What do I need to do with the broken drill?",
        notes: "Inquiry on disposition."
      },
      {
        speaker: "Mark (Agent)",
        text: "You do not need to ship it back to the seller or pay any fees. Our A-to-z Claims Guarantee team will review the claim and complete your full refund within 3 to 5 business days. You will receive email notifications as soon as it's finalized. You don't need to communicate with the seller anymore.",
        notes: "Protects customer from further seller harassment and provides clear timeline."
      },
      {
        speaker: "Customer",
        text: "Mark, that is such a huge relief. Amazon always takes care of their customers.",
        notes: "Customer trust restored."
      },
      {
        speaker: "Mark (Agent)",
        text: "We always stand behind our customer promise, Maria. Have I resolved all of your questions today?",
        notes: "FCR verification."
      },
      {
        speaker: "Customer",
        text: "Yes, you did everything perfectly. Thank you so much!",
        notes: "Call resolved."
      },
      {
        speaker: "Mark (Agent)",
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
  },
  {
    id: "call-fraud-security",
    title: "Account Takeover & Unauthorized $500 Gift Card Order",
    category: "Security & Fraud Prevention",
    callType: "Inbound Phone Call",
    caller: "Patricia Warren",
    customerTenure: "Prime Member (7 Years)",
    orderId: "114-7729103-9948210",
    item: "5x $100 Amazon eGift Cards ($500.00)",
    trackingStatus: "Pending Email Dispatch (Placed 12 mins ago)",
    callDuration: "3 min 40 sec",
    summary: "Customer received text alerts about an unrecognized $500 digital gift card purchase sent to an unknown email. Mark verifies customer identity via phone OTP, cancels the pending digital order, freezes compromised credentials, and routes to Account Security.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon Security and Customer Care. My name is Mark. How can I help you today?",
        notes: "Calm, professional opening."
      },
      {
        speaker: "Customer",
        text: "Mark, help! I just got two text alerts that my Amazon account purchased five $100 gift cards delivered to some strange email address in Russia! I didn't buy this! My account has been hacked! Cancel it before the thief gets the money!",
        notes: "Customer in severe panic over active account compromise."
      },
      {
        speaker: "Mark (Agent)",
        text: "Patricia, stay calm—I am right here with you and I am taking immediate action. I see the pending digital order from 12 minutes ago. For your security while I cancel this, I am sending a secure 6-digit verification passcode to your trusted mobile phone ending in 84. Please read that to me as soon as it arrives.",
        notes: "Immediate empathetic reassurance combined with mandatory OTP verification before account modification."
      },
      {
        speaker: "Customer",
        text: "Yes, I got it! The code is 591-402!",
        notes: "Customer provides valid OTP."
      },
      {
        speaker: "Mark (Agent)",
        text: "Passcode verified! I have immediately intercepted and voided digital order #114-7729103. The $500 charge has been completely cancelled and no gift cards were redeemed. Your payment card was not charged.",
        notes: "Digital order cancelled before redemption; zero financial loss."
      },
      {
        speaker: "Customer",
        text: "Oh, thank God! What do I do about my password and my credit card on file?",
        notes: "Customer asks about ongoing security."
      },
      {
        speaker: "Mark (Agent)",
        text: "I have just initiated a mandatory session sign-out across all active devices and triggered a secure password reset link directly to your verified personal email. I also enabled our Account Security Lock on the payment cards. I strongly recommend enabling Two-Step Verification in your Login & Security settings once you reset your password.",
        notes: "Followed comprehensive Account Takeover SOP (Sign-out all devices, reset link, 2FA recommendation)."
      },
      {
        speaker: "Customer",
        text: "Mark, you stopped a disaster. I can't thank you enough for acting so fast!",
        notes: "Customer relieved and grateful."
      },
      {
        speaker: "Mark (Agent)",
        text: "Protecting your account is our highest priority, Patricia. I will stay on the line until you receive the reset link in your inbox. Did you get the email?",
        notes: "Ownership and customer obsession until verified completion."
      },
      {
        speaker: "Customer",
        text: "Yes, it just popped up. I'm resetting my password right now.",
        notes: "Resolution verified."
      },
      {
        speaker: "Mark (Agent)",
        text: "Wonderful! Have I secured everything for you today?",
        notes: "Final validation."
      },
      {
        speaker: "Customer",
        text: "Yes, you saved my day. Thank you so much, Mark!",
        notes: "Call concluded successfully."
      },
      {
        speaker: "Mark (Agent)",
        text: "You are very welcome, Patricia. Thank you for calling Amazon and stay safe online!",
        notes: "Security-focused professional close."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "迅速 authenticated via secure OTP before modifying compromised account.",
        "Voided digital order before gift card codes were generated.",
        "Executed global device sign-out and initiated password reset protocol."
      ]
    }
  },
  {
    id: "call-locker-pin-expired",
    title: "Amazon Hub Locker Delivery & Expired Pickup Return",
    category: "Locker & Delivery",
    callType: "Inbound Phone Call",
    caller: "Brandon Cole",
    customerTenure: "Prime Member (3 Years)",
    orderId: "111-3391820-4491823",
    item: "Anker USB-C Power Bank 24,000mAh ($89.99)",
    trackingStatus: "Returned to Fulfillment Center (3-day pickup window expired)",
    callDuration: "2 min 55 sec",
    summary: "Customer was out of town and missed the 3-day Amazon Hub Locker pickup deadline. The item was auto-returned. Mark explains the automated locker return process, verifies the refund status, and reorders with home delivery.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon. My name is Mark. May I have your name and the email on your account please?",
        notes: "Warm opening and verification."
      },
      {
        speaker: "Customer",
        text: "Brandon Cole, b.cole@techmail.com. Mark, I went to the Amazon Locker at 7-Eleven to pick up my power bank with my barcode, and the screen said my reservation expired and package was returned! Why did you send my package back?!",
        notes: "Customer surprised by locker return policy."
      },
      {
        speaker: "Mark (Agent)",
        text: "Hello Brandon, thank you for verifying your info. I understand how frustrating it is to arrive at the locker only to find your package isn't there! Let me check the locker delivery timestamps to explain what happened.",
        notes: "Empathy and clear statement of action."
      },
      {
        speaker: "Customer",
        text: "I was away on a business trip over the weekend.",
        notes: "Customer explains delay."
      },
      {
        speaker: "Mark (Agent)",
        text: "I see what occurred, Brandon. Amazon Hub Lockers hold packages for a maximum of 3 calendar days to keep compartments available for the community. Because it was delivered on Thursday, the locker auto-processed a return on Sunday evening and our fulfillment center has already credited the full $89.99 back to your account.",
        notes: "Educates customer on 3-day locker hold policy without being argumentative; confirms refund status."
      },
      {
        speaker: "Customer",
        text: "Oh, I didn't know there was a 3-day limit. But I really still need that power bank for my next trip on Thursday.",
        notes: "Customer understands and requests item."
      },
      {
        speaker: "Mark (Agent)",
        text: "I can re-order the exact same Anker Power Bank for you right now with free One-Day Shipping to your home address so you don't have to worry about locker expiration. Would you like me to place that for you?",
        notes: "Proactive resolution offering home delivery."
      },
      {
        speaker: "Customer",
        text: "Yes, please ship it to my home address instead. That's much easier.",
        notes: "Customer accepts solution."
      },
      {
        speaker: "Mark (Agent)",
        text: "Done! Order #111-8839102 has been placed for $89.99 using your refund balance, scheduled for delivery to your home tomorrow afternoon by 2 PM. Have I taken care of everything for you today, Brandon?",
        notes: "Confirmed new order, zero out-of-pocket friction, and ETA."
      },
      {
        speaker: "Customer",
        text: "Mark, you made that super easy. Thanks for explaining the locker policy!",
        notes: "Positive feedback."
      },
      {
        speaker: "Mark (Agent)",
        text: "My pleasure, Brandon! Thank you for being a Prime member and safe travels on your upcoming trip!",
        notes: "Personalized wrap-up."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "Clearly explained 3-day Amazon Hub Locker retention policy.",
        "Verified automated return refund was already credited.",
        "Repurchased item with priority home delivery to guarantee arrival."
      ]
    }
  },
  {
    id: "call-price-match-drop",
    title: "Post-Purchase Price Drop Inquiry & Promotional Goodwill Credit",
    category: "Price & Concessions",
    callType: "Inbound Phone Call",
    caller: "Rachel Adams",
    customerTenure: "Prime Member (5 Years)",
    orderId: "112-9901823-1120938",
    item: "Ninja Foodi 8-in-1 Digital Air Fryer ($179.99 purchased 4 days ago; now on Deal of the Day for $149.99)",
    trackingStatus: "Delivered 2 days ago",
    callDuration: "2 min 45 sec",
    summary: "Customer purchased an air fryer 4 days ago for $180, and today it went on sale for $150. Customer calls requesting a $30 refund or price match. Mark explains Amazon's dynamic pricing policy while providing a $20 Courtesy Promotional Credit within associate authorization matrix to delight customer.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for contacting Amazon Customer Support. My name is Mark. May I have your full name and billing zip code please?",
        notes: "Opening and verification."
      },
      {
        speaker: "Customer",
        text: "Rachel Adams, 60614. Mark, I bought a Ninja Foodi Air Fryer 4 days ago for $180, and I just opened the Amazon app today and it's on sale for $150! I haven't even opened the box yet. Can you refund me the $30 difference, or do I have to return this one and re-buy it?",
        notes: "Customer inquires about post-purchase price matching."
      },
      {
        speaker: "Mark (Agent)",
        text: "Hello Rachel, thank you for confirming your info. I completely understand wanting to get the best deal, especially when an item goes on sale right after you purchase it! Let me review your order details right now.",
        notes: "Empathetic acknowledgment of price frustration."
      },
      {
        speaker: "Customer",
        text: "It would be silly to make me return a 20-pound box just to buy the exact same box for $30 less.",
        notes: "Customer points out return friction."
      },
      {
        speaker: "Mark (Agent)",
        text: "You make a very practical point, Rachel. While Amazon's official policy does not offer automated post-delivery price matching due to dynamic supplier pricing, I want to make sure we respect your time and value your 5 years with Prime. As a one-time courtesy, I have applied a $20.00 Amazon Courtesy Promotional Credit directly to your account balance for your next purchase.",
        notes: "Correctly explains official price matching policy, but applies authorized associate promotional courtesy credit ($10-$20 tier) to save return shipping costs."
      },
      {
        speaker: "Customer",
        text: "Wow, Mark! That is very fair and saves me the hassle of boxing it up and driving to UPS. I will use that credit on groceries this week.",
        notes: "Customer delighted with balanced resolution."
      },
      {
        speaker: "Mark (Agent)",
        text: "I am so happy that works for you, Rachel! The $20 courtesy credit is active on your account right now and will automatically apply at your next checkout. Have I answered all of your questions today?",
        notes: "Clear credit usage instructions and FCR validation."
      },
      {
        speaker: "Customer",
        text: "Yes, you were great. Thank you Mark!",
        notes: "Customer satisfied."
      },
      {
        speaker: "Mark (Agent)",
        text: "Thank you for choosing Amazon and enjoy cooking with your new Ninja Air Fryer! Have a fantastic day!",
        notes: "Warm, relevant closing."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "Educated customer transparently on Amazon post-purchase price match policy.",
        "Avoided wasteful physical return shipping costs for a heavy appliance.",
        "Applied authorized associate goodwill credit tier ($20) within compliance limits."
      ]
    }
  },
  {
    id: "call-unverified-third-party",
    title: "Failed Account Verification — Third-Party Caller (Spouse / Non-Authorized)",
    category: "Security / Zero-Tolerance",
    callType: "Inbound Phone Call",
    caller: "Tom Reynolds (Calling for Jennifer Reynolds)",
    customerTenure: "Unverified Third Party",
    orderId: "114-8839102-3391820",
    item: "Dyson V15 Cordless Vacuum ($749.99)",
    trackingStatus: "In Transit",
    callDuration: "3 min 20 sec",
    summary: "Husband calls regarding his wife's Amazon account. He cannot verify the account email or billing address on file, and demands Mark change the delivery address. Mark models the strict Zero-Tolerance security refusal, never reveals private data, and directs to authorized delegate setup.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon Customer Support. My name is Mark. May I please have your full name and the email address linked to the Amazon account?",
        notes: "Standard opening and mandatory 2-point authentication request."
      },
      {
        speaker: "Customer",
        text: "Hi Mark, my name is Tom Reynolds. I'm calling about an order my wife Jennifer placed this morning. It's a Dyson vacuum order #114-8839102. She's busy at work and told me to call and change the delivery address to our new office in Chicago.",
        notes: "Caller explicitly identifies himself as a third party (spouse) not listed on the account."
      },
      {
        speaker: "Mark (Agent)",
        text: "Hello Tom, thank you for reaching out. I can certainly look into this for you. To protect our customers' account security and privacy, may I verify the full billing address and the last 4 digits of the payment card registered under Jennifer's account?",
        notes: "Strict adherence to authentication: Even for spouses, full verification is legally required."
      },
      {
        speaker: "Customer",
        text: "Uh, I don't know which card she used! Probably her Chase card? And our billing address... we just moved from Ohio to Illinois so it might be our old address on Elm Street or the new one. Can't you just check and tell me what address is on the screen?",
        notes: "Verification FAILS. Customer asks agent to disclose / read out sensitive account information."
      },
      {
        speaker: "Mark (Agent)",
        text: "I completely understand how convenient that would be, Tom. However, for the security and data protection of our customers, I am not permitted to read out or confirm account information unless it has been fully verified. Because the billing details and payment card could not be confirmed, I am unable to make changes to this shipment or disclose order specifics on this line.",
        notes: "Flawless Zero-Tolerance compliance! Polite, firm refusal; zero leakage of private account data."
      },
      {
        speaker: "Customer",
        text: "Come on, Mark! I'm her husband! We have the same last name! I gave you the order number! Are you saying you won't help me?!",
        notes: "Customer attempts emotional pressure and escalation."
      },
      {
        speaker: "Mark (Agent)",
        text: "I truly apologize for the frustration this causes, Tom. We take customer security extremely seriously, and these privacy protections exist to ensure no unauthorized person can alter orders or access account details. For Jennifer's protection, she can either log into her Amazon app directly to update the delivery address, or call us directly from her verified phone number. She can also add you as an authorized Household member in her Amazon settings for future contacts.",
        notes: "De-escalates with calm confidence; explains why strict rules protect the customer's own family; provides clear, legitimate self-service alternatives."
      },
      {
        speaker: "Customer",
        text: "Fine. I'll just text Jennifer and have her open the app on her phone during her lunch break.",
        notes: "Customer accepts the resolution path."
      },
      {
        speaker: "Mark (Agent)",
        text: "Thank you for your understanding, Tom. She can easily manage that under 'Your Orders' > 'Change Shipping Address' right in the app. Have I answered all of your questions regarding our security process today?",
        notes: "Professional wrap-up with precise app navigation guidance."
      },
      {
        speaker: "Customer",
        text: "Yes, I get why you have the security rules. Thanks Mark.",
        notes: "Customer respects agent's integrity."
      },
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon, Tom. Have a wonderful day!",
        notes: "Clean, polite sign-off."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "CRITICAL: Never bypassed verification for a third-party spouse.",
        "ZERO-TOLERANCE: Refused customer request to read out unverified address details.",
        "Educated customer on Amazon Household authorized sharing and app self-service."
      ]
    }
  },
  {
    id: "call-failed-otp-recovery",
    title: "Failed Two-Factor OTP & Social Engineering Bypass Refusal",
    category: "Security / Zero-Tolerance",
    callType: "Inbound Phone Call",
    caller: "Steven Wright (?)",
    customerTenure: "High Risk Caller",
    orderId: "N/A (Account Access Attempt)",
    item: "Account Unlock & 2FA Bypass",
    trackingStatus: "Account Suspended / 2FA Locked",
    callDuration: "3 min 05 sec",
    summary: "Caller claims he lost his phone and demands Mark manually disable Two-Step Verification over the phone to access an account. Mark holds firm on Zero-Tolerance compliance and directs caller to the official Two-Step Verification Account Recovery portal.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon Customer Security Support. My name is Mark. May I have your full name and account email please?",
        notes: "Opening & security verification."
      },
      {
        speaker: "Customer",
        text: "Hi Mark, my name is Steven Wright, email is s.wright88@mail.com. Look, I lost my phone while traveling abroad, and I cannot receive the Two-Factor SMS code to log in. I need you to manually turn off 2FA on my account right now so I can log in from my laptop.",
        notes: "Caller asks associate to manually override Two-Step Verification."
      },
      {
        speaker: "Mark (Agent)",
        text: "Hello Steven, I understand how difficult it is to be locked out of your account while traveling! However, for your account security, phone associates do not have the technical ability or authorization to manually disable Two-Step Verification over the phone.",
        notes: "Immediate, clear boundary: Phone agents CANNOT disable 2FA manually."
      },
      {
        speaker: "Customer",
        text: "What do you mean you can't?! I'm telling you I lost my phone! Just click whatever button you have on your screen to bypass it! I need to access my account right this second!",
        notes: "Social engineering pressure."
      },
      {
        speaker: "Mark (Agent)",
        text: "I completely understand the urgency, Steven. Because Two-Step Verification is our highest layer of account defense, bypassing it requires verified document review through our dedicated Account Recovery Team to protect against unauthorized account takeovers. I can guide you through our secure automated recovery process right now.",
        notes: "Explains purpose of security protocol and offers authorized Account Recovery pathway."
      },
      {
        speaker: "Customer",
        text: "How does that recovery process work?",
        notes: "Customer inquires about process."
      },
      {
        speaker: "Mark (Agent)",
        text: "You can go to Amazon.com, attempt to sign in, and on the Two-Step Verification prompt, click 'Didn't receive the OTP?' followed by 'Two-Step Verification Account Recovery'. You will be prompted to securely upload a government-issued ID (such as a passport or driver's license). Our specialized verification team reviews and unlocks verified accounts within 24 to 48 hours.",
        notes: "Detailed, accurate guidance on official Amazon 2SV Account Recovery SOP."
      },
      {
        speaker: "Customer",
        text: "Okay, I have my passport with me on my laptop. I will submit it through that recovery link.",
        notes: "Customer agrees to official protocol."
      },
      {
        speaker: "Mark (Agent)",
        text: "That is the fastest and most secure way to regain access, Steven. You will receive email status updates as soon as the verification is finalized. Have I answered all of your questions regarding the account recovery procedure today?",
        notes: "FCR verification."
      },
      {
        speaker: "Customer",
        text: "Yes, thank you for guiding me to the right link, Mark.",
        notes: "Call resolved with zero security compromises."
      },
      {
        speaker: "Mark (Agent)",
        text: "You are welcome, Steven. Thank you for calling Amazon and safe travels!",
        notes: "Professional close."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "ZERO-TOLERANCE: Refused unauthorized 2FA bypass request.",
        "Accurately directed customer to the Two-Step Verification Account Recovery portal.",
        "Prevented social engineering / unauthorized account takeover."
      ]
    }
  },
  {
    id: "call-replacement-unverified",
    title: "Order Replacement Denied — Unverified Account & Shared Account Dispute",
    category: "Replacement & Security",
    callType: "Inbound Phone Call",
    caller: "Kevin Brooks",
    customerTenure: "Unverified Recipient / Ex-Roommate",
    orderId: "112-7729104-8839102",
    item: "De'Longhi Magnifica Espresso Machine ($649.95)",
    trackingStatus: "Delivered 2 days ago (Customer reports damaged pump)",
    callDuration: "3 min 35 sec",
    summary: "Caller received a damaged $650 espresso machine and urgently demands a replacement. When Mark attempts account verification, the caller fails email, billing address, and phone OTP, stating his ex-roommate ordered it. Mark strictly upholds Zero-Tolerance SOP by refusing to dispatch an unverified replacement order while guiding him to gift returns and app self-service.",
    transcript: [
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon Customer Support. My name is Mark. May I please have your full name and the email address linked to the Amazon account?",
        notes: "Standard opening and mandatory 2-point authentication request."
      },
      {
        speaker: "Customer",
        text: "Hi Mark, my name is Kevin Brooks. I'm calling about a De'Longhi espresso machine that arrived broken (#112-7729104). The water pump is completely cracked and leaking water all over the place. I need an immediate replacement sent out right now!",
        notes: "Customer explains damaged item issue and demands immediate replacement."
      },
      {
        speaker: "Mark (Agent)",
        text: "Hello Kevin, I am so sorry to hear that your De'Longhi espresso machine arrived with a damaged pump! I know how exciting it is to get a new espresso machine, and that must be very disappointing. I can certainly look into this for you. To protect the account and proceed with order actions, could you please verify the full billing address and the last 4 digits of the payment method on file?",
        notes: "Empathy statement followed by strict mandatory 2-point verification requirement."
      },
      {
        speaker: "Customer",
        text: "Uh, I didn't buy it with my credit card. My former roommate Brian bought it for our shared apartment before he moved out last month. I don't know his card number or where he lives now! The box has my name on the shipping label though. Look at order 112-7729104 and just ship the replacement to my apartment!",
        notes: "Caller fails verification. Admits account belongs to a third party (former roommate)."
      },
      {
        speaker: "Mark (Agent)",
        text: "I completely understand the situation, Kevin, and I appreciate you clarifying that. However, creating a replacement order is generating a brand-new financial shipment on an account with stored payment methods. For your protection and the account owner's security, Amazon policy strictly prevents associates from issuing replacement orders or modifying orders on unverified accounts.",
        notes: "Explains the exact security reasoning: Replacement orders generate new financial transactions requiring account owner verification."
      },
      {
        speaker: "Customer",
        text: "Are you kidding me, Mark?! The machine is broken! It's right here in front of me! Why can't you just create a replacement order if the item is clearly defective?!",
        notes: "Customer pushes back on replacement denial."
      },
      {
        speaker: "Mark (Agent)",
        text: "I truly understand your frustration, Kevin. If we allowed anyone possessing an order number to order replacements without identity verification, it would create severe security risks for account holders. We have two legitimate ways to resolve this: 1) You can reach out to Brian and have him log into his Amazon app, where he can click 'Return or Replace Item' in under a minute with zero fees; or 2) If it was given to you as a gift, you can visit amazon.com/returns/gift with the 17-digit Order ID to process a gift return for Amazon credit in your own name.",
        notes: "Stands firm on Zero-Tolerance policy while providing two constructive, compliant resolution paths."
      },
      {
        speaker: "Customer",
        text: "Wait, if I use the Gift Returns link with the order number, I can do it under my own Amazon account without needing Brian's card?",
        notes: "Customer realizes gift return path works."
      },
      {
        speaker: "Mark (Agent)",
        text: "Exactly! At amazon.com/returns/gift, you enter order #112-7729104. It will provide a prepaid drop-off label, and once scanned, the refund credit will be issued directly to YOUR personal Amazon account so you can purchase a brand new machine yourself.",
        notes: "Clear, step-by-step guidance on official Gift Return / Replacement portal."
      },
      {
        speaker: "Customer",
        text: "That actually solves my problem completely. I'll go to the gift return page right now. Thank you for explaining that, Mark.",
        notes: "Customer relieved; compliance 100% maintained."
      },
      {
        speaker: "Mark (Agent)",
        text: "You are very welcome, Kevin! Have I answered all of your questions regarding the replacement and return options today?",
        notes: "FCR verification."
      },
      {
        speaker: "Customer",
        text: "Yes, you did. Have a great day, Mark!",
        notes: "Call completed successfully."
      },
      {
        speaker: "Mark (Agent)",
        text: "Thank you for calling Amazon, Kevin. Have a wonderful day and enjoy your espresso machine once replaced!",
        notes: "Warm, professional closing."
      }
    ],
    qaScorecard: {
      empathyScore: "100%",
      complianceScore: "100%",
      fcrScore: "100%",
      keyTakeaways: [
        "ZERO-TOLERANCE: Refused creating a replacement order on an unverified third-party account.",
        "Educated customer that replacement orders are financial transactions requiring owner verification.",
        "Successfully redirected customer to the official Amazon Gift Return portal (amazon.com/returns/gift)."
      ]
    }
  }
];


