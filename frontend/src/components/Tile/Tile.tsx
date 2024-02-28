import React, { useEffect, useState } from "react";
import styles from "./Tile.module.css";
import { MovieReview } from "../../types/types";
import Bees from "../Bees/Bees";

const Tile: React.FC<MovieReview> = ({
  title,
  year,
  image,
  isaRating,
  seanRating,
}) => {
  const [gold, setGold] = useState<boolean>(false);

  useEffect(() => {
    if (seanRating! + isaRating! === 10) {
      setGold(true);
    }
  }, []);

  return (
    <div className={gold ? styles.TileContentGold : styles.TileContent}>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>{title}</h1>
        <h3>{year}</h3>
      </div>
      <img src={image} alt={title} />
      <Bees isaRating={isaRating} seanRating={seanRating} />
    </div>
  );
};

export default Tile;
