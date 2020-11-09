"use strict";

const execAsync = require("../execAsync");

const getDefaultPrinter = () => {
  const parseResult = (output) => (output.split(":")[1] || "").trim();
  return execAsync("lpstat", ["-d"], parseResult);
};

module.exports = getDefaultPrinter;
