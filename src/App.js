import React, { useState } from "react";
import "./styles.css";

const TedDB = {
  code: [
    {
      title: "Don't Just Learn To Code, Learn To Create -Justin Richards",
      rating: "5/5"
    },
    {
      title: "Learning to Code is Not Just for Coders -Ali Partovi",
      rating: "3/5"
    }
  ],
  business: [
    {
      title: "The Power of an Entrepreneurial Mindset -Bill Roche",
      rating: "5/5"
    },
    {
      title: "Entrepreneurship As A State Of Mind -Mr. Ankur Warikoo",
      rating: "5/5"
    }
  ],
  design: [
    {
      title: "The first secret of great design -Tony Fadell",
      rating: "5/5"
    },
    {
      title: "Design for All 5 Senses | Jinsop Lee",
      rating: "3/5"
    }
  ]
};
var tedTalk = Object.keys(TedDB);

export default function App() {
  const [selectGenre, setGenre] = useState("code");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🏆 Ted Talks</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite Ted Talk. Select a genre to get started
      </p>
      <div>
        {tedTalk.map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#fffff",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid ",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {TedDB[selectGenre].map((talk) => (
            <li
              key={talk.title}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger", marginBottom: "0.5rem" }}>
                {talk.title}
              </div>
              <div style={{ fontSize: "medium" }}>{talk.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
