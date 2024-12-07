"use strict";

const args = process.argv.slice(2);

export function fixPackages(packages) {
  let result = packages;
  const pattern = /^.*\(.*\).*$/;
  let areThereParentheses = pattern.test(result);
  
  while(areThereParentheses) {
    const leftParenthese = result.lastIndexOf('(');
    const rightParenthese = result.indexOf(')', leftParenthese);

    const segment = result.substring(leftParenthese, rightParenthese + 1);
    result = result.replace(segment, [...segment].reverse().slice(1, -1).join(''));
    areThereParentheses = pattern.test(result);
  }

  return result;
}

console.log(fixPackages(...args));