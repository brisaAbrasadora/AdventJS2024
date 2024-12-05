"use strict";
import fs from 'fs';

function organizeShoes(shoes) {
  let result = [];
  const organizedShoes = {};

  for(const {type, size} of shoes) {
    organizedShoes[size] ??= {
      'R': 0,
      'I': 0,
    };
    organizedShoes[size][type]++;
  }

  for (const [key, {I, R}] of Object.entries(organizedShoes)) {
    const pairs = Math.min(R, I);

    for(let i = 0; i < pairs; i++) {
      result.push(+key);
    }
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
