/* asenkron yapi oldugu icin buradan bir data cikisi yapmak lazim bu yuzden coolback yapiyoruz */
const searchShows = (query, cb) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((resp) => resp.json())
      .then((data) => {
        cb(data);
      });
  };
  const getShowDetails = (id, cb) => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        cb(data);
      });
  };
  export { searchShows, getShowDetails };