const request = require("request");

let breed = process.argv.slice(2)[0];
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
  }

  const data = JSON.parse(body);
  const catBreed = data[0];

  if (catBreed) {
    console.log(catBreed.description);
  } else {
    console.log(`Unable to find ${breed} in the database`);
  }
});
