import React from 'react';
import { Link } from "react-router-dom";
import './style.css'; 

const getCharacters = (listURL) => {} 
const Headlines = (props) => (
  props.listFilms.map((art,k) => 
    <div key={k} className="articles">
      <img src="./images/star-wors.gif" className="articles-image"/>
      <div className="articles-content">
        <h3>{art.title}</h3>
        <p> Director: {art.director}</p>
        <p> Episodio: {art.episode_id}</p>
        <p> Personajes:  <Link to={`/character/${art.filmId}`}>{art.characters}</Link> </p>
      </div>
    </div>
  )
);

export default Headlines;