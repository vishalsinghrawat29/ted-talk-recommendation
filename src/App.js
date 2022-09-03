import React, { useState } from "react";
import "./styles.css";

const TedDB = {
  code: [
    {
      title: "Don't Just Learn To Code, Learn To Create | Justin Richards",
      link: "https://youtu.be/6rxWc-TNIJI",
      rating: "5/5"
    },
    {
      title: "Learning to Code is Not Just for Coders | Ali Partovi",
      link: "https://youtu.be/MvTSPwftvyo",
      rating: "3/5"
    },
    {
      title: "How I taught myself to code | Litha Soyizwapi ",
      link: "https://youtu.be/nmZR_JsLCfg",
      rating: "4/5"
    }
  ],
  business: [
    {
      title: "The Power of an Entrepreneurial Mindset | Bill Roche",
      link: "https://youtu.be/Ihs4VFZWwn4",
      rating: "5/5"
    },
    {
      title: "Entrepreneurship As A State Of Mind | Mr. Ankur Warikoo",
      link: "https://youtu.be/dgrwlL82T2I",
      rating: "5/5"
    },
    {
      title:
        "Zero Equals One: Creating A Business From Nothing | Riley Csernica",
      link: "https://youtu.be/CzJUCxwz8hk",
      rating: "4/5"
    }
  ],
  design: [
    {
      title: "The first secret of great design | Tony Fadell",
      link: "https://youtu.be/9uOMectkCCs",
      rating: "5/5"
    },
    {
      title: "Design for All 5 Senses | Jinsop Lee",
      link: "https://youtu.be/N6wjC0sxD2o",
      rating: "3/5"
    },
    {
      title: "The power of design | JD Hooge",
      link: "https://youtu.be/6rxWc-TNIJI",
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
      <h1 className="head-text">🏆 Ted Talks</h1>
      <p className="head-sub-text">
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
                padding: "0.8rem",
                border: "1px solid #D1D5DB",
                width: "94%",
                margin: "1.3rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div className="title">{talk.title}</div>
              <div className="ratingText">Rating: {talk.rating}</div>
              <div>
                <a href={talk.link} className="watch-btn">
                  Watch Now
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h4>
          Developed by{" "}
          <a href="https://vishalsinghrawat.netlify.app/">Vishal Singh Rawat</a>
        </h4>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/vishalsinghrawat29">
              Github
            </a>
          </li>
          |
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/vsrawat2906">
              Twitter{" "}
            </a>
          </li>
          |
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/vishalsinghrawat/"
            >
              Linkdin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
