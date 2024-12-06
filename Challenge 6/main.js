"use strict";
import { getBox } from './data.js';

const args = process.argv.slice(2);

function inBox(box) {
  const regex = /^#+\s*[*]\s*#$/gm;

  return box.slice(1, -1).some(part => regex.test(part));
}

console.log(inBox(getBox(...args)))