import React, { useState } from "react";

// Definir el tipo de datos para una pregunta
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
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitAnswer(userAnswer); // Llama a la función de arriba para verificar la respuesta
    setUserAnswer(""); // Limpia el input después de enviar
  };

  return (
    <div className="quiz-form">
      <h2>{question.description}</h2>
      <img src={question.image} alt={question.description} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Escribe tu respuesta"
          required
        />
        <button type="submit">Verificar</button>
      </form>
    </div>
  );
};

export default QuizForm;
