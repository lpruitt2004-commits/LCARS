import React from "react";
import { Link } from "react-router-dom";

const suggestedArticles = [
  { id: "warp-drive", title: "Warp Drive" },
  { id: "holodeck", title: "Holodeck" },
  { id: "prime-directive", title: "Prime Directive" },
];

const Landing = () => (
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
            <Link to={`/article/${article.id}`} className="lcars-article-link">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Landing;
