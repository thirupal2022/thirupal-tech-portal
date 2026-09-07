export interface QuizQuestion {
  id: string | number;
  question: string;
  options: string[];
  answer: string; // store exact option value
  explanation?: string;
}

export interface QuizSet {
  ageGroup: string; // e.g. "10-14"
  category: string; // e.g. "general-knowledge"
  setId: number;
  questions: QuizQuestion[];
}

export const QUIZ_DATA: QuizSet[] = [
  {
    ageGroup: "10-14",
    category: "general-knowledge",
    setId: 1,
    questions: [
      {
        id: 1,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        explanation: "Mars appears red due to iron oxide (rust) on its surface."
      },
      {
        id: 2,
        question: "Which festival celebrates the victory of good over evil and features diyas?",
        options: ["Holi", "Diwali", "Pongal", "Navratri"],
        answer: "Diwali",
        explanation: "Diwali is the festival of lights celebrated across India."
      }
    ]
  },
  {
    ageGroup: "15-23",
    category: "mind-quest",
    setId: 1,
    questions: [
      {
        id: 1,
        question: "If 3 apples and 2 oranges cost 50, and 2 apples and 3 oranges cost 46, what is the cost of one apple?",
        options: ["6", "7", "8", "9"],
        answer: "8",
        explanation: "Solve the 2x2 linear system to find apple=8."
      }
    ]
  }
];

export default QUIZ_DATA;
