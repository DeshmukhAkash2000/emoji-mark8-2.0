import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "smiling",
  "🤔": "thinking",
  "😟": "worrying",
  "👻": "ghost",
  "👽": "alien"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>emoji entepreter</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3 style={{ fontSize: "150%" }}> emojis we know 👇 </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
