import React from "react";
import { Tooltip, Chip } from "@mui/material";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ data, type }) {
  function getCard(type) {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link href={`album/${slug}`}>
              <div className="wrapper">
                <div className="card">
                  <img src={image} alt="album-image" loading="lazy" />
                  <div className="banner">
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className="chip"
                    />
                  </div>
                </div>
                <div className="title">
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }

      case "song": {
        const { image, likes, title } = data;
        return (
          <div className="wrapper">
            <div className="card">
              <img src={image} alt="song" loading="lazy" />
              <div className="banner">
                <Chip label={`${likes} likes`} size="small" className="chip" />
              </div>
            </div>
            <div className="title">
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default: {
        return <></>;
      }
    }
  }

  return getCard(type);
}

export default Card;
