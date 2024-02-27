import React, {CSSProperties, useEffect, useState} from "react";
import styles from "./Tile.module.css";
import { MovieReview } from "../../types/types";
import Bee from "../Icons/Bee";
import HalfBee from "../Icons/HalfBee";

const Tile: React.FC<MovieReview> = ({
  title,
  year,
  image,
  isaRating,
  seanRating,
  reviewText
}) => {

  const [gold, setGold] = useState<boolean>(false);

  const isaBees = [];
  const seanBees = [];

  for (let i = 0; i < isaRating!; i++) {
    if (isaRating! - i < 1) {
      isaBees.push(<HalfBee />);
    } else {
      isaBees.push(<Bee />);
    }
  }

  for (let i = 0; i < seanRating!; i++) {
    if (seanRating! - i < 1) {
      seanBees.push(<HalfBee />);
    } else {
      seanBees.push(<Bee />);
    }
  }

  useEffect(() => {
    if (seanRating! + isaRating! === 10) {
      setGold(true)
    }
  }, []);

  return (
    <div className={gold ? styles.TileContentGold : styles.TileContent}>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>{title}</h1>
        <h3>{year}</h3>
      </div>
      <img src={image} alt={title} />
      <div className={styles.RatingsContainer}>
        {!!isaRating && (
          <div className={styles.Rating}>
            <h2>Isa</h2>
            <div className={styles.BeeContainer}>{isaBees}</div>
          </div>
        )}
        {!!seanRating && (
          <div className={styles.Rating}>
            <h2>Sean</h2>
            <div className={styles.BeeContainer}>{seanBees}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tile;
