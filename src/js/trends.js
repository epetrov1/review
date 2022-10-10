import getData from './fetch.js';
import addElements from './addGifs.js';

const url = "https://api.giphy.com/v1/gifs/trending?api_key=YyVWchJ2VHVNvtLOa5lpMXPFhOGFTb99&limit=20&rating=g";

/**
 *
 * @param {url} url
 */
const trendingGif = (url) =>{
  const data = await getData(url);
  addElements(data.data);
};

export default trendingGif(url);
