const { assert } = require("console");
const { describe } = require("yargs");
const { addName } = require("./printer");

it("test add name", () => {
  const t = addName("test", "name");
  expect(t === "test name").toBeTruthy();
});
