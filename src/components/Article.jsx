import React from "react";
import "../lcars.css";

const Article = ({ title, image, short, long }) => (
  <div className="lcars-article-panel">
    <h2 className="lcars-article-title">{title}</h2>
    {image && (
      <div className="lcars-article-image-wrap">
        <img src={image} alt={title} className="lcars-article-image" />
      </div>
    )}
    <p className="lcars-article-short">{short}</p>
    <div className="lcars-article-long">{long}</div>
  </div>
);

export default Article;
