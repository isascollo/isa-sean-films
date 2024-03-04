import React, { useState } from "react";
import styles from "./Header.module.css";
import Login from "../Login/Login";
import { useAuth } from "../../context/AuthContext";
import Logout from "../Icons/Logout";

function Header() {
  const { isAdmin, logout } = useAuth();
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    if (!isAdmin) {
      setShowPopup(!showPopup);
    }
  };

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.TopBar}>
        {isAdmin && (
          <div className={styles.Admin}>
            <p>Hi, Sean</p>
            <button className={styles.Logout} onClick={logout}>
              <Logout />
            </button>
          </div>
        )}
      </div>
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
    </div>
  );
}

export default Header;
