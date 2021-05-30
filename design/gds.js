// Gimbalabs Design System
const spacing = require("./spacing");
const colors = require("./colors");
const fontSize = require("./fonts");

const atoms = {
  maxWidth: (theme) => theme("spacing"),
  height: (theme) => theme("spacing"),
  minHeight: (theme) => theme("spacing"),
  maxHeight: (theme) => theme("spacing"),
};

const extend = { colors };

const gds = {
  theme: {
    spacing,
    fontSize,
    ...atoms,
  },
  extend,
};

module.exports = gds;
