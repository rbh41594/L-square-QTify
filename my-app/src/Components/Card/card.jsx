import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

function Card({ data, type }) {
  function getCard(type) {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={image} alt="album-image" loading="lazy" />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      style={{
                        backgroundColor: "var(--color-black)",
                        color: "var(--color-white)"
                      }}
                    />
                  </div>
                </div>
                <div className={styles.title}>
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
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.title}>
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
