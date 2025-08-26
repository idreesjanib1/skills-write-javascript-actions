const getObjects = require("./object");

async function run() {
  const object = await getObjects();
  console.log(object);
  core.setOutput("objects-output", object);
}

run();