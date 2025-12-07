import React from "react";
import { Link } from "react-router-dom";
import * as articleData from "../articles";

const articles = Object.values(articleData);

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
