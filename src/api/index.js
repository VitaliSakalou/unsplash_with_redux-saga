const KEY =
  "?client_id=2eec362a2d06ca3bcf7f35cb68141bbe1a14bb9bc9797398cb7c3f560dbc017e";
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages };
