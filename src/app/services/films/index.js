import Config from '../../../../config/default.json';

const films = (category = null) => {
  return fetch(`${Config.api.host}${Config.api.basePath}/films?format=json`)
    .then(res => res.json())
    .then(data => data.results.map(d => ({
      title: d.title || '',
      director: d.director || '',
      episode: d.episode_id || '',
      characters: d.characters.length || 0,
      filmId: d.url.slice(-2).replace('/','') || 1,
    })))
    .catch((err) => {
      console.log(err);
    });
};

export default films;