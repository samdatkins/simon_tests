const { assert } = require("console");
const { describe } = require("yargs");
const { addName, multiplyString } = require("./printer");

it("test add name", () => {
  const t = addName("test", "name");
  expect(t === "test name").toBeTruthy();
});

it("test multiply string", () => {
  const t = multiplyString("test", 3);
  expect(t === "testtesttest").toBeTruthy();
});
