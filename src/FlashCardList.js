import React from "react";
import FlashCard from "./FlashCard";

export default function FlashCardList({ flashCards }) {
  return (
    <div>
      {flashCards.map((flashcard) => {
        return (<FlashCard flashCard={flashcard}  />);
      })}
    </div>
  );
}
