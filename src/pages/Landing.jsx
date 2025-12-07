import React, { useState } from "react";
import Modal from "../components/Modal";
import { starTrekArticles } from "../articles";
import Article from "../components/Article";

const suggestedArticles = starTrekArticles;

const knowledgeQuotes = [
  {
    quote:
      "It does not matter that we will never reach our ultimate goal. The effort yields its own rewards.",
    author: "Lt. Commander Data",
  },
  {
    quote:
      "The acquisition of knowledge is far more valuable than the acquisition of wealth.",
    author: "Captain Jean-Luc Picard",
  },
  {
    quote: "Logic is the beginning of wisdom, not the end.",
    author: "Commander Spock",
  },
  {
    quote: "Knowledge, like understanding, is a journey, not a destination.",
    author: "Commander William Riker",
  },
  {
    quote:
      "Sometimes a feeling is all we humans have to go on. Knowledge can only take us so far.",
    author: "Dr. Beverly Crusher",
  },
  {
    quote:
      "The more you know, the more you realize how much you have yet to learn.",
    author: "Lt. Commander Geordi La Forge",
  },
  {
    quote: "Curiosity is the essence of our existence.",
    author: "Lt. Commander Data",
  },
  {
    quote: "To learn is to expand one's universe.",
    author: "Ensign Wesley Crusher",
  },
  {
    quote: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Counselor Deanna Troi",
  },
  {
    quote:
      "Every question leads to another question. That is the path of knowledge.",
    author: "Lt. Worf",
  },
  {
    quote:
      "The pursuit of knowledge is never-ending. There is always something new to discover.",
    author: "Lt. Commander Geordi La Forge",
  },
  {
    quote:
      "Wisdom comes from experience. Experience is often a result of lack of wisdom.",
    author: "Captain Jean-Luc Picard",
  },
  {
    quote:
      "To seek out new life and new civilizations is to seek new knowledge.",
    author: "Captain James T. Kirk",
  },
];

const Landing = () => {
  const [openId, setOpenId] = useState(null);
  const openArticle = suggestedArticles.find((a) => a.id === openId);
  const [quoteIdx] = useState(() =>
    Math.floor(Math.random() * knowledgeQuotes.length)
  );
  const { quote, author } = knowledgeQuotes[quoteIdx];

  return (
    <div className="lcars-landing">
      <div className="lcars-quote">
        <h1>Welcome to LCARS</h1>
        <blockquote>"{quote}"</blockquote>
        <div className="lcars-quote-author">&mdash; {author}</div>
      </div>
      <div className="lcars-suggestions">
        <h3>Suggested Articles</h3>
        <ul className="lcars-suggestion-list">
          {suggestedArticles.map((article) => (
            <li key={article.id}>
              <button
                className="lcars-pill"
                onClick={() => setOpenId(article.id)}
              >
                {article.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Modal open={!!openArticle} onClose={() => setOpenId(null)}>
        {openArticle && <Article {...openArticle} />}
      </Modal>
    </div>
  );
};

export default Landing;
