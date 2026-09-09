export interface QuizQuestion {
  id: string | number;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface QuizSet {
  ageGroup: string;
  category: string;
  setId: number;
  questions: QuizQuestion[];
}

export const QUIZ_AGE_GROUPS = ["4-10", "11-14", "15-24", "25+"] as const;

export const QUIZ_DATA: QuizSet[] = [
  {
    ageGroup: "4-10",
    category: "fun-learning",
    setId: 1,
    questions: [
      {
        id: 1,
        question: "In a village, which animal helps carry goods in the farm area?",
        options: ["Horse", "Tiger", "Shark", "Monkey"],
        answer: "Horse",
        explanation: "Horses are often used to carry loads and help in fields in many rural areas."
      },
      {
        id: 2,
        question: "If you plant a seed and give it water, what will it become?",
        options: ["Stone", "Plant", "Glass", "Plastic"],
        answer: "Plant",
        explanation: "Seeds need soil, water, and sunlight to grow into plants."
      },
      {
        id: 3,
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "There are seven days in a week, from Monday to Sunday."
      },
      {
        id: 4,
        question: "Which of these is used to drink water?",
        options: ["Cup", "Bucket", "Shoe", "Leaf"],
        answer: "Cup",
        explanation: "A cup is commonly used to drink water or tea."
      },
      {
        id: 5,
        question: "Which festival is known for colors and fun in India?",
        options: ["Holi", "Diwali", "Pongal", "Eid"],
        answer: "Holi",
        explanation: "Holi is celebrated with colors, joy, and community gatherings."
      },
      {
        id: 6,
        question: "Which of these is a farm animal?",
        options: ["Cow", "Whale", "Eagle", "Dolphin"],
        answer: "Cow",
        explanation: "Cows are common farm animals and give milk."
      },
      {
        id: 7,
        question: "What do we call the water from rain that fills ponds and wells?",
        options: ["Fire", "Rainwater", "Sand", "Dust"],
        answer: "Rainwater",
        explanation: "Rainwater collects in ponds, wells, and tanks and helps plants and people."
      },
      {
        id: 8,
        question: "Which shape has three sides?",
        options: ["Circle", "Triangle", "Square", "Rectangle"],
        answer: "Triangle",
        explanation: "A triangle has exactly three sides and three corners."
      },
      {
        id: 9,
        question: "Who helps a village family during illness?",
        options: ["Doctor", "Teacher", "Farmer", "Driver"],
        answer: "Doctor",
        explanation: "Doctors check patients and help people recover from sickness."
      },
      {
        id: 10,
        question: "Which of these is the biggest source of light during the day?",
        options: ["Moon", "Lamp", "Sun", "Torch"],
        answer: "Sun",
        explanation: "The Sun gives natural light and warmth during the daytime."
      }
    ]
  },
  {
    ageGroup: "11-14",
    category: "curiosity-zone",
    setId: 1,
    questions: [
      {
        id: 1,
        question: "Which is the main source of water for many village farms?",
        options: ["Rain", "Oil", "Plastic", "Coal"],
        answer: "Rain",
        explanation: "Rain is essential for crops, ponds, and wells in many villages."
      },
      {
        id: 2,
        question: "Which festival is celebrated with lamps and prayers in many Indian homes?",
        options: ["Holi", "Diwali", "Pongal", "Raksha Bandhan"],
        answer: "Diwali",
        explanation: "Diwali is celebrated with lights, prayers, and sweets to mark the victory of light over darkness."
      },
      {
        id: 3,
        question: "What is the best way to protect crops from too much heat?",
        options: ["Ignore them", "Use shade and water well", "Burn the field", "Leave them uncovered"],
        answer: "Use shade and water well",
        explanation: "Watering crops and protecting them from extreme heat helps them grow properly."
      },
      {
        id: 4,
        question: "Which part of a plant absorbs water from the soil?",
        options: ["Flower", "Stem", "Roots", "Leaves"],
        answer: "Roots",
        explanation: "Roots take in water and minerals needed for plant growth."
      },
      {
        id: 5,
        question: "Which gas do plants take from the air to make food?",
        options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
        answer: "Carbon dioxide",
        explanation: "Plants absorb carbon dioxide and use sunlight to make their food."
      },
      {
        id: 6,
        question: "Which of these is a renewable source of energy?",
        options: ["Coal", "Diesel", "Solar energy", "Kerosene"],
        answer: "Solar energy",
        explanation: "Solar energy is renewable and can be used for power, water pumping, and lighting."
      },
      {
        id: 7,
        question: "What is the capital of India?",
        options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"],
        answer: "New Delhi",
        explanation: "New Delhi is the capital city of India."
      },
      {
        id: 8,
        question: "A family stores grain in a safe place to use later. What is this practice called?",
        options: ["Selling", "Saving", "Burning", "Throwing away"],
        answer: "Saving",
        explanation: "Saving grain and money helps families prepare for difficult times."
      },
      {
        id: 9,
        question: "Which is the biggest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Jupiter",
        explanation: "Jupiter is the largest planet in our solar system."
      },
      {
        id: 10,
        question: "Why is clean drinking water important for a family?",
        options: ["It keeps us healthy", "It makes roads longer", "It grows stones", "It can replace food"],
        answer: "It keeps us healthy",
        explanation: "Clean water helps prevent disease and supports good health."
      }
    ]
  },
  {
    ageGroup: "15-24",
    category: "mind-quest",
    setId: 1,
    questions: [
      {
        id: 1,
        question: "If 4 bags of rice cost ₹800 and 2 more bags are added, what is the total cost for 6 bags?",
        options: ["₹1,000", "₹1,200", "₹1,400", "₹1,600"],
        answer: "₹1,200",
        explanation: "Each bag costs ₹200, so 6 bags cost ₹1,200."
      },
      {
        id: 2,
        question: "Which practice helps farmers during water shortage?",
        options: ["Wasting water", "Water harvesting", "Leaving fields dry", "Stopping all farming"],
        answer: "Water harvesting",
        explanation: "Collecting and storing water helps during dry periods and improves crop survival."
      },
      {
        id: 3,
        question: "What is the main benefit of saving money regularly?",
        options: ["Instant wealth", "Security for future needs", "No need to work", "Always spending more"],
        answer: "Security for future needs",
        explanation: "Regular saving helps families handle emergencies and planned expenses."
      },
      {
        id: 4,
        question: "Which of these is a renewable energy source suitable for rural use?",
        options: ["Coal", "Solar power", "Wood fuel", "Diesel"],
        answer: "Solar power",
        explanation: "Solar power is renewable and useful for lighting, pumping water, and small appliances."
      },
      {
        id: 5,
        question: "If a village well is 15 meters deep and you are 5 meters below water level, how much deeper is the well bottom?",
        options: ["5 meters", "10 meters", "15 meters", "20 meters"],
        answer: "10 meters",
        explanation: "The well is 15 m deep and the water level is at 5 m, so the bottom is 10 m deeper than the water surface."
      },
      {
        id: 6,
        question: "Which of these best helps improve village health?",
        options: ["Drinking dirty water", "Clean toilets and handwashing", "Ignoring waste", "Keeping ponds dirty"],
        answer: "Clean toilets and handwashing",
        explanation: "Good hygiene and sanitation prevent illness and improve community health."
      },
      {
        id: 7,
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
        explanation: "2 is the smallest prime number because it has only two factors: 1 and 2."
      },
      {
        id: 8,
        question: "Why do farmers rotate crops?",
        options: ["To waste time", "To improve soil health", "To make weeds grow", "To reduce rainfall"],
        answer: "To improve soil health",
        explanation: "Crop rotation helps maintain soil fertility and reduces disease in fields."
      },
      {
        id: 9,
        question: "Which of these is an example of smart community planning?",
        options: ["Ignoring drainage", "Building proper roads and drains", "Throwing waste on streets", "Keeping water stagnant"],
        answer: "Building proper roads and drains",
        explanation: "Good drainage and roads improve safety, access, and daily life for everyone."
      },
      {
        id: 10,
        question: "If a bus takes 3 hours to travel 90 km, what is its average speed?",
        options: ["20 km/h", "25 km/h", "30 km/h", "35 km/h"],
        answer: "30 km/h",
        explanation: "Average speed = 90 ÷ 3 = 30 km/h."
      }
    ]
  },
  {
    ageGroup: "25+",
    category: "wellness-boost",
    setId: 1,
    questions: [
      {
        id: 1,
        question: "Which habit most helps a family manage financial stress during difficult months?",
        options: ["Borrowing without planning", "Regular savings and budgeting", "Avoiding all spending", "Ignoring bills"],
        answer: "Regular savings and budgeting",
        explanation: "Saving consistently and planning expenses helps families stay stable during uncertainty."
      },
      {
        id: 2,
        question: "What is the best way to keep a village water source clean?",
        options: ["Dump waste nearby", "Build proper drainage and clean regularly", "Let animals stay nearby", "Ignore maintenance"],
        answer: "Build proper drainage and clean regularly",
        explanation: "Clean water systems and good drainage prevent contamination and disease."
      },
      {
        id: 3,
        question: "Which practice helps reduce crop loss due to climate changes?",
        options: ["Planting only one crop and ignoring weather", "Monitoring rain, soil, and irrigation carefully", "Overwatering every day", "Burning the field"],
        answer: "Monitoring rain, soil, and irrigation carefully",
        explanation: "Careful planning and watching weather patterns help improve crop resilience."
      },
      {
        id: 4,
        question: "What is the most effective way to build trust in a community group?",
        options: ["Ignore others", "Listen respectfully and act fairly", "Argue in public", "Keep all decisions secret"],
        answer: "Listen respectfully and act fairly",
        explanation: "Fair communication and respect build stronger trust and cooperation in community work."
      },
      {
        id: 5,
        question: "Which of these supports better health for older adults?",
        options: ["No physical activity", "Regular exercise and nutritious food", "Sleeping very little", "Skipping meals"],
        answer: "Regular exercise and nutritious food",
        explanation: "Balanced food and movement improve strength, energy, and long-term health."
      },
      {
        id: 6,
        question: "What is the main benefit of group savings or community lending?",
        options: ["More confusion", "Support during emergencies", "No need for planning", "Higher risk all the time"],
        answer: "Support during emergencies",
        explanation: "Shared savings and lending systems help families access help when needed."
      },
      {
        id: 7,
        question: "Which is the best approach when a village problem affects many families?",
        options: ["Work alone", "Discuss together and find a common solution", "Wait for the problem to disappear", "Blame others"],
        answer: "Discuss together and find a common solution",
        explanation: "Community discussion helps find fair and practical solutions for everyone."
      },
      {
        id: 8,
        question: "Which action best supports long-term success in life and work?",
        options: ["Ignoring learning", "Learning from experience and improving regularly", "Avoiding challenges", "Working without planning"],
        answer: "Learning from experience and improving regularly",
        explanation: "Continuing to learn and improve helps families and communities grow stronger over time."
      },
      {
        id: 9,
        question: "What does financial planning help a family do?",
        options: ["Increase confusion", "Prepare for education, health, and emergencies", "Avoid all goals", "Spend without limits"],
        answer: "Prepare for education, health, and emergencies",
        explanation: "Planning helps families make wise choices for the future."
      },
      {
        id: 10,
        question: "Which habit Most strengthens a good community leader?",
        options: ["Silence", "Empathy and fairness", "Arrogance", "Ignoring people"],
        answer: "Empathy and fairness",
        explanation: "Leaders who listen and act fairly earn trust and bring people together."
      }
    ]
  }
];

export default QUIZ_DATA;

// Real quiz data (separate set of questions used after PIN validation)
export const REAL_QUIZ_DATA: QuizSet[] = [
  {
    ageGroup: "4-10",
    category: "real-challenge",
    setId: 101,
    questions: [
      {
        id: "r1-1",
        question: "If you have 2 mangoes and your friend gives you 3 more, how many mangoes do you have?",
        options: ["4", "5", "6", "7"],
        answer: "5",
        explanation: "2 + 3 = 5, so you have five mangoes."
      },
      {
        id: "r1-2",
        question: "Which day comes after Tuesday?",
        options: ["Monday", "Wednesday", "Sunday", "Friday"],
        answer: "Wednesday",
        explanation: "The week moves forward from Tuesday to Wednesday."
      },
      {
        id: "r1-3",
        question: "A basket has 6 eggs. 2 are broken. How many eggs are left?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "6 - 2 = 4, so four eggs remain."
      },
      {
        id: "r1-4",
        question: "Which of these animals gives us milk?",
        options: ["Hen", "Dog", "Cow", "Duck"],
        answer: "Cow",
        explanation: "Cows are commonly used for milk in village homes and farms."
      },
      {
        id: "r1-5",
        question: "How many sides does a rectangle have?",
        options: ["2", "3", "4", "5"],
        answer: "4",
        explanation: "A rectangle has four sides and four corners."
      },
      {
        id: "r1-6",
        question: "Which season usually comes after summer?",
        options: ["Winter", "Rainy season", "Spring", "Autumn"],
        answer: "Rainy season",
        explanation: "In many regions, the rainy season follows summer."
      },
      {
        id: "r1-7",
        question: "Which animal helps in carrying goods in a village?",
        options: ["Dog", "Horse", "Parrot", "Frog"],
        answer: "Horse",
        explanation: "Horses are often used for carrying loads and travel in many villages."
      },
      {
        id: "r1-8",
        question: "What is 7 + 8?",
        options: ["13", "14", "15", "16"],
        answer: "15",
        explanation: "7 + 8 = 15."
      },
      {
        id: "r1-9",
        question: "Which of these is the smallest unit of money?",
        options: ["₹1", "₹5", "₹10", "₹50"],
        answer: "₹1",
        explanation: "A one-rupee coin is a small unit of money used in daily payments."
      },
      {
        id: "r1-10",
        question: "A farmer plants 3 rows of 4 saplings each. How many saplings are there?",
        options: ["10", "11", "12", "13"],
        answer: "12",
        explanation: "3 × 4 = 12, so there are 12 saplings."
      },
      {
        id: "r1-11",
        question: "Which time is earlier: 7:00 AM or 7:00 PM?",
        options: ["7:00 AM", "7:00 PM", "Both same", "Cannot say"],
        answer: "7:00 AM",
        explanation: "Morning time is earlier than evening time."
      },
      {
        id: "r1-12",
        question: "Which vegetable grows under the ground?",
        options: ["Tomato", "Carrot", "Cabbage", "Pumpkin"],
        answer: "Carrot",
        explanation: "Carrots grow underground as roots."
      },
      {
        id: "r1-13",
        question: "If you divide 12 by 3, what do you get?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "12 ÷ 3 = 4."
      },
      {
        id: "r1-14",
        question: "Which one is used to measure water in a home?",
        options: ["Bucket", "Chair", "Broom", "Bottle cap"],
        answer: "Bucket",
        explanation: "A bucket is commonly used to carry and store water."
      },
      {
        id: "r1-15",
        question: "Which is more: half of 10 or one-third of 12?",
        options: ["Half of 10", "One-third of 12", "Both same", "Cannot say"],
        answer: "Half of 10",
        explanation: "Half of 10 is 5, while one-third of 12 is 4."
      },
      {
        id: "r1-16",
        question: "Which month comes before July?",
        options: ["June", "August", "September", "May"],
        answer: "June",
        explanation: "June comes immediately before July."
      },
      {
        id: "r1-17",
        question: "If a cow gives 3 liters of milk in the morning and 2 liters in the evening, how much milk is given in a day?",
        options: ["4 liters", "5 liters", "6 liters", "7 liters"],
        answer: "5 liters",
        explanation: "3 + 2 = 5 liters in total."
      },
      {
        id: "r1-18",
        question: "Which is the best way to save water at home?",
        options: ["Leave the tap running", "Close the tap while brushing", "Wash more than needed", "Keep leaking pipes open"],
        answer: "Close the tap while brushing",
        explanation: "Turning off the tap saves water and avoids wastage."
      },
      {
        id: "r1-19",
        question: "What is the next number in this pattern: 5, 10, 15, 20, ?",
        options: ["21", "22", "25", "30"],
        answer: "25",
        explanation: "The pattern increases by 5 each time."
      },
      {
        id: "r1-20",
        question: "A child has 18 sweets and shares them equally among 3 friends. How many does each friend get?",
        options: ["4", "5", "6", "7"],
        answer: "6",
        explanation: "18 ÷ 3 = 6, so each friend gets 6 sweets."
      }
    ]
  },
  {
    ageGroup: "11-14",
    category: "real-challenge",
    setId: 102,
    questions: [
      {
        id: "r2-1",
        question: "A tractor carries 20 sacks in one trip. If it makes 3 trips, how many sacks are carried altogether?",
        options: ["40", "50", "60", "70"],
        answer: "60",
        explanation: "20 × 3 = 60 sacks."
      },
      {
        id: "r2-2",
        question: "Which is a better way to save water in a village home?",
        options: ["Leave taps open", "Repair leaks and reuse water", "Wash more than needed", "Ignore cleaning"],
        answer: "Repair leaks and reuse water",
        explanation: "Saving and reusing water helps families conserve this precious resource."
      },
      {
        id: "r2-3",
        question: "If a villager buys 5 kg rice for ₹250, what is the cost per kg?",
        options: ["₹40", "₹45", "₹50", "₹55"],
        answer: "₹50",
        explanation: "₹250 ÷ 5 = ₹50 per kg."
      },
      {
        id: "r2-4",
        question: "Which practice helps prevent diseases in a village?",
        options: ["Open drains near homes", "Handwashing and clean toilets", "Throwing waste near ponds", "Leaving water stagnant"],
        answer: "Handwashing and clean toilets",
        explanation: "Clean habits stop germs from spreading and improve health."
      },
      {
        id: "r2-5",
        question: "What is 25% of 80?",
        options: ["10", "15", "20", "25"],
        answer: "20",
        explanation: "25% means one-fourth, and 80 ÷ 4 = 20."
      },
      {
        id: "r2-6",
        question: "Which weather condition is most harmful for standing crops?",
        options: ["Light rain", "Heavy drought", "Gentle breeze", "Mild sunlight"],
        answer: "Heavy drought",
        explanation: "Drought causes water shortage and can damage crops badly."
      },
      {
        id: "r2-7",
        question: "A community pond is useful for which of the following?",
        options: ["Only decoration", "Water storage and irrigation", "Burning waste", "Passing vehicles"],
        answer: "Water storage and irrigation",
        explanation: "Ponds can store water and support irrigation for crops and animals."
      },
      {
        id: "r2-8",
        question: "Which of these is the best reason to plant more trees near homes and farms?",
        options: ["To block sunlight only", "To provide shade, wind protection, and oxygen", "To make fields smaller", "To increase dust"],
        answer: "To provide shade, wind protection, and oxygen",
        explanation: "Trees help with shade, prevent erosion, improve air, and protect the land."
      },
      {
        id: "r2-9",
        question: "What is the value of 3 × 9?",
        options: ["24", "26", "27", "29"],
        answer: "27",
        explanation: "Three groups of nine equal 27."
      },
      {
        id: "r2-10",
        question: "If a bus leaves at 8:30 AM and reaches the town at 9:15 AM, how long is the journey?",
        options: ["30 minutes", "45 minutes", "60 minutes", "75 minutes"],
        answer: "45 minutes",
        explanation: "From 8:30 to 9:15 is 45 minutes."
      },
      {
        id: "r2-11",
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        answer: "Mars",
        explanation: "Mars appears reddish because of iron-rich dust."
      },
      {
        id: "r2-12",
        question: "A village school has 40 students. If 8 are absent, how many are present?",
        options: ["30", "32", "34", "36"],
        answer: "32",
        explanation: "40 - 8 = 32 students present."
      },
      {
        id: "r2-13",
        question: "Which of these is the best reason to clean a well regularly?",
        options: ["To save time", "To keep water safe to drink", "To make it look bigger", "To reduce sunlight"],
        answer: "To keep water safe to drink",
        explanation: "Regular cleaning reduces dirt and germs in the water."
      },
      {
        id: "r2-14",
        question: "What is the next number in the pattern: 2, 4, 8, 16, ?",
        options: ["18", "20", "24", "32"],
        answer: "32",
        explanation: "Each number doubles, so 16 × 2 = 32."
      },
      {
        id: "r2-15",
        question: "A packet of seeds costs ₹120. If a farmer buys 3 packets, how much does he pay?",
        options: ["₹300", "₹320", "₹340", "₹360"],
        answer: "₹360",
        explanation: "3 × ₹120 = ₹360."
      },
      {
        id: "r2-16",
        question: "Which is bigger: 3/4 or 2/3?",
        options: ["3/4", "2/3", "Both same", "Cannot say"],
        answer: "3/4",
        explanation: "Three-fourths is larger than two-thirds."
      },
      {
        id: "r2-17",
        question: "If 30 minutes of irrigation is needed for a field and water is supplied every 10 minutes, how many times is it supplied?",
        options: ["2 times", "3 times", "4 times", "5 times"],
        answer: "3 times",
        explanation: "30 ÷ 10 = 3 supply intervals."
      },
      {
        id: "r2-18",
        question: "Which gas do plants use from the air to make food?",
        options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"],
        answer: "Carbon dioxide",
        explanation: "Plants take in carbon dioxide during photosynthesis."
      },
      {
        id: "r2-19",
        question: "A family buys 2 kg rice for ₹60 and 1 kg wheat for ₹30. What is the total cost?",
        options: ["₹80", "₹90", "₹100", "₹110"],
        answer: "₹90",
        explanation: "₹60 + ₹30 = ₹90."
      },
      {
        id: "r2-20",
        question: "A field is 12 m long and 8 m wide. What is its area?",
        options: ["80 m²", "90 m²", "96 m²", "100 m²"],
        answer: "96 m²",
        explanation: "Area = 12 × 8 = 96 square meters."
      }
    ]
  },
  {
    ageGroup: "15-24",
    category: "real-challenge",
    setId: 103,
    questions: [
      {
        id: "r3-1",
        question: "A farmer sells 12 sacks of rice for ₹1,800. What is the price per sack?",
        options: ["₹120", "₹130", "₹140", "₹150"],
        answer: "₹150",
        explanation: "₹1,800 ÷ 12 = ₹150 per sack."
      },
      {
        id: "r3-2",
        question: "If 3x - 7 = 20, what is x?",
        options: ["7", "8", "9", "10"],
        answer: "9",
        explanation: "3x = 27, so x = 9."
      },
      {
        id: "r3-3",
        question: "A family spends ₹2,500 on food and ₹1,500 on other needs. What is the total expense?",
        options: ["₹3,500", "₹4,000", "₹4,500", "₹5,000"],
        answer: "₹4,000",
        explanation: "₹2,500 + ₹1,500 = ₹4,000."
      },
      {
        id: "r3-4",
        question: "Which of these is the best way to reduce water loss in agriculture?",
        options: ["Flooding fields constantly", "Using drip irrigation", "Watering at noon only", "Leaving pipes open"],
        answer: "Using drip irrigation",
        explanation: "Drip irrigation supplies water directly to roots and reduces wastage."
      },
      {
        id: "r3-5",
        question: "If the price of one bag of fertilizer is ₹450 and there is a 10% discount, what is the discounted price?",
        options: ["₹395", "₹405", "₹415", "₹425"],
        answer: "₹405",
        explanation: "10% of ₹450 is ₹45, so the price becomes ₹405."
      },
      {
        id: "r3-6",
        question: "A worker can finish a task in 6 days working 5 hours a day. If he works 10 hours a day, how many days are needed?",
        options: ["2 days", "3 days", "4 days", "5 days"],
        answer: "3 days",
        explanation: "Total work is 30 hours, so 30 ÷ 10 = 3 days."
      },
      {
        id: "r3-7",
        question: "What is the median of these numbers: 4, 9, 6, 7, 5?",
        options: ["4", "5", "6", "7"],
        answer: "6",
        explanation: "Ordered as 4, 5, 6, 7, 9; the middle value is 6."
      },
      {
        id: "r3-8",
        question: "Which is the best way to prevent disease spread in a village during the rainy season?",
        options: ["Leave drains blocked", "Keep surroundings clean and safe", "Store dirty water near houses", "Ignore standing water"],
        answer: "Keep surroundings clean and safe",
        explanation: "Clean surroundings and drainage reduce illness and mosquito breeding."
      },
      {
        id: "r3-9",
        question: "If 30% of a number is 90, what is the number?",
        options: ["250", "270", "300", "350"],
        answer: "300",
        explanation: "30% = 90 means 1% = 3, so 100% = 300."
      },
      {
        id: "r3-10",
        question: "A tractor uses 8 liters of diesel for 40 km. How much diesel is needed for 100 km?",
        options: ["18 liters", "20 liters", "22 liters", "25 liters"],
        answer: "20 liters",
        explanation: "For 40 km, 8 liters are used, so for 100 km it is 100 ÷ 40 × 8 = 20 liters."
      },
      {
        id: "r3-11",
        question: "Which of these is a good saving habit for a village family?",
        options: ["Spend all income immediately", "Save a fixed part every month", "Borrow for every small buy", "Ignore future needs"],
        answer: "Save a fixed part every month",
        explanation: "Regular saving helps handle emergencies and future needs."
      },
      {
        id: "r3-12",
        question: "A village committee has 6 members and 18 tasks. If each member takes an equal number of tasks, how many tasks does each person do?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "18 ÷ 6 = 3 tasks per member."
      },
      {
        id: "r3-13",
        question: "Which of these is the best reason to rotate crops?",
        options: ["To waste more seed", "To improve soil health", "To keep fields empty", "To raise only one crop"],
        answer: "To improve soil health",
        explanation: "Crop rotation helps maintain soil fertility and reduces disease."
      },
      {
        id: "r3-14",
        question: "If a bullock cart covers 12 km in 3 hours, what is the speed?",
        options: ["3 km/h", "4 km/h", "5 km/h", "6 km/h"],
        answer: "4 km/h",
        explanation: "12 ÷ 3 = 4 km per hour."
      },
      {
        id: "r3-15",
        question: "Which of these best describes a democratic village meeting?",
        options: ["Only one person decides", "All members discuss and vote", "No one speaks", "Only elders sit silently"],
        answer: "All members discuss and vote",
        explanation: "Democracy means participation and shared decision-making."
      },
      {
        id: "r3-16",
        question: "A farmer buys 5 sacks of grain for ₹1,200. What is the cost of one sack?",
        options: ["₹200", "₹220", "₹240", "₹250"],
        answer: "₹240",
        explanation: "₹1,200 ÷ 5 = ₹240 per sack."
      },
      {
        id: "r3-17",
        question: "Which action helps the most in reducing electricity waste at home?",
        options: ["Leave lights on in empty rooms", "Switch off lights when not needed", "Keep fan on all night", "Run motors without use"],
        answer: "Switch off lights when not needed",
        explanation: "Turning off unused appliances saves electricity and reduces costs."
      },
      {
        id: "r3-18",
        question: "A shopkeeper marks a product at ₹500 and gives a 20% discount. What is the discounted price?",
        options: ["₹380", "₹400", "₹420", "₹450"],
        answer: "₹400",
        explanation: "20% of ₹500 is ₹100, so the final price is ₹400."
      },
      {
        id: "r3-19",
        question: "Which is the better choice for long-term soil health in farming?",
        options: ["Growing the same crop every year", "Using compost and crop rotation", "Burning residue every season", "Removing all organic matter"],
        answer: "Using compost and crop rotation",
        explanation: "Compost and crop rotation improve soil fertility and reduce depletion."
      },
      {
        id: "r3-20",
        question: "A tank is filled with 360 liters of water in 6 hours. What is the average water flow per hour?",
        options: ["50 liters/hour", "55 liters/hour", "60 liters/hour", "65 liters/hour"],
        answer: "60 liters/hour",
        explanation: "360 ÷ 6 = 60 liters per hour."
      }
    ]
  },
  {
    ageGroup: "25+",
    category: "real-challenge",
    setId: 104,
    questions: [
      {
        id: "r4-1",
        question: "A farmer borrows ₹10,000 at 8% simple interest for 2 years. What is the total interest?",
        options: ["₹1,200", "₹1,400", "₹1,600", "₹1,800"],
        answer: "₹1,600",
        explanation: "Simple interest = 10,000 × 8 × 2 / 100 = ₹1,600."
      },
      {
        id: "r4-2",
        question: "A family earns ₹25,000 and spends ₹18,000. How much remains for savings or emergencies?",
        options: ["₹5,000", "₹6,000", "₹7,000", "₹8,000"],
        answer: "₹7,000",
        explanation: "₹25,000 - ₹18,000 = ₹7,000."
      },
      {
        id: "r4-3",
        question: "Which habit best supports long-term health for a working adult?",
        options: ["Skipping meals", "Regular exercise and balanced food", "Overworking daily", "Ignoring sleep"],
        answer: "Regular exercise and balanced food",
        explanation: "Healthy habits improve energy, immunity, and long-term strength."
      },
      {
        id: "r4-4",
        question: "A village shop sells 40 kg rice at ₹30 per kg. What is the total revenue?",
        options: ["₹1,000", "₹1,100", "₹1,200", "₹1,300"],
        answer: "₹1,200",
        explanation: "40 × ₹30 = ₹1,200."
      },
      {
        id: "r4-5",
        question: "Which farming practice is best for improving soil health over time?",
        options: ["Burning crop residue", "Crop rotation and compost", "Leaving soil bare", "Using only one crop each year"],
        answer: "Crop rotation and compost",
        explanation: "These practices improve fertility and keep soil productive."
      },
      {
        id: "r4-6",
        question: "A pump runs for 3 hours and uses 18 units of electricity. What is the usage per hour?",
        options: ["4 units/hour", "5 units/hour", "6 units/hour", "7 units/hour"],
        answer: "6 units/hour",
        explanation: "18 ÷ 3 = 6 units per hour."
      },
      {
        id: "r4-7",
        question: "What is the main benefit of saving a part of monthly income?",
        options: ["It creates immediate debt", "It helps during emergencies", "It removes all financial planning", "It increases spending without limits"],
        answer: "It helps during emergencies",
        explanation: "Savings create a safety cushion for medical, farming, and family needs."
      },
      {
        id: "r4-8",
        question: "If a tank holds 500 liters and is 80% full, how much water is in it?",
        options: ["300 liters", "350 liters", "400 liters", "450 liters"],
        answer: "400 liters",
        explanation: "80% of 500 = 0.8 × 500 = 400 liters."
      },
      {
        id: "r4-9",
        question: "Which communication skill is most useful in resolving a village dispute?",
        options: ["Silence", "Listening carefully and speaking respectfully", "Blame shifting", "Avoiding dialogue"],
        answer: "Listening carefully and speaking respectfully",
        explanation: "Respectful communication helps understand the issue and find a fair solution."
      },
      {
        id: "r4-10",
        question: "A small business makes ₹12,000 in profit, and the owner wants to invest 25% back into the business. How much is invested?",
        options: ["₹2,000", "₹2,500", "₹3,000", "₹3,500"],
        answer: "₹3,000",
        explanation: "25% of ₹12,000 = ₹3,000."
      },
      {
        id: "r4-11",
        question: "Which action best helps reduce water waste in daily life?",
        options: ["Keep taps leaking", "Repair leaks and close taps promptly", "Wash clothes under running water every time", "Use extra water for cleaning"],
        answer: "Repair leaks and close taps promptly",
        explanation: "Fixing leaks and conserving water reduces waste significantly."
      },
      {
        id: "r4-12",
        question: "A farmer harvests 240 kg of millet from 3 equal plots. What is the yield per plot?",
        options: ["70 kg", "75 kg", "80 kg", "85 kg"],
        answer: "80 kg",
        explanation: "240 ÷ 3 = 80 kg per plot."
      },
      {
        id: "r4-13",
        question: "What is the main purpose of a village committee meeting?",
        options: ["To avoid decisions", "To discuss problems and plan solutions", "To increase confusion", "To stop community work"],
        answer: "To discuss problems and plan solutions",
        explanation: "Effective meetings help communities solve issues and improve shared welfare."
      },
      {
        id: "r4-14",
        question: "If a person saves ₹2,000 every month for 6 months, how much has been saved?",
        options: ["₹10,000", "₹11,000", "₹12,000", "₹13,000"],
        answer: "₹12,000",
        explanation: "₹2,000 × 6 = ₹12,000."
      },
      {
        id: "r4-15",
        question: "A shopkeeper gives a 15% discount on an item priced ₹800. What is the discount amount?",
        options: ["₹100", "₹110", "₹120", "₹130"],
        answer: "₹120",
        explanation: "15% of ₹800 = ₹120."
      },
      {
        id: "r4-16",
        question: "Which practice most supports community health in a village?",
        options: ["Burning garbage beside homes", "Proper waste disposal and hygiene", "Leaving stagnant water open", "Ignoring sanitation"],
        answer: "Proper waste disposal and hygiene",
        explanation: "Good hygiene and waste management reduce disease and keep the community healthier."
      },
      {
        id: "r4-17",
        question: "If one well can supply 180 liters in 30 minutes, how much can it supply in one hour?",
        options: ["300 liters", "360 liters", "420 liters", "500 liters"],
        answer: "360 liters",
        explanation: "Double the time means double the water: 180 × 2 = 360 liters."
      },
      {
        id: "r4-18",
        question: "A small business spends ₹5,000 on materials and earns ₹8,000. What is the profit?",
        options: ["₹2,000", "₹2,500", "₹3,000", "₹3,500"],
        answer: "₹3,000",
        explanation: "Profit = income - cost = ₹8,000 - ₹5,000 = ₹3,000."
      },
      {
        id: "r4-19",
        question: "Which is the best approach to handle a sudden financial emergency at home?",
        options: ["Borrow without planning", "Use an emergency fund and plan repayments", "Ignore the problem", "Spend all savings instantly"],
        answer: "Use an emergency fund and plan repayments",
        explanation: "A planned emergency response reduces panic and financial stress."
      },
      {
        id: "r4-20",
        question: "If a village cooperative wants to improve income without increasing costs too much, the best step is to:",
        options: ["Stop all cooperation", "Improve skills, reduce waste, and sell better", "Ignore market demand", "Work without planning"],
        answer: "Improve skills, reduce waste, and sell better",
        explanation: "Efficiency and better market strategy improve income while controlling costs."
      }
    ]
  }
];
