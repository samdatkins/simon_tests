function addName(string, name) {
  return string + " " + name;
}

function multiplyString(string, count) {
  return [...Array(count).keys()].map((i) => string).join("");
}

function untested() {
  return "";
}

module.exports = { addName, multiplyString };
