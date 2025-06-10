import React from "react";

// Tipo para una respuesta
interface Answer {
  description: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  score: number;
}

interface QuizResultsProps {
  answers: Answer[];
}

const QuizResults: React.FC<QuizResultsProps> = ({ answers }) => {
  const totalScore = answers.reduce((acc, ans) => acc + ans.score, 0);
  
  return (
    <div  
    style={{
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    margin: "20px 0",
   }}
    >
      <h2 
      style={{
        color: "#2c3e50",
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: 600,
        marginBottom: "20px",
      }}
      >Resultados</h2>
      {answers.map((answer, index) => (
        <div
          key={index}
          style={{
            backgroundColor: answer.isCorrect ? "#d4edda" : "#f8d7da",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p><strong>Descripción:</strong> {answer.description}</p>
          <p><strong>Respuesta del Usuario:</strong> {answer.userAnswer}</p>
          <p><strong>Respuesta Correcta:</strong> {answer.correctAnswer}</p>
          <p><strong>Puntos:</strong> {answer.score}</p>
        </div>
      ))}
      
      <h3 style={{
        backgroundColor: "#f0f4f8",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "1.5rem",
        marginTop: "30px",
        fontWeight: 600,
      }}
      >Nota Total: {totalScore} / {answers.length * 5}</h3>
    </div>
  );
};

export default QuizResults;
