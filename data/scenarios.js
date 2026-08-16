// Simulation Scenarios for Amazon CSA Practice
export const SCENARIO_DATA = [
  {
    id: "sc-dnr-prime",
    title: "Late Birthday Gift - Delivered Not Received (DNR)",
    customerName: "Sarah Jenkins",
    customerType: "Prime Member (10+ Years, High Value)",
    channel: "Live Chat",
    initialMood: "angry", // angry, annoyed, neutral, pleasant
    orderInfo: {
      orderId: "114-8923011-4458921",
      item: "LEGO Star Wars Millennium Falcon ($169.99)",
      status: "Delivered 3 hours ago (Carrier: AMZL)",
      photoOnDelivery: "Front Porch (Blurry corner)",
      deliveryTime: "Today at 11:15 AM"
    },
    background: "Customer ordered a birthday gift for her son's party tonight. Tracking shows delivered 3 hours ago, but nothing is on her porch. She is furious and demands an immediate resolution.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "Where is my package?! Your app says it was delivered 3 hours ago to my front porch, but there is NOTHING there! My son's birthday party is tonight and this is unacceptable!",
        options: [
          {
            id: "opt-1a",
            text: "Hello Sarah! I am so sorry to hear this, especially since it's for your son's birthday. I understand how stressful this is. Let me immediately check your order details and delivery photo to see what happened.",
            quality: "best",
            impact: { mood: "annoyed", empathy: 25, compliance: 25, fcr: 20, timePenalty: 0 },
            feedback: "Excellent! Warm, empathetic acknowledgment with immediate ownership and clear statement of action."
          },
          {
            id: "opt-1b",
            text: "Please wait. Our policy says you have to wait 48 hours after delivery before we can do anything. Go check with your neighbors.",
            quality: "bad",
            impact: { mood: "furious", empathy: -30, compliance: -10, fcr: -20, timePenalty: 30 },
            feedback: "Terrible phrasing! Robotic, abrupt, and dismissive of the customer's urgent emotional context."
          },
          {
            id: "opt-1c",
            text: "I will just refund you right now since you are a 10-year Prime member. Done!",
            quality: "risky",
            impact: { mood: "pleasant", empathy: 15, compliance: -40, fcr: -10, timePenalty: 10 },
            feedback: "Compliance Violation! Refunding without checking tracking, delivery photo, or 48-hour DNR SOP breaks protocol and fails QA."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Thank you for checking. I checked my bushes, garage, and asked my next-door neighbor. Nothing. Is there any way the driver delivered it to the wrong address?",
        options: [
          {
            id: "opt-2a",
            text: "I reviewed the driver's delivery photo and GPS ping, and it appears it may have been placed near the side gate. Since you've already checked and the party is tonight, let me check stock for same-day replacement from a local fulfillment center or process an immediate account gift card refund so you can pick it up locally.",
            quality: "best",
            impact: { mood: "pleasant", empathy: 25, compliance: 25, fcr: 30, timePenalty: 0 },
            feedback: "Superb! You checked the CRM details, acknowledged their situation, and provided flexible, policy-compliant solutions."
          },
          {
            id: "opt-2b",
            text: "The GPS says it was delivered correctly so the driver did their job. You will have to wait 48 hours regardless.",
            quality: "bad",
            impact: { mood: "furious", empathy: -30, compliance: -20, fcr: -30, timePenalty: 45 },
            feedback: "Unacceptable! Accusing the customer or being rigid without offering constructive assistance causes severe escalations."
          },
          {
            id: "opt-2c",
            text: "I will file a complaint against the driver right now and give you a $50 gift card for your trouble.",
            quality: "risky",
            impact: { mood: "neutral", empathy: 10, compliance: -30, fcr: 0, timePenalty: 15 },
            feedback: "Concession Violation! $50 courtesy credit exceeds standard authorization limits without lead approval."
          }
        ]
      },
      {
        turnIndex: 3,
        customerMessage: "An immediate gift card refund would be a lifesaver! I can drive to the local retail store and buy it before the party starts. Thank you so much!",
        options: [
          {
            id: "opt-3a",
            text: "I have successfully processed the full refund of $169.99 to your Amazon Gift Card balance—it is available in your account right now. I have also submitted a carrier inquiry to ensure driver accuracy. Is there anything else I can assist you with today, Sarah?",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 30, timePenalty: 0 },
            feedback: "Outstanding wrap-up! Confirmation of funds, background carrier report logged, and standard professional closing."
          },
          {
            id: "opt-3b",
            text: "Refund done. Bye.",
            quality: "bad",
            impact: { mood: "annoyed", empathy: -15, compliance: -10, fcr: 10, timePenalty: 10 },
            feedback: "Abrupt wrap-up without validation or professional sign-off hurts your CSAT score."
          }
        ]
      }
    ]
  },
  {
    id: "sc-security-phish",
    title: "Account Security & Verification (Zero-Tolerance Test)",
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
            text: "I can certainly assist you with reviewing your order, David. For your account security and protection, I just need to verify your full billing address and the last 4 digits of the payment method on file first.",
            quality: "best",
            impact: { mood: "neutral", empathy: 20, compliance: 30, fcr: 20, timePenalty: 0 },
            feedback: "Perfect compliance! Standard security verification initiated before making any changes or disclosing account details."
          },
          {
            id: "opt-sec-1b",
            text: "Sure! What is the new Miami address? I will change it right now so it doesn't get lost.",
            quality: "bad",
            impact: { mood: "pleasant", empathy: 10, compliance: -100, fcr: -100, timePenalty: 0 },
            feedback: "CRITICAL QA FAIL! Never modify shipment addresses on high-value orders without strict secondary authentication."
          },
          {
            id: "opt-sec-1c",
            text: "Your credit card ending in 4921 is billed to 1424 Pine St Seattle, right? Can you confirm if that's you?",
            quality: "bad",
            impact: { mood: "pleasant", empathy: 5, compliance: -80, fcr: -50, timePenalty: 0 },
            feedback: "Security Breach! You gave away the customer's private data instead of asking them to verify it."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Look, I'm in a rush at the airport and don't have my card on me! Can't you just see I gave you the order number? Just reroute it to 900 Industrial Blvd, Miami, FL!",
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
          },
          {
            id: "opt-sec-2c",
            text: "You sound like a scammer. I am flagging your account and hanging up.",
            quality: "bad",
            impact: { mood: "furious", empathy: -50, compliance: -30, fcr: -50, timePenalty: 20 },
            feedback: "Unprofessional conduct! Never accuse a customer of fraud directly. Follow standard polite verification failure protocol."
          }
        ]
      },
      {
        turnIndex: 3,
        customerMessage: "Ugh, fine. Let me check my phone... The code is 849201. Now will you update it?",
        options: [
          {
            id: "opt-sec-3a",
            text: "Thank you for verifying the passcode. I have confirmed your identity. According to carrier policy for items already in transit with high value, packages cannot be rerouted mid-transit to a new state. However, I can request a carrier hold at a secure pickup locker in Seattle or cancel and reorder to your Miami address upon return. Which do you prefer?",
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
    id: "sc-digital-video",
    title: "Accidental Prime Video Rental by Child",
    customerName: "Robert Garcia",
    customerType: "Prime Member",
    channel: "Live Chat",
    initialMood: "annoyed",
    orderInfo: {
      orderId: "D01-9238102-4819283",
      item: "Dune: Part Two (4K UHD Rental - $19.99)",
      status: "Purchased 45 minutes ago",
      watchDuration: "0 minutes (Not streamed)",
      device: "Living Room Fire TV Stick"
    },
    background: "Customer was billed $19.99 for a movie rental. His 7-year-old clicked buy by accident. He hasn't watched it and wants a refund and wants to make sure it doesn't happen again.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "I just got an email that my card was charged $19.99 for Dune on Prime Video! My kid was playing with the remote. We didn't watch it. Can I get my money back?",
        options: [
          {
            id: "opt-dig-1a",
            text: "Hello Robert! I can certainly help with that. Accidental clicks happen all the time with remotes! I see the rental on your account from 45 minutes ago with 0 watch time. Let me process an immediate refund for you.",
            quality: "best",
            impact: { mood: "pleasant", empathy: 25, compliance: 25, fcr: 25, timePenalty: 0 },
            feedback: "Great warmth, reassurance, and quick SOP check on watch duration."
          },
          {
            id: "opt-dig-1b",
            text: "Digital sales are final and non-refundable once purchased according to terms of service.",
            quality: "bad",
            impact: { mood: "furious", empathy: -30, compliance: -30, fcr: -20, timePenalty: 15 },
            feedback: "Incorrect SOP! Prime Video allows one-time accidental purchase refunds if watch time is 0% within 48 hours."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Thank you so much! How do I stop my kid from doing this again on the Fire TV?",
        options: [
          {
            id: "opt-dig-2a",
            text: "I've processed the full $19.99 refund back to your card (3-5 business days). To prevent future accidental purchases, you can easily enable a 5-digit PIN on your Fire TV by going to Settings > Preferences > Parental Controls > Turn ON and set PIN for purchases. Would you like me to stay on chat while you test that out?",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 35, timePenalty: 0 },
            feedback: "Outstanding First Contact Resolution (FCR)! Solved the immediate billing issue AND prevented future customer friction."
          },
          {
            id: "opt-dig-2b",
            text: "Just don't give the remote to your kid. Anything else?",
            quality: "bad",
            impact: { mood: "annoyed", empathy: -30, compliance: -10, fcr: -10, timePenalty: 10 },
            feedback: "Condescending and unhelpful."
          }
        ]
      }
    ]
  },
  {
    id: "sc-marketplace-atoz",
    title: "Third-Party Marketplace Dispute & A-to-z Claim",
    customerName: "Elena Rostova",
    customerType: "Amazon Customer",
    channel: "Live Chat",
    initialMood: "angry",
    orderInfo: {
      orderId: "702-8192031-1029381",
      item: "Vintage Leather Jacket ($145.00)",
      seller: "RetroVibe Apparel (FBM - Merchant Fulfilled)",
      deliveredDate: "5 days ago",
      messagingHistory: "Customer messaged seller 3 days ago requesting return for wrong size. Seller has not replied."
    },
    background: "Customer purchased from a 3P seller. Received wrong size. She followed SOP and messaged seller 3 days (>72 hours) ago with zero response. She wants Amazon to step in.",
    turns: [
      {
        turnIndex: 1,
        customerMessage: "I ordered a jacket from a third-party seller on Amazon. It came in Small instead of Large. I messaged the seller 3 days ago and they are completely ghosting me! Why isn't Amazon doing anything?",
        options: [
          {
            id: "opt-3p-1a",
            text: "Hello Elena, I understand your frustration with the unresponsive seller. Let me check your message history with them. Since you reached out over 48 hours ago without a response, I can protect you under our A-to-z Guarantee right now.",
            quality: "best",
            impact: { mood: "pleasant", empathy: 25, compliance: 25, fcr: 25, timePenalty: 0 },
            feedback: "Excellent! You validated the 48-hour seller response window and correctly invoked the A-to-z Guarantee protocol."
          },
          {
            id: "opt-3p-1b",
            text: "Amazon is just a platform. You need to call the seller yourself or contact your bank.",
            quality: "bad",
            impact: { mood: "furious", empathy: -40, compliance: -50, fcr: -40, timePenalty: 20 },
            feedback: "Major Quality Violation! Suggesting a customer file a chargeback or brushing off marketplace accountability breaks Amazon's customer promise."
          }
        ]
      },
      {
        turnIndex: 2,
        customerMessage: "Please file the claim! How long will it take to get my money back?",
        options: [
          {
            id: "opt-3p-2a",
            text: "I have submitted the A-to-z Guarantee Claim for $145.00 on your behalf under reason code 'Item Materially Different / Seller Unresponsive'. Our claims team will review and resolve this within 3 to 5 business days, and you will receive email updates. You don't need to take any further action with the seller.",
            quality: "best",
            impact: { mood: "delighted", empathy: 25, compliance: 25, fcr: 30, timePenalty: 0 },
            feedback: "Flawless execution! Clear timeline, claim submitted with proper reason code, and complete peace of mind for the customer."
          },
          {
            id: "opt-3p-2b",
            text: "I filed it. You will get an email sometime next month.",
            quality: "bad",
            impact: { mood: "annoyed", empathy: -15, compliance: -10, fcr: 10, timePenalty: 0 },
            feedback: "Vague timeline and dismissive tone."
          }
        ]
      }
    ]
  }
];
