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
        question: "Which animal can swim and also bark?",
        options: ["Dog", "Duck", "Lion", "Cat"],
        answer: "Dog",
        explanation: "Dogs are friendly animals and many of them love to swim and play in water."
      },
      {
        id: 2,
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "There are seven days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday."
      },
      {
        id: 3,
        question: "Which color do you get when you mix blue and yellow?",
        options: ["Orange", "Green", "Purple", "Pink"],
        answer: "Green",
        explanation: "Blue and yellow combine to make green."
      },
      {
        id: 4,
        question: "Which planet do we live on?",
        options: ["Mars", "Earth", "Venus", "Jupiter"],
        answer: "Earth",
        explanation: "Earth is the planet where humans, animals, and plants live."
      },
      {
        id: 5,
        question: "Which is the biggest animal on Earth?",
        options: ["Elephant", "Blue whale", "Giraffe", "Dinosaur"],
        answer: "Blue whale",
        explanation: "The blue whale is the largest animal known to live on Earth."
      },
      {
        id: 6,
        question: "Which fruit is yellow and often shaped like a crescent?",
        options: ["Banana", "Apple", "Orange", "Mango"],
        answer: "Banana",
        explanation: "Bananas are usually yellow when ripe and are soft and sweet to eat."
      },
      {
        id: 7,
        question: "What do plants need to grow?",
        options: ["Sunlight and water", "Sand and smoke", "Plastic and dust", "Books and shoes"],
        answer: "Sunlight and water",
        explanation: "Plants need sunlight and water to make food and grow healthy."
      },
      {
        id: 8,
        question: "Who teaches students in a school?",
        options: ["Doctor", "Farmer", "Teacher", "Pilot"],
        answer: "Teacher",
        explanation: "A teacher helps students learn new things and build skills."
      },
      {
        id: 9,
        question: "Which shape has three sides?",
        options: ["Circle", "Triangle", "Square", "Rectangle"],
        answer: "Triangle",
        explanation: "A triangle has exactly three sides and three corners."
      },
      {
        id: 10,
        question: "What do we use to tell time?",
        options: ["Clock", "Spoon", "Book", "Pencil"],
        answer: "Clock",
        explanation: "A clock helps us know the time during the day and night."
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
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        explanation: "Mars looks red because iron-rich dust gives its surface a rusty color."
      },
      {
        id: 2,
        question: "Which festival is known as the festival of lights in India?",
        options: ["Holi", "Diwali", "Pongal", "Navratri"],
        answer: "Diwali",
        explanation: "Diwali is celebrated with lamps, sweets, and prayers to mark the victory of light over darkness."
      },
      {
        id: 3,
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
        answer: "New Delhi",
        explanation: "New Delhi is the capital city and the seat of the central government."
      },
      {
        id: 4,
        question: "Which force pulls objects toward the Earth?",
        options: ["Magnetism", "Gravity", "Friction", "Sound"],
        answer: "Gravity",
        explanation: "Gravity is the force that pulls us and objects toward Earth."
      },
      {
        id: 5,
        question: "Which organ helps us breathe?",
        options: ["Heart", "Lungs", "Brain", "Kidneys"],
        answer: "Lungs",
        explanation: "The lungs take in oxygen and release carbon dioxide while breathing."
      },
      {
        id: 6,
        question: "Which gas do plants absorb from the air?",
        options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
        answer: "Carbon dioxide",
        explanation: "Plants absorb carbon dioxide during photosynthesis and make oxygen."
      },
      {
        id: 7,
        question: "Which part of a plant absorbs water from the soil?",
        options: ["Flower", "Stem", "Roots", "Leaves"],
        answer: "Roots",
        explanation: "Roots anchor the plant and absorb water and minerals from the soil."
      },
      {
        id: 8,
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: "6",
        explanation: "A hexagon is a six-sided polygon."
      },
      {
        id: 9,
        question: "Which of these is a mammal?",
        options: ["Frog", "Shark", "Dolphin", "Crocodile"],
        answer: "Dolphin",
        explanation: "Dolphins are mammals because they breathe air and feed milk to their young."
      },
      {
        id: 10,
        question: "The Sun rises in the _______.",
        options: ["West", "North", "East", "South"],
        answer: "East",
        explanation: "The Sun appears to rise in the east and set in the west."
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
        question: "If 3 apples and 2 oranges cost 50, and 2 apples and 3 oranges cost 46, what is the cost of one apple?",
        options: ["6", "7", "8", "9"],
        answer: "8",
        explanation: "Solving the system gives apple = 8 and orange = 6."
      },
      {
        id: 2,
        question: "Which of these is a renewable source of energy?",
        options: ["Coal", "Natural gas", "Solar energy", "Petrol"],
        answer: "Solar energy",
        explanation: "Solar energy is renewable because it comes from the Sun and is naturally replenished."
      },
      {
        id: 3,
        question: "Which language is primarily used to structure web pages?",
        options: ["Python", "Java", "HTML", "MySQL"],
        answer: "HTML",
        explanation: "HTML defines the structure and content of web pages, while CSS and JavaScript add styling and interactivity."
      },
      {
        id: 4,
        question: "What is the value of 12²?",
        options: ["122", "144", "124", "132"],
        answer: "144",
        explanation: "12 × 12 = 144."
      },
      {
        id: 5,
        question: "Which of these is the biggest continent?",
        options: ["Europe", "Asia", "Africa", "North America"],
        answer: "Asia",
        explanation: "Asia is the largest continent by both area and population."
      },
      {
        id: 6,
        question: "What is the main purpose of CSS in web design?",
        options: ["To store data", "To style web pages", "To run a server", "To draw database tables"],
        answer: "To style web pages",
        explanation: "CSS controls layout, colors, spacing, and visual presentation of a page."
      },
      {
        id: 7,
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
        explanation: "2 is the smallest prime number because it has exactly two factors: 1 and 2."
      },
      {
        id: 8,
        question: "Which of these is a form of government by the people?",
        options: ["Monarchy", "Democracy", "Dictatorship", "Oligarchy"],
        answer: "Democracy",
        explanation: "Democracy means government by the people, often through voting."
      },
      {
        id: 9,
        question: "Which part of the body pumps blood?",
        options: ["Brain", "Lungs", "Kidneys", "Heart"],
        answer: "Heart",
        explanation: "The heart is the muscular organ that pumps blood through the body."
      },
      {
        id: 10,
        question: "If a train travels 60 km in 1 hour, how far does it travel in 3 hours?",
        options: ["120 km", "180 km", "200 km", "240 km"],
        answer: "180 km",
        explanation: "60 × 3 = 180 kilometers."
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
        question: "Which habit is most effective for long-term mental well-being?",
        options: ["Skipping sleep", "Regular reflection", "Constant multitasking", "Avoiding breaks"],
        answer: "Regular reflection",
        explanation: "Reflection and rest help reduce stress and improve clarity."
      },
      {
        id: 2,
        question: "Which of the following best supports adaptability at work?",
        options: ["Avoiding change", "Learning continuously", "Ignoring feedback", "Working alone always"],
        answer: "Learning continuously",
        explanation: "Continuous learning helps you respond better to change and new challenges."
      },
      {
        id: 3,
        question: "What is the most effective way to make good decisions under pressure?",
        options: ["Act instantly", "Pause and evaluate", "Ignore facts", "Follow everyone else"],
        answer: "Pause and evaluate",
        explanation: "Taking a short pause helps reduce impulsive errors and improves judgment."
      },
      {
        id: 4,
        question: "Which habit most strengthens personal productivity?",
        options: ["Procrastinating", "Setting clear priorities", "Overworking daily", "Avoiding planning"],
        answer: "Setting clear priorities",
        explanation: "Clear priorities help direct effort toward what matters most."
      },
      {
        id: 5,
        question: "Which of these improves emotional resilience?",
        options: ["Suppressing feelings", "Regular self-care", "Avoiding conversations", "Ignoring stress"],
        answer: "Regular self-care",
        explanation: "Self-care, rest, and healthy routines strengthen emotional resilience."
      },
      {
        id: 6,
        question: "What is the main benefit of strong communication in a team?",
        options: ["Confusion", "Reduced collaboration", "Clearer goals", "Longer delays"],
        answer: "Clearer goals",
        explanation: "Good communication keeps people aligned and reduces misunderstandings."
      },
      {
        id: 7,
        question: "Which practice helps maintain good physical health?",
        options: ["No exercise", "Balanced nutrition and movement", "Skipping meals", "Staying sedentary"],
        answer: "Balanced nutrition and movement",
        explanation: "Healthy food and movement support energy, strength, and long-term wellness."
      },
      {
        id: 8,
        question: "What does financial planning help you do?",
        options: ["Increase confusion", "Avoid unnecessary stress", "Ignore future needs", "Spend without limits"],
        answer: "Avoid unnecessary stress",
        explanation: "Planning helps you manage risk and make more informed long-term choices."
      },
      {
        id: 9,
        question: "Which trait is most valuable in leadership?",
        options: ["Arrogance", "Empathy", "Indifference", "Silence"],
        answer: "Empathy",
        explanation: "Empathy helps leaders understand people, build trust, and solve problems effectively."
      },
      {
        id: 10,
        question: "Which action best supports long-term success in life and work?",
        options: ["Avoiding challenges", "Learning and improving regularly", "Following no plan", "Doing everything alone"],
        answer: "Learning and improving regularly",
        explanation: "Consistent growth and learning are core drivers of long-term success."
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
        question: "Which of these animals is known for long migrations over the ocean?",
        options: ["Shark", "Whale", "Penguin", "Dolphin"],
        answer: "Whale",
        explanation: "Many whale species migrate long distances between feeding and breeding grounds."
      },
      {
        id: "r1-2",
        question: "What helps plants make food using sunlight?",
        options: ["Photosynthesis", "Digestion", "Evaporation", "Condensation"],
        answer: "Photosynthesis",
        explanation: "Photosynthesis is the process plants use to convert sunlight into energy."
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
        question: "Which gas do plants use to make food?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        answer: "Carbon dioxide",
        explanation: "Plants take in carbon dioxide during photosynthesis to produce sugars."
      },
      {
        id: "r2-2",
        question: "Which planet in our solar system is the largest?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter",
        explanation: "Jupiter is the largest planet in the solar system by mass and volume."
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
        question: "If 2x + 3 = 11, what is x?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "2x + 3 = 11 -> 2x = 8 -> x = 4."
      },
      {
        id: "r3-2",
        question: "Which language is primarily used for styling web pages?",
        options: ["JavaScript", "HTML", "CSS", "Python"],
        answer: "CSS",
        explanation: "CSS controls the presentation and layout of HTML documents."
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
        question: "Which practice supports long-term mental well-being?",
        options: ["Chronic stress", "Regular rest", "Overworking", "Isolation"],
        answer: "Regular rest",
        explanation: "Regular rest and self-care support mental health and resilience."
      },
      {
        id: "r4-2",
        question: "What is a key benefit of clear communication in teams?",
        options: ["Confusion", "Alignment", "Delay", "Silence"],
        answer: "Alignment",
        explanation: "Clear communication helps team members align on goals and reduces misunderstandings."
      }
    ]
  }
];
