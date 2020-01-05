import React from 'react';
import logo from './logo.svg';
import './App.css';
// Myimports
import TMDB from './TMDB';
import FilmListing from './components/film-list/FilmListing';

function App() {
  return (
    <div className="film-library">
      <FilmListing
      films={TMDB.films} />
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
      </div>
  </div>
  );
}

export default App;
