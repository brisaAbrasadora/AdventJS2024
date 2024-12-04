"use strict";
const args = process.argv.slice(2);

function createXmasTree(height, ornament) {
  let result = '';
  const maxWidth = +height * 2 - 1;
  let trunk = '#'.padStart((maxWidth / 2) + 1, '_').padEnd(maxWidth, '_');

  for(let i = 1; i <= height; i++) {
    const filledSpace = ornament.repeat(i + i - 1);
    const line = filledSpace.padStart((maxWidth / 2) + i, '_').padEnd(maxWidth, '_') + '\n';
    result = result.concat(line);
  }

  return result + trunk + '\n' + trunk;
}

console.log(createXmasTree(...args));