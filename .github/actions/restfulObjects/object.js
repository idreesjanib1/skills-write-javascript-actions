const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getObjects() {
  const res = await request(options);
  console.log(res);
  return res.joke;
}

module.exports = getObjects;
