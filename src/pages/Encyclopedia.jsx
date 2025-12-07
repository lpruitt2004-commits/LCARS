import React from "react";
import { Link } from "react-router-dom";
import { starTrekArticles, oldEarthArticles } from "../articles";

const Encyclopedia = () => (
  <div className="lcars-encyclopedia">
    <h3>Star Trek Articles</h3>
    <ul>
      {starTrekArticles.map((article) => (
        <li key={article.id}>
          <Link to={`/article/${article.id}`} className="lcars-article-link">
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
    <h3>Old Earth Articles</h3>
    <ul>
      {oldEarthArticles.map((article) => (
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
