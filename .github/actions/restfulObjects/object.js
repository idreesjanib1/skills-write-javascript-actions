const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://api.restful-api.dev/objects",
  json: true,
  headers: {
    Accept: "application/json",
  },
};

async function getObjects() {
  const res = await request(options);
  console.log(res);
  debugger;
  return res.objects;
}

module.exports = getObjects;
