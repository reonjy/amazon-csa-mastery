// Comprehensive Interactive Simulation Scenarios for Amazon CSA Practice
// Agent Name: Mark

export const SCENARIO_DATA = [
  {
    id: "sc-dnr-prime",
    title: "Lost Package (DNR >48h) - Essential Air Purifier",
    customerName: "Marcus Vance",
    customerType: "Prime Member (6 Years)",
    channel: "Inbound Phone Call",
    initialMood: "angry",
    orderInfo: {
      orderId: "113-9081234-5512309",
      item: "Levoit Air Purifier Core 400S ($219.99)",
      status: "Delivered 3 days ago (Carrier: AMZL)",
      photoOnDelivery: "Wrong complex side gate (GPS mismatch)",
      deliveryTime: "Aug 13, 2:15 PM"
    },
    background: "Customer ordered an air purifier for severe allergy season. Tracking shows delivered 3 days ago (>48 hours). Customer waited the mandatory 48 hours and checked neighbors. He is frustrated and needs a prompt solution.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "Hi, my name is Marcus Vance. Your app says my Levoit Air Purifier was delivered 3 days ago, but there is nothing here. I waited the 48 hours like your email told me to, but still nothing!",
        options: [
          {
            id: "opt-1a",
            text: "Hello Marcus! My name is Mark. I am so sorry about the missing air purifier, especially after you waited the 48 hours. Let me pull up your account right now and check the delivery records to resolve this for you.",
            quality: "best",
            impact: { mood: "annoyed", empathy: 25, compliance: 25, fcr: 20, timePenalty: 0 },
            feedback: "Excellent! Warm opening by Mark, empathetic acknowledgment, gratitude for waiting 48h, and immediate ownership."
          },
          {
            id: "opt-1b",
            text: "Drivers don't make mistakes. You need to walk around your whole neighborhood and search again before we can do anything.",
            quality: "bad",
            impact: { mood: "furious", empathy: -40, compliance: -20, fcr: -30, timePenalty: 30 },
            feedback: "Terrible phrasing! Blaming the customer and ignoring the 48h DNR SOP."
          },
          {
            id: "opt-1c",
            text: "I will just refund you immediately without checking anything.",
            quality: "risky",
            impact: { mood: "pleasant", empathy: 10, compliance: -30, fcr: -10, timePenalty: 0 },
            feedback: "Risky! Always check POD, GPS, and account history before applying concessions."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Thank you, Mark. My allergies have been acting up and I really need it as soon as possible. What are my options?",
        options: [
          {
            id: "opt-2a",
            text: "I reviewed the driver's GPS ping and it appears there was a delivery mismatch down the street. Since it has been past 48 hours, I can issue an immediate free replacement with One-Day Priority Shipping so it arrives tomorrow by 1 PM, or issue a full refund to your card. Which do you prefer?",
            quality: "best",
            impact: { mood: "pleasant", empathy: 25, compliance: 25, fcr: 30, timePenalty: 0 },
            feedback: "Superb! Validated GPS mismatch, adhered to DNR SOP, and gave flexible customer choices."
          },
          {
            id: "opt-2b",
            text: "You will have to file a claim with AMZL carrier yourself.",
            quality: "bad",
            impact: { mood: "furious", empathy: -30, compliance: -40, fcr: -40, timePenalty: 30 },
            feedback: "Severe QA violation! AMZL is internal Amazon logistics; transferring customers to carrier is prohibited."
          }
        ]
      },
      {
        turnIndex: 3,
        customerMessage: "Tomorrow by 1 PM would be fantastic. Please send the replacement.",
        options: [
          {
            id: "opt-3a",
            text: "I have placed replacement order #113-4491820 with Priority Next-Day Delivery at $0.00 charge, arriving tomorrow before 1 PM. I also filed an internal carrier investigation for the lost package. Have I resolved all of your questions today, Marcus?",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 30, timePenalty: 0 },
            feedback: "Outstanding wrap-up by Mark! Clear order details, zero charges confirmed, carrier report logged, and clean FCR check."
          },
          {
            id: "opt-3b",
            text: "Done. Bye.",
            quality: "bad",
            impact: { mood: "annoyed", empathy: -15, compliance: -10, fcr: 10, timePenalty: 10 },
            feedback: "Abrupt wrap-up without validation or professional sign-off hurts your CSAT score."
          }
        ]
      }
    ]
  },
  {
    id: "sc-damaged-oil",
    title: "Damaged Glass & Leaking Liquid (Returnless Concession)",
    customerName: "Linda Chen",
    customerType: "Amazon Customer (3 Years)",
    channel: "Inbound Phone Call",
    initialMood: "angry",
    orderInfo: {
      orderId: "111-7782910-1092834",
      item: "1-Gallon Extra Virgin Olive Oil ($38.50)",
      status: "Delivered 2 hours ago",
      photoOnDelivery: "Package on porch (Stained box)",
      deliveryTime: "Today at 10:45 AM"
    },
    background: "Customer received a shattered glass bottle of olive oil that soaked the box and leaked over her kitchen floor. She is upset about broken glass and safety.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "I just opened my package and it's a complete nightmare! The glass bottle of olive oil completely shattered in the box! Oil is all over my floor and there's broken glass everywhere. Do you expect me to pack up broken glass and ship it back?!",
        options: [
          {
            id: "opt-oil-1a",
            text: "Hello Linda, my name is Mark. I am so sorry to hear that! Please do NOT handle that broken glass directly so you don't risk injury. Under our Hazmat & Liquid SOP, you will NOT have to return anything. Let me take care of your full refund right now.",
            quality: "best",
            impact: { mood: "annoyed", empathy: 30, compliance: 30, fcr: 25, timePenalty: 0 },
            feedback: "Flawless safety-first empathy! Immediate relief that returning broken glass is not required."
          },
          {
            id: "opt-oil-1b",
            text: "Our policy requires you to box up the broken glass, print a label, and take it to UPS if you want a refund.",
            quality: "bad",
            impact: { mood: "furious", empathy: -50, compliance: -50, fcr: -40, timePenalty: 25 },
            feedback: "Critical Hazard Violation! Shipping broken glass or leaking hazardous goods violates carrier safety regulations."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Thank goodness! I was terrified of cutting my hands. How soon will the refund show up, Mark?",
        options: [
          {
            id: "opt-oil-2a",
            text: "I have processed the full refund of $38.50 back to your original Visa card. It will reflect on your statement in 3 to 5 business days, and I just sent the confirmation receipt to your email. Please safely discard the damaged package. Is there anything else I can help you with today, Linda?",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 35, timePenalty: 0 },
            feedback: "Superb First Contact Resolution! Clear financial timeline, disposal advice, and polite closing."
          },
          {
            id: "opt-oil-2b",
            text: "Refund is in system. Check your bank later.",
            quality: "bad",
            impact: { mood: "neutral", empathy: -10, compliance: 0, fcr: 10, timePenalty: 10 },
            feedback: "Too casual; lacks clear bank timeline and professional courtesy."
          }
        ]
      }
    ]
  },
  {
    id: "sc-wrong-formula",
    title: "Wrong Item Received - Urgent Infant Formula Mix-up",
    customerName: "Daniel Roberts",
    customerType: "Prime Member (4 Years)",
    channel: "Inbound Phone Call",
    initialMood: "angry",
    orderInfo: {
      orderId: "114-1192830-4819201",
      item: "Enfamil Infant Formula 4-Pack ($124.00)",
      status: "Delivered 1 hour ago",
      receivedItem: "Heavy Duty Gardening Gloves ($14.99)",
      deliveryTime: "Today at 1:30 PM"
    },
    background: "Customer ordered infant formula for his baby but received gardening gloves instead. He is running out of formula for his infant tonight.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "I ordered baby formula for my 6-month-old that was supposed to arrive today, and I opened the box to find gardening gloves! I am running out of formula for my baby tonight! What are you going to do to fix this right now?!",
        options: [
          {
            id: "opt-form-1a",
            text: "Hello Daniel, my name is Mark. I completely understand the extreme urgency of this situation, and I am so deeply sorry for this warehouse mix-up. Let me immediately check local same-day inventory to get your baby formula dispatched this evening.",
            quality: "best",
            impact: { mood: "annoyed", empathy: 30, compliance: 25, fcr: 25, timePenalty: 0 },
            feedback: "Outstanding empathy by Mark acknowledging baby formula urgency and taking immediate priority action."
          },
          {
            id: "opt-form-1b",
            text: "Mistakes happen. Please return the gloves and we will ship the formula in 5 to 7 business days.",
            quality: "bad",
            impact: { mood: "furious", empathy: -50, compliance: -40, fcr: -40, timePenalty: 30 },
            feedback: "Catastrophic failure of Customer Obsession! Treating urgent infant essentials like non-essential goods causes extreme escalations."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Please check, Mark, that would be a lifesaver. And what do I do with these gloves?",
        options: [
          {
            id: "opt-form-2a",
            text: "I located stock at our local sub-same-day delivery station and placed an emergency replacement at $0.00 charge, arriving tonight between 5:00 PM and 10:00 PM. For the gloves, I emailed you a prepaid QR code so you can drop them off at any Kohl's or UPS in the next 30 days whenever convenient. Have I taken care of everything for you, Daniel?",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 35, timePenalty: 0 },
            feedback: "Flawless resolution! Sub-same day dispatch arranged, no friction return QR code provided, and complete customer reassurance."
          },
          {
            id: "opt-form-2b",
            text: "I reordered it. Bye.",
            quality: "bad",
            impact: { mood: "neutral", empathy: -20, compliance: 0, fcr: 10, timePenalty: 10 },
            feedback: "Incomplete communication and abrupt sign-off."
          }
        ]
      }
    ]
  },
  {
    id: "sc-security-phish",
    title: "Account Security & Address Reroute (Zero-Tolerance Test)",
    customerName: "David Miller (?)",
    customerType: "Unverified Caller / High Risk",
    channel: "Inbound Phone Call",
    initialMood: "neutral",
    orderInfo: {
      orderId: "112-0049182-3391820",
      item: "Apple MacBook Pro 16\" ($2,499.00)",
      status: "In Transit - Expected Delivery Tomorrow",
      originalAddress: "1424 Pine St, Seattle, WA",
      requestedAddress: "900 Industrial Blvd, Miami, FL"
    },
    background: "Caller claims to be David Miller calling from a temporary number. He wants to change the delivery address of a $2,500 laptop to a completely new address across the country. He gets defensive when asked security questions.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "Hi, I'm calling about my MacBook order 112-0049182-3391820. I'm traveling and need you to urgently change the shipping address to Miami, FL right now before it delivers.",
        options: [
          {
            id: "opt-sec-1a",
            text: "Hello, my name is Mark. I can certainly assist you with reviewing your order, David. For your account security and protection, I just need to verify your full billing address and the last 4 digits of the payment method on file first.",
            quality: "best",
            impact: { mood: "neutral", empathy: 20, compliance: 30, fcr: 20, timePenalty: 0 },
            feedback: "Perfect compliance! Mark initiates standard security verification before making changes or disclosing account details."
          },
          {
            id: "opt-sec-1b",
            text: "Sure! What is the new Miami address? I will change it right now so it doesn't get lost.",
            quality: "bad",
            impact: { mood: "pleasant", empathy: 10, compliance: -100, fcr: -100, timePenalty: 0 },
            feedback: "CRITICAL QA FAIL! Never modify shipment addresses on high-value orders without strict secondary authentication."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Look Mark, I'm in a rush at the airport and don't have my card on me! Can't you just see I gave you the order number? Just reroute it to 900 Industrial Blvd, Miami, FL!",
        options: [
          {
            id: "opt-sec-2a",
            text: "I completely understand you are traveling, but for your account protection on high-value shipments, I cannot reroute packages without secondary authentication. I can trigger a secure One-Time Passcode (OTP) to your verified phone number on file right now. May I send that over?",
            quality: "best",
            impact: { mood: "neutral", empathy: 25, compliance: 30, fcr: 30, timePenalty: 0 },
            feedback: "Spot on! Polite, empathetic, firm on security, and offers an approved 2FA fallback."
          },
          {
            id: "opt-sec-2b",
            text: "Fine, since you gave me the order number I will make an exception this one time.",
            quality: "bad",
            impact: { mood: "pleasant", empathy: 5, compliance: -100, fcr: -100, timePenalty: 0 },
            feedback: "Severe Security Incident! Unauthorized address reroute on $2,500 laptop leads to immediate termination in production."
          }
        ]
      },
      {
        turnIndex: 3,
        customerMessage: "Ugh, fine. The code is 849201. Now will you update it, Mark?",
        options: [
          {
            id: "opt-sec-3a",
            text: "Thank you for verifying the passcode. I have confirmed your identity. According to carrier policy for items already in transit with high value, packages cannot be rerouted mid-transit across states. However, I can request a carrier hold at a secure pickup locker in Seattle or cancel and reorder to your Miami address upon return. Which do you prefer?",
            quality: "best",
            impact: { mood: "pleasant", empathy: 25, compliance: 25, fcr: 30, timePenalty: 0 },
            feedback: "Masterclass resolution! Verified identity properly, followed carrier routing SOP, and gave clear legitimate options."
          },
          {
            id: "opt-sec-3b",
            text: "Okay I changed the address to Miami. Have a good day.",
            quality: "risky",
            impact: { mood: "pleasant", empathy: 10, compliance: -40, fcr: 10, timePenalty: 0 },
            feedback: "In-transit carrier limitation overlooked! In-transit interstate reroutes are not supported directly in standard CRM."
          }
        ]
      }
    ]
  },
  {
    id: "sc-prime-billing",
    title: "Prime Annual Auto-Renewal Billing Inquiry",
    customerName: "George Henderson",
    customerType: "Amazon Customer (5 Years)",
    channel: "Inbound Phone Call",
    initialMood: "angry",
    orderInfo: {
      orderId: "SUB-PRIME-2026-8819",
      item: "Amazon Prime Annual Membership ($139.00)",
      status: "Billed 2 days ago",
      benefitUsage: "0 benefits used since renewal date",
      renewalDate: "Aug 14"
    },
    background: "Customer was billed $139 for annual Prime renewal. He forgot he enrolled last year and hasn't used any benefits. He is calling to dispute the charge.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "I just checked my bank statement and I see an unauthorized $139 charge from Amazon! I did not buy anything for $139. Did my card get hacked?",
        options: [
          {
            id: "opt-prime-1a",
            text: "Hello George, my name is Mark. I understand that seeing an unexpected charge is alarming! Let me check your account billing history right away to identify this charge for you.",
            quality: "best",
            impact: { mood: "annoyed", empathy: 25, compliance: 25, fcr: 20, timePenalty: 0 },
            feedback: "Great calm, reassuring tone by Mark that diffuses fraud anxiety."
          },
          {
            id: "opt-prime-1b",
            text: "Call your bank and tell them you forgot your subscription.",
            quality: "bad",
            impact: { mood: "furious", empathy: -40, compliance: -30, fcr: -30, timePenalty: 20 },
            feedback: "Dismissive and disrespectful."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Please check Mark, because I don't remember authorizing $139.",
        options: [
          {
            id: "opt-prime-2a",
            text: "I see the charge, George. It was your annual Prime Membership auto-renewal that processed 2 days ago. Since you have not used any Prime shipping or video benefits since renewal, our policy allows a 100% full refund of the $139.00 upon cancellation. I can process that for you right now.",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 35, timePenalty: 0 },
            feedback: "Flawless SOP application! Explained root cause, checked benefit usage, and authorized full refund."
          },
          {
            id: "opt-prime-2b",
            text: "All subscription charges are strictly non-refundable once billed.",
            quality: "bad",
            impact: { mood: "furious", empathy: -30, compliance: -40, fcr: -30, timePenalty: 15 },
            feedback: "Incorrect policy! Unused Prime memberships qualify for 100% full refund."
          }
        ]
      }
    ]
  },
  {
    id: "sc-marketplace-atoz",
    title: "Third-Party Marketplace Dispute & A-to-z Claim",
    customerName: "Maria Santos",
    customerType: "Prime Member (2 Years)",
    channel: "Inbound Phone Call",
    initialMood: "angry",
    orderInfo: {
      orderId: "701-9928104-0019283",
      item: "Cordless Drill Kit 20V ($119.00)",
      seller: "TechPro Direct (FBM - Merchant Fulfilled)",
      status: "Delivered 6 days ago (Defective Battery)",
      messagingHistory: "Customer messaged seller 3 days ago (>72h). Seller demanded $25 return fee."
    },
    background: "Customer received a defective drill from 3P seller. Seller refused prepaid return label and demanded $25 restocking fee. Customer messaged seller 3 days ago.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "I bought a drill from a 3rd party seller on Amazon that arrived with a cracked battery. The seller replied saying I have to pay $25 shipping and restocking fees to return a broken drill! Why is Amazon letting sellers rip people off?",
        options: [
          {
            id: "opt-3p-1a",
            text: "Hello Maria, my name is Mark. I am so sorry you had to deal with that! Third-party sellers on Amazon are required to match Amazon's return policies, and you should NEVER have to pay return fees for defective items. Let me review your message history with this seller right now.",
            quality: "best",
            impact: { mood: "annoyed", empathy: 25, compliance: 25, fcr: 25, timePenalty: 0 },
            feedback: "Reassures customer on marketplace standards and checks buyer-seller messaging."
          },
          {
            id: "opt-3p-1b",
            text: "Amazon is just a middleman. You have to pay whatever fee the seller charges.",
            quality: "bad",
            impact: { mood: "furious", empathy: -40, compliance: -50, fcr: -40, timePenalty: 20 },
            feedback: "Major Quality Violation! 3P sellers cannot charge return fees on defective goods."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Please check the messages Mark, he was very rude.",
        options: [
          {
            id: "opt-3p-2a",
            text: "I confirmed that more than 48 hours have passed and the seller refused a valid return. You are 100% covered under our Amazon A-to-z Guarantee! I have filed the claim for the full $119.00 refund right now. You don't have to return the drill or pay any fees, and the claims team will finalize it within 3-5 business days. Have I resolved this completely for you?",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 35, timePenalty: 0 },
            feedback: "Flawless execution! Filed A-to-z claim with proper reason code, waived fees, and provided complete customer peace of mind."
          },
          {
            id: "opt-3p-2b",
            text: "I filed it. Bye.",
            quality: "bad",
            impact: { mood: "annoyed", empathy: -15, compliance: -10, fcr: 10, timePenalty: 0 },
            feedback: "Vague timeline and dismissive tone."
          }
        ]
      }
    ]
  },
  {
    id: "sc-price-drop",
    title: "Post-Purchase Price Drop & Courtesy Credit Request",
    customerName: "Rachel Adams",
    customerType: "Prime Member (5 Years)",
    channel: "Inbound Phone Call",
    initialMood: "annoyed",
    orderInfo: {
      orderId: "112-9901823-1120938",
      item: "Ninja Foodi 8-in-1 Air Fryer ($179.99 bought 4 days ago; now $149.99)",
      status: "Delivered 2 days ago",
      deliveryTime: "Aug 14"
    },
    background: "Customer bought an air fryer 4 days ago for $180, and today it went on Deal of the Day for $150. She is calling asking for a price match refund instead of returning the heavy box.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "Hi Mark! I bought a Ninja Air Fryer 4 days ago for $180, and today it is on sale for $150 on your app! It hasn't even been opened. Can you refund the $30 difference, or do I have to return this one and order a new one?",
        options: [
          {
            id: "opt-price-1a",
            text: "Hello Rachel! Thank you for contacting Amazon. My name is Mark. I completely understand wanting the best deal, especially when a great discount appears right after you purchase! Let me review your order details right now.",
            quality: "best",
            impact: { mood: "neutral", empathy: 25, compliance: 25, fcr: 20, timePenalty: 0 },
            feedback: "Empathetic acknowledgment of price frustration with proactive review."
          },
          {
            id: "opt-price-1b",
            text: "No price matching ever. You have to return it and re-buy it.",
            quality: "bad",
            impact: { mood: "angry", empathy: -30, compliance: -10, fcr: -20, timePenalty: 15 },
            feedback: "Rigid and dismissive. Creates unnecessary shipping costs for Amazon."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "It would just be so wasteful to ship a 20-pound box back and forth.",
        options: [
          {
            id: "opt-price-2a",
            text: "You make a very practical point, Rachel. While Amazon doesn't offer automated post-delivery price matching due to dynamic supplier pricing, I value your 5 years with Prime. As a one-time courtesy, I have applied a $20.00 Amazon Courtesy Promotional Credit to your account balance for your next order. It is active right now!",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 35, timePenalty: 0 },
            feedback: "Outstanding application of associate goodwill credit tier ($20) to prevent costly return logistics."
          },
          {
            id: "opt-price-2b",
            text: "I will give you $100 credit for your trouble.",
            quality: "risky",
            impact: { mood: "delighted", empathy: 10, compliance: -50, fcr: 0, timePenalty: 0 },
            feedback: "Concession violation! $100 credit far exceeds standard associate authorization."
          }
        ]
      }
    ]
  },
  {
    id: "sc-locker-pickup",
    title: "Amazon Hub Locker Expired Reservation & Home Delivery",
    customerName: "Brandon Cole",
    customerType: "Prime Member (3 Years)",
    channel: "Inbound Phone Call",
    initialMood: "annoyed",
    orderInfo: {
      orderId: "111-3391820-4491823",
      item: "Anker USB-C Power Bank ($89.99)",
      status: "Returned to Fulfillment Center (Locker 3-day hold expired)",
      pickupLocation: "Hub Locker - 7-Eleven Pine St"
    },
    background: "Customer was traveling and missed the 3-day pickup window at the Amazon Hub Locker. The item was returned. Customer calls confused and needs the power bank tomorrow.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "Hey Mark, I went to the Amazon Locker to pick up my power bank and the screen said my reservation expired and package was returned! Why was it sent back? I need this for my flight tomorrow!",
        options: [
          {
            id: "opt-lock-1a",
            text: "Hello Brandon! My name is Mark. I understand how frustrating it is to arrive at the locker only to find your package has been returned! Let me check the locker delivery timestamps right now to explain what happened and get you taken care of.",
            quality: "best",
            impact: { mood: "neutral", empathy: 25, compliance: 25, fcr: 20, timePenalty: 0 },
            feedback: "Great calm opening by Mark, taking ownership to investigate."
          },
          {
            id: "opt-lock-1b",
            text: "You didn't read the email. You only have 3 days to pick it up.",
            quality: "bad",
            impact: { mood: "angry", empathy: -40, compliance: -10, fcr: -20, timePenalty: 20 },
            feedback: "Condescending tone."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "I was away on a business trip over the weekend. What can we do so I have it before tomorrow afternoon?",
        options: [
          {
            id: "opt-lock-2a",
            text: "Amazon Hub Lockers hold packages for 3 calendar days before auto-returning to keep slots open. The $89.99 was already refunded to your account. I can re-order the exact same Anker Power Bank right now with free One-Day Shipping to your home address, arriving tomorrow before 2 PM. Would you like me to place that?",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 35, timePenalty: 0 },
            feedback: "Superb First Contact Resolution! Clear policy explanation, validated refund, and placed replacement to home address."
          },
          {
            id: "opt-lock-2b",
            text: "Order it again yourself on the app.",
            quality: "bad",
            impact: { mood: "annoyed", empathy: -30, compliance: -10, fcr: -20, timePenalty: 10 },
            feedback: "Lazy customer service."
          }
        ]
      }
    ]
  },
  {
    id: "sc-unverified-spouse",
    title: "Failed Verification - Third-Party Caller & Address Change",
    customerName: "Tom Reynolds (for Jennifer Reynolds)",
    customerType: "Unverified Third Party",
    channel: "Inbound Phone Call",
    initialMood: "annoyed",
    orderInfo: {
      orderId: "114-8839102-3391820",
      item: "Dyson V15 Cordless Vacuum ($749.99)",
      status: "In Transit - Delivery Tomorrow",
      registeredAddress: "420 Oakwood Lane, Columbus, OH",
      requestedAddress: "1200 N Michigan Ave, Chicago, IL"
    },
    background: "Husband calls regarding his wife's Amazon account. He cannot verify the payment card or registered billing address, and demands Mark reroute a $750 vacuum to Chicago. He becomes angry when Mark explains security policies.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "Hi Mark, my name is Tom Reynolds. My wife Jennifer placed an order for a Dyson vacuum (#114-8839102) this morning. She's busy in meetings and told me to call you and change the delivery address to our new office in Chicago right now.",
        options: [
          {
            id: "opt-unver-1a",
            text: "Hello Tom, thank you for reaching out. I can certainly look into this for you. To protect our customers' account security and privacy, may I verify the full billing address and the last 4 digits of the payment card registered under Jennifer's account?",
            quality: "best",
            impact: { mood: "neutral", empathy: 20, compliance: 30, fcr: 20, timePenalty: 0 },
            feedback: "Flawless compliance! Mark initiates mandatory 2-point authentication, even for a spouse."
          },
          {
            id: "opt-unver-1b",
            text: "Sure! What is the Chicago address? I will update it right now since you're her husband.",
            quality: "bad",
            impact: { mood: "pleasant", empathy: 10, compliance: -100, fcr: -100, timePenalty: 0 },
            feedback: "CRITICAL QA FAIL! Never modify shipment addresses on $750 orders for an unverified third-party caller."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Look, I don't know what card she used, and we just moved so I'm not sure which billing address is listed. Can't you just look at the screen and tell me what address is on file, and change it?",
        options: [
          {
            id: "opt-unver-2a",
            text: "I completely understand the convenience, Tom. However, for customer data security, I am strictly not permitted to read out or confirm account details unless fully verified. Because billing details could not be confirmed, I cannot modify this shipment on this line. For Jennifer's protection, she can update the address in her Amazon app or call us directly.",
            quality: "best",
            impact: { mood: "annoyed", empathy: 25, compliance: 30, fcr: 30, timePenalty: 0 },
            feedback: "Masterclass in Zero-Tolerance Security! Mark refuses to leak private data, de-escalates with calm confidence, and provides legitimate self-service alternatives."
          },
          {
            id: "opt-unver-2b",
            text: "Is the address 420 Oakwood Lane in Columbus, OH? Does that sound right?",
            quality: "bad",
            impact: { mood: "pleasant", empathy: 5, compliance: -100, fcr: -100, timePenalty: 0 },
            feedback: "CRITICAL SECURITY BREACH! Disclosing unverified customer home addresses is an immediate termination offense."
          }
        ]
      },
      {
        turnIndex: 3,
        customerMessage: "I'm her husband! We have the same last name! Are you seriously refusing to help me?!",
        options: [
          {
            id: "opt-unver-3a",
            text: "I truly understand your frustration, Tom. These privacy safeguards exist to ensure no unauthorized person can alter orders on your family's account. Jennifer can easily update this in 10 seconds under 'Your Orders' > 'Change Shipping Address' in her Amazon app, or add you as an authorized Household member for future calls. Have I explained our security procedure clearly?",
            quality: "best",
            impact: { mood: "neutral", empathy: 25, compliance: 30, fcr: 35, timePenalty: 0 },
            feedback: "Superb de-escalation! Validates customer frustration, reinforces value of account security, guides exact app navigation, and maintains 100% compliance."
          },
          {
            id: "opt-unver-3b",
            text: "I am hanging up now. Bye.",
            quality: "bad",
            impact: { mood: "furious", empathy: -30, compliance: -20, fcr: -20, timePenalty: 15 },
            feedback: "Unprofessional disconnect without proper wrap-up or self-service guidance."
          }
        ]
      }
    ]
  },
  {
    id: "sc-replacement-unverified",
    title: "Damaged Item Replacement Request on Unverified Account",
    customerName: "Kevin Brooks",
    customerType: "Unverified Recipient / Ex-Roommate",
    channel: "Inbound Phone Call",
    initialMood: "angry",
    orderInfo: {
      orderId: "112-7729104-8839102",
      item: "De'Longhi Magnifica Espresso Machine ($649.95)",
      status: "Delivered 2 days ago (Broken Pump Reported)",
      shippingName: "Kevin Brooks (Recipient)",
      purchaserName: "Brian Miller (Account Owner)"
    },
    background: "Caller received a damaged $650 espresso machine ordered by his former roommate Brian. Kevin is angry and demands an immediate replacement sent to his address, but cannot verify the account email, billing address, or payment method.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "Hi Mark, my name is Kevin Brooks. I'm calling about a De'Longhi espresso machine (#112-7729104) that arrived with a cracked pump leaking water everywhere. I need an immediate replacement sent to my apartment right now!",
        options: [
          {
            id: "opt-rep-unv-1a",
            text: "Hello Kevin, my name is Mark. I am so sorry that your espresso machine arrived with a damaged pump! I can certainly look into this for you. To protect the account and proceed with order actions, could you please verify the full billing address and the last 4 digits of the payment method on file?",
            quality: "best",
            impact: { mood: "neutral", empathy: 25, compliance: 25, fcr: 20, timePenalty: 0 },
            feedback: "Flawless compliance! Mark pairs warm empathy with mandatory 2-point identity authentication."
          },
          {
            id: "opt-rep-unv-1b",
            text: "Sure! Since the pump is broken, I will dispatch a brand new $650 machine to you right away.",
            quality: "bad",
            impact: { mood: "pleasant", empathy: 15, compliance: -100, fcr: -100, timePenalty: 0 },
            feedback: "CRITICAL QA FAIL! Never issue replacement orders without verifying the primary account owner."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "I didn't buy it with my card! My former roommate Brian bought it for our apartment before moving out. I don't know his card number or where he lives now. The box has my name on it! Just ship the replacement to me!",
        options: [
          {
            id: "opt-rep-unv-2a",
            text: "I completely understand the frustration, Kevin. However, replacement orders generate a new shipment on an account with saved payment information. For security, associates cannot create replacement orders on unverified accounts. You have two options: Brian can click 'Return or Replace' in his Amazon app in 1 minute, or if it was a gift, you can use amazon.com/returns/gift with order #112-7729104 to receive Amazon credit in your own name.",
            quality: "best",
            impact: { mood: "pleasant", empathy: 25, compliance: 30, fcr: 35, timePenalty: 0 },
            feedback: "Outstanding resolution! Upholds Zero-Tolerance security, explains why replacements require authorization, and provides the exact Gift Returns self-service URL."
          },
          {
            id: "opt-rep-unv-2b",
            text: "Since you can't verify Brian's account, you are out of luck and we cannot help you with anything.",
            quality: "bad",
            impact: { mood: "furious", empathy: -40, compliance: -10, fcr: -30, timePenalty: 20 },
            feedback: "Abrasive and unhelpful! You must always provide legitimate resolution alternatives like the Gift Returns portal."
          }
        ]
      }
    ]
  }
];
