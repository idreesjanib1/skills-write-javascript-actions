const getObjects = require("./object");

const core = require("@actions/core");

async function run() {
  const object = await getObjects();
  console.log(object);
  core.setOutput("objects-output", object);
}

run();
