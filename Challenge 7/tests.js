"use strict";
import { fixPackages } from './main.js';

let allTestsPassed = true;
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function test(description, callback) {
  totalTests++;
  try {
    callback();
    console.log(`✅ ${description}`);
    passedTests++;
  } catch(error) {
    console.error(`❌ ${description}`);
    console.error(error.message);
    allTestsPassed = false;
    failedTests++;
  }
}

test('Testcase 1: "a(cb)de" ➞ "abcde"', () => {
  const expectedResult = 'abcde';
  const actualResult = fixPackages('a(cb)de');
  if(actualResult !== expectedResult) {
    throw new Error(`Wanted [${expectedResult}], but found [${actualResult}]\n`);
  };
});

test('Testcase 2: "a(bc(def)g)h" ➞ "agdefcbh"', () => {
  const expectedResult = 'agdefcbh';
  const actualResult = fixPackages('a(bc(def)g)h');
  if(actualResult !== expectedResult) {
    throw new Error(`Wanted [${expectedResult}], but found [${actualResult}]\n`);
  };
});

test('Testcase 3: "abc(def(gh)i)jk" ➞ "abcighfedjk"', () => {
  const expectedResult = 'abcighfedjk';
  const actualResult = fixPackages('abc(def(gh)i)jk');
  if(actualResult !== expectedResult) {
    throw new Error(`Wanted [${expectedResult}], but found [${actualResult}]\n`);
  };
});

test('Testcase 4: "a(b(c))e" ➞ "acbe"', () => {
  const expectedResult = 'acbe';
  const actualResult = fixPackages('a(b(c))e');
  if(actualResult !== expectedResult) {
    throw new Error(`Wanted [${expectedResult}], but found [${actualResult}]\n`);
  };
});

test('Testcase 5: "a(b(cd(efg)))h" ➞ "acdgfebh"', () => {
  const expectedResult = 'acdgfebh';
  const actualResult = fixPackages('a(b(cd(efg)))h');
  if(actualResult !== expectedResult) {
    throw new Error(`Wanted [${expectedResult}], but found [${actualResult}]\n`);
  };
});

test('Testcase 6: "(abc(def(ghi)))" ➞ "defihgcba"', () => {
  const expectedResult = 'defihgcba';
  const actualResult = fixPackages('(abc(def(ghi)))');
  if(actualResult !== expectedResult) {
    throw new Error(`Wanted [${expectedResult}], but found [${actualResult}]\n`);
  };
});

test('Testcase 7: "(a(b(c)))" ➞ "bca"', () => {
  const expectedResult = 'bca';
  const actualResult = fixPackages('(a(b(c)))');
  if(actualResult !== expectedResult) {
    throw new Error(`Wanted [${expectedResult}], but found [${actualResult}]\n`);
  };
});

test('Testcase 8: "a(cd)b(de)f(gh)" ➞ "adcbedfhg"', () => {
  const expectedResult = 'adcbedfhg';
  const actualResult = fixPackages('a(cd)b(de)f(gh)');
  if(actualResult !== expectedResult) {
    throw new Error(`Wanted [${expectedResult}], but found [${actualResult}]\n`);
  };
});

console.log(`----------------------------------
✅ Passed tests: ${passedTests}/${totalTests}
❌ Failed tests: ${failedTests}/${totalTests}
----------------------------------\n`);

if (!allTestsPassed) {
  console.error("❌ Some tests failled. Exiting process...");
  process.exit(1); // Termina el proceso si hay fallos
} else {
  console.log("✅ Every test passed.");
}