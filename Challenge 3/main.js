"use strict";
import fs from 'fs';

function organizeInventory(inventory) {
  let result = {};

  inventory.forEach((item) => {
    const {name, quantity, category} = {...item};
    const s = `{ "${category}" : { "${name}" : ${quantity} } }`;
    const obj = JSON.parse(s);
    const newCategory = !result.hasOwnProperty(category);
    const newItem = !result[category]?.hasOwnProperty(name);

    if(newCategory) {
      result = {...result, ...obj};
    } else if(newItem) {
      result[category] = {...result[category], ...obj[category]};
    } else {
      result[category][name] += obj[category][name];
    }
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
