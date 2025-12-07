import React from "react";
import "../lcars.css";

const fallbackImg =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

const Article = ({ title, image, short, long }) => {
  const [imgSrc, setImgSrc] = React.useState(image);
  return (
    <div className="lcars-article-panel">
      <h2 className="lcars-article-title">{title}</h2>
      {imgSrc && (
        <div className="lcars-article-image-wrap">
          <img
            src={imgSrc}
            alt={title}
            className="lcars-article-image"
            onError={() => {
              setImgSrc(fallbackImg);
              // eslint-disable-next-line no-console
              console.error("Image failed to load:", image);
            }}
          />
        </div>
      )}
      <p className="lcars-article-short">{short}</p>
      <div className="lcars-article-long">{long}</div>
    </div>
  );
};

export default Article;
