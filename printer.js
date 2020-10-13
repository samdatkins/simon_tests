function addName(string, name) {
  return string + " " + name;
}

function multiplyString(string, count) {
  return [...Array(count).keys()].map((i) => string).join("");
}

module.exports = { addName, multiplyString };
