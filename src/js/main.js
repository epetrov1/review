import trendingGif from './trends.js';
import searchGif from './search.js';


document.getElementById('trends').addEventListener('click', trendingGif);
document.getElementById('home').addEventListener('click', function() {
  document.getElementById('container').remove();
});


document.getElementById('data-search').addEventListener('input', function() {
  document.querySelectorAll('img').forEach((el) => el.style.display='none');

  searchGif;
});

