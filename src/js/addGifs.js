/**
 *
 * @param {array} arr
 */
const addElements = (arr) => {
  arr.forEach((elem) => {
    const img = document.createElement('img');
    // let buttonLike = document.createElement('button');
    // let buttonDislike = document.createElement('button');
    img.src = elem.images.fixed_height.url;
    img.alt = elem.title;
    img.width = 150;
    img.height = 150;
    img.loop = 'infinite';
    document.getElementById('container').appendChild(img);
  });
};

export default addElements;
