import React, { useState } from "react";
import { questions } from "../data/questions";
import QuizForm from "../components/QuizForm";
import QuizResults from "../components/QuizResults";

interface Answer {
  description: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  score: number;
}

const Quizz: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const evaluateAnswer = (userAnswer: string, question: typeof questions[0]) => {
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedCorrectAnswer = question.answer.trim().toLowerCase();
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    const score = isCorrect ? 5 : 0;

    setAnswers((prevAnswers) => {
      const existingIndex = prevAnswers.findIndex(a => a.description === question.description);
      if (existingIndex !== -1) {
        const updated = [...prevAnswers];
        updated[existingIndex] = {
          description: question.description,
          userAnswer,
          correctAnswer: question.answer,
          isCorrect,
          score
        };
        return updated;
      } else {
        return [...prevAnswers, {
          description: question.description,
          userAnswer,
          correctAnswer: question.answer,
          isCorrect,
          score
        }];
      }
    });
  };

  return (
    <div className="container mt-4">
      <p style={{
         fontSize: "1.8rem",
         fontWeight: "700", 
         color: "#2c3e50",
         marginBottom: "1.5rem",
         textAlign: "center",
         textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}>Problema 1: Quiz de preguntas</p>

      {questions.map((question) => (
        <QuizForm
          key={question.id}
          question={question}
          onSubmitAnswer={(userAnswer) => evaluateAnswer(userAnswer, question)}
        />
      ))}

      {answers.length === questions.length && !showResults && (
        <button className="btn btn-primary mt-3" onClick={() => setShowResults(true)}>
          Mostrar resultados
        </button>
      )}

      {showResults && <QuizResults answers={answers} />}
    </div>
  );
};

export default Quizz;