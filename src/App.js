import "./App.css";
import FlashCardList from "./FlashCardList";
import { useState } from "react";
//Build flashcard quiz with react

function App() {
  const SAMPLE_FLASHCARDS = [
    {
      id: 1,
      question: "What is 5*7",
      answer: "35",
      options: ["10, 24, 35, 45"],
    },
    {
      id: 2,
      question: "What is 7*7",
      answer: "49",
      options: ["10, 49, 35, 45"],
    },
    {
      id: 3,
      question: "What is 4*9",
      answer: "36",
      options: ["36, 24, 35, 45"],
    },
  ];


  const [flashCards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div className="App">
      <FlashCardList flashCards={flashCards} />
    </div>
  );
}

export default App;
