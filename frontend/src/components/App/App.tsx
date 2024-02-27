import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Review from "../Review/Review";
import Header from "../Header/Header";
import Grid from "../Grid/Grid";

function App() {


  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header/>
        <div className={styles.Content}>
        <Routes>
          <Route path="/" element={<Grid/>} />
          <Route path="/review/:title" element={<Review />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
