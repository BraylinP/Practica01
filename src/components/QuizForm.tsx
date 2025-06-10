import React, { useState } from "react";


interface Question {
  id: number;
  image: string;
  description: string;
  answer: string;
}

interface QuizFormProps {
  question: Question;
  onSubmitAnswer: (answer: string) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ question, onSubmitAnswer }) => {
  const [userAnswer, setUserAnswer] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;
    setUserAnswer(answer);
    onSubmitAnswer(answer); 
  };

  return (
    <div
      className="quiz-form"
      style={{
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        gap: "20px",
          
      }}
    >
      <img
        src={question.image}
        alt={question.description}
        style={{ 
          width: "300px", 
          height: "200px", 
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
         }}
      />

      <div style={{ flex: 1 }}>
        <p style={{ 
          margin: "0 0 10px 0",
          fontWeight: "600",
          fontSize: "1.3rem",
          color: "#333",
          lineHeight: "1.4",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderRadius: "6px",
          boxShadow: "inset 0 0 5px #ddd",
          }}>
            {question.description}
            </p>
      </div>

      <input
        type="text"
        value={userAnswer}
        onChange={handleInputChange}
        placeholder="Escribe tu respuesta"
        required
        style={{
           width: "220px",
           padding: "10px 15px",
           fontSize: "1rem",
           border: "2px solid #ccc",
           borderRadius: "8px",
           backgroundColor: "#f9f9f9",
           transition: "border-color 0.3s ease, box-shadow 0.3s ease",
           outline: "none",
        }}
        onFocus={e => {
          e.currentTarget.style.borderColor = "#007bff";
          e.currentTarget.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)";
          e.currentTarget.style.backgroundColor = "#fff";
        }}
        onBlur={e => {
          e.currentTarget.style.borderColor = "#ccc";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.backgroundColor = "#f9f9f9";
        }}
      />
    </div>
  );
};


export default QuizForm;
