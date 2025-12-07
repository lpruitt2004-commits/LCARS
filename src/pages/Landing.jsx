import React, { useState } from "react";
import Modal from "../components/Modal";
import * as articleData from "../articles";
import Article from "../components/Article";

const suggestedArticles = Object.values(articleData);

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
        {openArticle && <Article {...openArticle} />}
      </Modal>
    </div>
  );
};

export default Landing;
