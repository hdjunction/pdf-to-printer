"use strict";

const execAsync = require("../execAsync");

const getPrinters = () => {
  const parseResult = (output) => {
    return output
      .trim()
      .split("\n")
      .reduce((printers, row) => {
        const splitted = row.split(/\s+/);
        const kr = splitted.findIndex((s) => s.startsWith("프린터"));
        const en = splitted.findIndex((s) => s.endsWith("printer"));
        const printer =
          kr !== -1
            ? splitted[kr - 1]
            : en !== -1
            ? splitted[en + 1]
            : undefined;
        if (!!printer) {
          printers.push(printer);
        }
        return printers;
      }, []);
  };
  return execAsync("lpstat", ["-p"], parseResult);
};

module.exports = getPrinters;
