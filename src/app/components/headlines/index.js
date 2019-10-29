import React from 'react';
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
        <p> Personajes:  <a target="_blank">{art.characters}</a> </p>
      </div>
    </div>
  )
);

export default Headlines;