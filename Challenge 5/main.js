"use strict";
import fs from 'fs';

function organizeShoes(shoes) {
  let result = [];
  const organizedShoes = {};

  shoes.forEach(({type, size}) => {
    organizedShoes[size] ??= {};
    organizedShoes[size]["R"] ??= 0;
    organizedShoes[size]["I"] ??= 0;
    organizedShoes[size][type]++;
  });

  for (const [key, {I, R}] of Object.entries(organizedShoes)) {
    const pairs = Math.min(R, I);
    result = [...result, ...Array(pairs).fill(+key)];
  }

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

console.log(organizeShoes(obtainArg()));
