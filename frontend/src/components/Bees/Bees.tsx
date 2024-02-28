import React from "react";
import styles from "./Bees.module.css";
import HalfBee from "../Icons/HalfBee";
import Bee from "../Icons/Bee";

interface BeesProps {
  isaRating?: number; // `number` or `undefined`
  seanRating?: number; // `number` or `undefined`
}

const Bees: React.FC<BeesProps> = ({ isaRating, seanRating }) => {
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

  return (
    <div>
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
  );
};

export default Bees;
