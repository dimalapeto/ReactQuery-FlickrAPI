const getPhotos = (page = 1, text) =>
  fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${text}&sort=interestingness-desc&safe_search=1&content_types=0&per_page=50&page=${page}&format=json&nojsoncallback=1
    `
  ).then((res) => res.json());

export const searchPhotos = {
  queryKey: 'searchPhotosData',
  getData: getPhotos,
};
