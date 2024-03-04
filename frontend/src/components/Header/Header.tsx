import React, { useState } from "react";
import styles from "./Header.module.css";
import Login from "../Login/Login"; // Import the Popup component

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.HeadingContainer}>
        <h1>isa and</h1>
        <button className={styles.Sean} onClick={togglePopup}>
          sean
        </button>
        {showPopup && <Login onClose={togglePopup} />}
        <h1>films</h1>
      </div>
      <p>things we've watched together😊</p>
    </div>
  );
}

export default Header;
