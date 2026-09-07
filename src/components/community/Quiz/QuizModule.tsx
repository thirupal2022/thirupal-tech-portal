import React, { useState } from "react";
import QUIZ_DATA from "../../../data/quizData";
import type { QuizQuestion } from "../../../data/quizData";

const AGE_GROUPS = ["4-9", "10-14", "15-23", "23-45"];

const QuizModule: React.FC = () => {
  const [ageGroup, setAgeGroup] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  function startQuiz() {
    const set = QUIZ_DATA.find((q) => q.ageGroup === ageGroup && q.category === category);
    if (set) {
      setQuestions(set.questions);
      setIndex(0);
      setScore(0);
      setSelected(null);
      setFinished(false);
    }
  }

  function submitAnswer() {
    if (!selected) return;
    const q = questions[index];
    if (selected === q.answer) setScore((s) => s + 1);
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setAgeGroup(undefined);
    setCategory(undefined);
    setQuestions([]);
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  return (
    <section id="quiz" className="mt-8">
      <h3 className="text-lg font-semibold text-amber-900">Quiz Competition</h3>
      {!questions.length && (
        <div className="mt-3 space-y-3">
          <div>
            <label className="text-sm text-amber-700">Select Age Group</label>
            <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} className="ml-2 border rounded p-1">
              <option value="">Choose</option>
              {AGE_GROUPS.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-amber-700">Select Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="ml-2 border rounded p-1">
              <option value="">Choose</option>
              <option value="general-knowledge">General Knowledge</option>
              <option value="funny-things">Funny Things</option>
              <option value="textbook-related">Textbook Related</option>
              <option value="mind-quest">Mind Quest</option>
            </select>
          </div>
          <div>
            <button disabled={!ageGroup || !category} onClick={startQuiz} className="bg-amber-700 text-white px-3 py-1 rounded">Start Quiz</button>
          </div>
        </div>
      )}

      {questions.length > 0 && !finished && (
        <div className="mt-4 bg-white p-4 rounded shadow-sm">
          <div className="font-medium text-amber-900">Question {index + 1} of {questions.length}</div>
          <div className="mt-2 text-amber-700">{questions[index].question}</div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {questions[index].options.map((opt) => (
              <button key={opt} onClick={() => setSelected(opt)} className={`text-left p-2 border rounded ${selected === opt ? 'border-amber-700 bg-amber-50' : 'border-amber-100'}`}>
                {opt}
              </button>
            ))}
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="text-sm text-amber-600">Score: {score}</div>
            <div>
              <button onClick={submitAnswer} className="bg-amber-700 text-white px-3 py-1 rounded" disabled={!selected}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {finished && (
        <div className="mt-4 bg-white p-4 rounded shadow-sm text-center">
          <h4 className="text-amber-900 font-semibold">Excellent! 🎉</h4>
          <p className="mt-2 text-amber-700">You scored {score} out of {questions.length}.</p>
          <div className="mt-3">
            <button onClick={restart} className="bg-amber-700 text-white px-3 py-1 rounded">Restart</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuizModule;
