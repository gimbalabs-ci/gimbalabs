const spacing = require("./spacing");
const colors = require("./colors");
const fontSize = require("./fontSize");
const fontFamily = require("./fontFamilies");

const atoms = {
  maxWidth: (theme) => theme("spacing"),
  height: (theme) => theme("spacing"),
  minHeight: (theme) => theme("spacing"),
  maxHeight: (theme) => theme("spacing"),
};

const extend = {
  colors,
};

const gds = {
  theme: {
    spacing,
    fontFamily,
    fontSize,
    ...atoms,
  },
  extend,
};
module.exports = gds;
