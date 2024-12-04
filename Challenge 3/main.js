"use strict";
import fs from 'fs';

function organizeInventory(inventory) {
  let result = {};

  inventory.forEach((item) => {
    const {name, quantity, category} = {...item};
    result[category] ??= {};
    result[category][name] ??= 0
    result[category][name] += quantity;
  });

  return result;
}

function obtainArg() {
  const filePath = process.argv[2];
  let arg = {};
  try {
      arg = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
      console.error("Error reading or parsing:", error.message);
  }

  return arg;
}

console.log(organizeInventory(obtainArg()));
