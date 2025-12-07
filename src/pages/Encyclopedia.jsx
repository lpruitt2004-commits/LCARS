import React from "react";
import { Link } from "react-router-dom";

// Example articles
const articles = [
  { id: "warp-drive", title: "Warp Drive" },
  { id: "holodeck", title: "Holodeck" },
  { id: "prime-directive", title: "Prime Directive" },
];

const Encyclopedia = () => (
  <div className="lcars-encyclopedia">
    <h3>Encyclopedia Articles</h3>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/article/${article.id}`} className="lcars-article-link">
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Encyclopedia;
