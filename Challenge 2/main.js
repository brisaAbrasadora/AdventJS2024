"use strict";
const args = process.argv.slice(2);

function createFrame(names) {
  const longestNameWidth = [...names].sort((a, b) => b.length - a.length)[0]?.length;
  const borderY = '*'.repeat(longestNameWidth + 4);
  let result = '';

  names.forEach(name => {
    result = result.concat(`* ${name.padEnd(longestNameWidth)} *\n`);
  });

  return borderY + '\n' + result + borderY;
}

console.log(createFrame(args));