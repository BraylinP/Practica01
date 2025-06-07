import React, { useState } from "react";
import { questions } from "./data/questions";
import QuizForm from "./components/QuizForm";

// Definir el tipo de datos para las respuestas
interface Answer {
  description: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  score: number;
}

const App: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  // Función para evaluar la respuesta
  const evaluateAnswer = (userAnswer: string, question: typeof questions[0]) => {
    const isCorrect = userAnswer.toLowerCase() === question.answer.toLowerCase();
    const score = isCorrect ? 5 : 0;

    setAnswers([
      ...answers,
      {
        description: question.description,
        userAnswer,
        correctAnswer: question.answer,
        isCorrect,
        score,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Practica de Vocabulario</h1>
      {questions.map((question) => (
        <QuizForm
          key={question.id}
          question={question}
          onSubmitAnswer={(userAnswer) => evaluateAnswer(userAnswer, question)}
        />
      ))}

      {/* Mostrar los resultados */}
      <h2>Resultados</h2>
      {answers.map((answer, index) => (
        <div
          key={index}
          style={{
            backgroundColor: answer.isCorrect ? "#d4edda" : "#f8d7da",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <p>{answer.description}</p>
          <p><strong>Respuesta del Usuario:</strong> {answer.userAnswer}</p>
          <p><strong>Respuesta Correcta:</strong> {answer.correctAnswer}</p>
          <p><strong>Puntos:</strong> {answer.score}</p>
        </div>
      ))}
    </div>
  );
};

export default App;