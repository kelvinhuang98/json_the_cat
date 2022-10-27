const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    if (error) {
      callback(`Error: ${error}`, null);
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Unable to find ${breedName} in the database`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
