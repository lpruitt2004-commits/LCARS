import React from "react";
import { useParams } from "react-router-dom";

const articleData = {
  "warp-drive": {
    title: "Warp Drive",
    content:
      "Warp drive is a form of faster-than-light propulsion in the Star Trek universe, allowing starships to travel vast distances across space.",
  },
  holodeck: {
    title: "Holodeck",
    content:
      "The holodeck is a simulated reality facility aboard starships and starbases, used for training, recreation, and entertainment.",
  },
  "prime-directive": {
    title: "Prime Directive",
    content:
      "The Prime Directive is Starfleet's most important rule: non-interference with the internal development of alien civilizations.",
  },
};

const Article = () => {
  const { id } = useParams();
  const article = articleData[id];

  if (!article) {
    return <div className="lcars-article">Article not found.</div>;
  }

  return (
    <div className="lcars-article">
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
