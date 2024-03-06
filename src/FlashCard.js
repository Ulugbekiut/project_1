import React from "react";
import { useState } from "react";
import "./App.css"
export default function FlashCard({ flashCard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : " "}`}
      onClick={() => setFlip(!flip)}
    >
        <div className="front">{flashCard.question}</div>
        <div className="flashcard-options" >{flashCard.options.map(option=>{
            return <div className="flashcard-options">{option}</div>
        })}</div>
        <div className="back">{flashCard.answer}</div>
  
    </div>
  );
}
