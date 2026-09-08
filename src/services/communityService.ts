import FESTIVALS from "../data/festivals";
import QUIZ_DATA, { REAL_QUIZ_DATA } from "../data/quizData";
import type { Festival } from "../data/festivals";
import type { QuizSet } from "../data/quizData";

export const communityService = {
  async getFestivals(): Promise<Festival[]> {
    // mock async
    return new Promise((res) => setTimeout(() => res(FESTIVALS), 200));
  },
  async getFestivalById(id: string): Promise<Festival | undefined> {
    return new Promise((res) => setTimeout(() => res(FESTIVALS.find((f) => f.id === id)), 150));
  },
  async getQuizByAgeGroup(ageGroup: string): Promise<QuizSet[]> {
    return new Promise((res) => setTimeout(() => res(QUIZ_DATA.filter((q) => q.ageGroup === ageGroup)), 150));
  },
  async getRealQuizByAgeGroup(ageGroup: string): Promise<QuizSet[]> {
    return new Promise((res) => setTimeout(() => res(REAL_QUIZ_DATA.filter((q) => q.ageGroup === ageGroup)), 150));
  },
  async getQuizGroups(): Promise<string[]> {
    return new Promise((res) => setTimeout(() => res([...new Set(QUIZ_DATA.map((item) => item.ageGroup))]), 80));
  }
};

export default communityService;
