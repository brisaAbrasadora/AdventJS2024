"use strict";
const args = process.argv.slice(2);

function prepareGifts(gifts) {
  const uniqueGifts = new Set(gifts);

  return Array.from(uniqueGifts).sort((a, b) => a - b);
}

console.log(prepareGifts(args));