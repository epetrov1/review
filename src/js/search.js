import getData from './fetch.js';
import addElements from './addGifs.js';

const searchGif = () => {
  document.getElementById('data-search').addEventListener('click', (e) => {
    e.preventDefault();
    const ApiKey = 'xQfV2SLfeSDlWVR9j0CBiMgJ0g8k0nWb';
    let url = `https://api.giphy.com/v1/gifs/search?&api_key=${ApiKey}&q=`;
    const searchTerm = document.getElementById('data-search').value.trim();
    console.log(searchTerm);
    url = url.concat(searchTerm);
    const numbers = '&limit=10';
    url = url.concat(searchTerm);
    url = url.concat(numbers);
    (async () => {
      const data = await getData(url);
      addElements(data.data);
    })();
  });
};
 
export default searchGif();
