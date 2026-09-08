import React, { useEffect, useMemo, useState } from "react";
import type { QuizSet } from "../../../data/quizData";
import { QUIZ_AGE_GROUPS } from "../../../data/quizData";
import { communityService } from "../../../services/communityService";
import { REAL_QUIZ_PIN } from "./constants";

const QuizModule: React.FC = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>(QUIZ_AGE_GROUPS[0]);
  const [quizSet, setQuizSet] = useState<QuizSet | null>(null);
  const [mode, setMode] = useState<"mock" | "real">("mock");
  const [realAuthorized, setRealAuthorized] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [pinError, setPinError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    // If Real mode is selected but not yet authorized, do not load real questions
    if (mode === "real" && !realAuthorized) {
      setQuizSet(null);
      return;
    }

    const fetcher = mode === "real" ? communityService.getRealQuizByAgeGroup : communityService.getQuizByAgeGroup;
    fetcher(selectedAgeGroup).then((sets) => {
      const nextSet = sets[0] ?? null;
      setQuizSet(nextSet);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setUserAnswers({});
      setIsCompleted(false);
    });
  }, [selectedAgeGroup, mode, realAuthorized]);

  const currentQuestion = quizSet?.questions[currentQuestionIndex];

  const progressPercent = useMemo(() => {
    if (!quizSet || !quizSet.questions.length) return 0;
    return ((currentQuestionIndex + (showExplanation ? 1 : 0)) / quizSet.questions.length) * 100;
  }, [currentQuestionIndex, quizSet, showExplanation]);

  const score = useMemo(() => {
    if (!quizSet) return 0;
    return quizSet.questions.reduce((total, question, index) => {
      const answer = userAnswers[index];
      return total + (answer === question.answer ? 1 : 0);
    }, 0);
  }, [quizSet, userAnswers]);

  const resultPercent = quizSet ? Math.round((score / quizSet.questions.length) * 100) : 0;
  const accuracyColor = resultPercent >= 80 ? "#22c55e" : resultPercent >= 50 ? "#f59e0b" : "#ef4444";

  const handleAnswerSelect = (option: string) => {
    if (!currentQuestion || showExplanation) return;
    setSelectedAnswer(option);
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: option }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (!quizSet || !currentQuestion) return;

    if (currentQuestionIndex < quizSet.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      return;
    }

    setIsCompleted(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setUserAnswers({});
    setIsCompleted(false);
  };

  const isCorrect = selectedAnswer === currentQuestion?.answer;

  if (!quizSet) {
    // If Real mode is selected and not yet authorized, show the PIN screen instead
    if (mode === "real" && !realAuthorized) {
      return (
        <div className="rounded-3xl border border-amber-100 bg-white p-6 text-sm text-amber-800">
          <p className="text-lg font-semibold text-slate-900">PIN required</p>
          <p className="mt-2 text-sm text-slate-700">Enter the PIN to access the Real Quiz.</p>

          <div className="mt-4 flex max-w-sm flex-col gap-2">
            <input
              aria-label="Quiz PIN"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              type="password"
              placeholder="Enter PIN"
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
            />
            {pinError && <div className="text-sm text-rose-600">{pinError}</div>}

            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  if (!pinInput) {
                    setPinError("Please enter the PIN to continue.");
                    return;
                  }
                  if (pinInput !== REAL_QUIZ_PIN) {
                    setPinError("Incorrect PIN. Access denied.");
                    return;
                  }
                  setPinError(null);
                  setRealAuthorized(true);
                }}
                className="rounded-full bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Validate PIN
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("mock");
                  setRealAuthorized(false);
                  setPinInput("");
                  setPinError(null);
                }}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm font-medium text-amber-800">
        Loading quiz questions…
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-700">
        Preparing your quiz…
      </div>
    );
  }

  if (isCompleted) {
    const ringStyle = {
      background: `conic-gradient(${accuracyColor} 0 ${resultPercent}%, rgba(148, 163, 184, 0.18) ${resultPercent}% 100%)`
    };

    return (
      <div className="w-full rounded-[28px] border border-amber-100 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Quiz result</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">{selectedAgeGroup} age group</h3>
          </div>
          <button
            type="button"
            onClick={handleRestart}
            className="rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/20"
          >
            Try again
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-5 text-white">
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full" style={ringStyle}>
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-slate-900 text-center">
                <span className="text-3xl font-bold">{resultPercent}%</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-300">Score</span>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-200">
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <span>Correct</span>
                <strong className="text-emerald-300">{score}/{quizSet.questions.length}</strong>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <span>Performance</span>
                <strong className={resultPercent >= 80 ? "text-emerald-300" : resultPercent >= 50 ? "text-amber-300" : "text-rose-300"}>
                  {resultPercent >= 80 ? "Excellent" : resultPercent >= 50 ? "Good" : "Keep learning"}
                </strong>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Answer breakdown</p>
              <div className="space-y-3">
                {quizSet.questions.map((question, index) => {
                  const chosen = userAnswers[index];
                  const isRight = chosen === question.answer;
                  return (
                    <div key={question.id} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${isRight ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
                        {isRight ? "✓" : "✕"}
                      </div>
                      <div className="flex-1 text-sm text-slate-700">
                        <span className="font-medium">Q{index + 1}:</span> {question.question}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Insight</p>
              <p className="mt-2 text-sm text-slate-700">
                {resultPercent >= 80
                  ? "Excellent work! You have a strong grasp of this topic and are ready for the next challenge."
                  : resultPercent >= 50
                    ? "Good effort! A few more rounds will sharpen your knowledge and boost your confidence."
                    : "Nice start. Review the explanations and try another round to build a stronger understanding."}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setMode("mock");
              setRealAuthorized(false);
              setPinInput("");
              setPinError(null);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              mode === "mock"
                ? "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-lg shadow-amber-500/25"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Mock Quiz
          </button>

          <button
            type="button"
            onClick={() => {
              setMode("real");
              // do not authorize automatically; show PIN screen
              setRealAuthorized(false);
              setPinInput("");
              setPinError(null);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              mode === "real"
                ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Start Quiz
          </button>
        </div>

        <div className="ml-3 flex-1">
          {/* keep age group buttons aligned to the right of the mode selector */}
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {QUIZ_AGE_GROUPS.map((ageGroup) => (
          <button
            key={ageGroup}
            type="button"
            onClick={() => setSelectedAgeGroup(ageGroup)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              selectedAgeGroup === ageGroup
                ? "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-lg shadow-amber-500/25"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {ageGroup}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-6">
          {mode === "real" && !realAuthorized ? (
            <div className="rounded-3xl border border-slate-200 bg-amber-50 p-6 text-sm text-amber-800">
              <p className="text-lg font-semibold text-slate-900">PIN required</p>
              <p className="mt-2 text-sm text-slate-700">Enter the PIN to access the Real Quiz.</p>

              <div className="mt-4 flex max-w-sm flex-col gap-2">
                <input
                  aria-label="Quiz PIN"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  type="password"
                  placeholder="Enter PIN"
                  className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                />
                {pinError && <div className="text-sm text-rose-600">{pinError}</div>}

                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      // validate PIN
                      if (!pinInput) {
                        setPinError("Please enter the PIN to continue.");
                        return;
                      }
                      if (pinInput !== REAL_QUIZ_PIN) {
                        setPinError("Incorrect PIN. Access denied.");
                        return;
                      }
                      setPinError(null);
                      setRealAuthorized(true);
                    }}
                    className="rounded-full bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Validate PIN
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      // cancel back to Mock
                      setMode("mock");
                      setRealAuthorized(false);
                      setPinInput("");
                      setPinError(null);
                    }}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Age group</p>
              <h4 className="mt-1 text-xl font-bold text-slate-900">{selectedAgeGroup}</h4>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              {quizSet.category}
            </span>
          </div>

          <div className="mb-5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p className="text-sm font-medium text-slate-500">
            Question {currentQuestionIndex + 1} of {quizSet.questions.length}
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-snug text-slate-900">{currentQuestion.question}</h3>

          <div className="mt-5 grid gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrectOption = option === currentQuestion.answer;
              const revealStyle = showExplanation
                ? isCorrectOption
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                  : isSelected
                    ? "border-rose-400 bg-rose-50 text-rose-700"
                    : "border-slate-200 bg-slate-50 text-slate-600"
                : isSelected
                  ? "border-amber-500 bg-amber-50 text-amber-800"
                  : "border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:bg-amber-50/60";

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${revealStyle}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div
              className={`mt-5 rounded-2xl border p-4 text-sm ${
                isCorrect
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-rose-200 bg-rose-50 text-rose-700"
              }`}
            >
              <p className="font-semibold">{isCorrect ? "Correct!" : "Not quite — keep exploring!"}</p>
              <p className="mt-1">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Build curiosity</span>
            <button
              type="button"
              onClick={handleNextQuestion}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
              disabled={!showExplanation}
            >
              {currentQuestionIndex === quizSet.questions.length - 1 ? "Finish quiz" : "Next question"}
            </button>
          </div>
        </div>

        <div className="rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 p-5 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Why it matters</p>
          <h3 className="mt-2 text-2xl font-bold">Celebrate learning through culture</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="rounded-2xl border border-white/10 bg-white/5 p-3">Fast, playful questions that turn learning into a fun habit.</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-3">A balanced mix of curiosity, creativity, and real-world thinking.</li>
            <li className="rounded-2xl border border-white/10 bg-white/5 p-3">Perfect for community events, skill-building, and family engagement.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizModule;
