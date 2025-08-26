
const request = require('request-promise');

const options = {

    method:'GET',
    uri:'https://api.restful-api.dev/objects',
    json:true
}

async function getObjects() {
  const res = await request(options);
  console.log(res);
  return res.objects;
}

module.exports = getObjects;