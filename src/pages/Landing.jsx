import React, { useState } from "react";
import Modal from "../components/Modal";

const suggestedArticles = [
  {
    id: "warp-drive",
    title: "Warp Drive",
    content:
      "Warp drive is a form of faster-than-light propulsion in the Star Trek universe, allowing starships to travel vast distances across space.",
  },
  {
    id: "holodeck",
    title: "Holodeck",
    content:
      "The holodeck is a simulated reality facility aboard starships and starbases, used for training, recreation, and entertainment.",
  },
  {
    id: "prime-directive",
    title: "Prime Directive",
    content:
      "The Prime Directive is Starfleet's most important rule: non-interference with the internal development of alien civilizations.",
  },
];

const Landing = () => {
  const [openId, setOpenId] = useState(null);
  const openArticle = suggestedArticles.find((a) => a.id === openId);

  return (
    <div className="lcars-landing">
      <div className="lcars-quote">
        <h1>Welcome to LCARS</h1>
        <blockquote>
          "It does not matter that we will never reach our ultimate goal. The
          effort yields its own rewards"
        </blockquote>
        <div className="lcars-quote-author">— Lt. Commander Data</div>
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
        {openArticle && (
          <div className="lcars-article-modal">
            <h2>{openArticle.title}</h2>
            <p>{openArticle.content}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Landing;
