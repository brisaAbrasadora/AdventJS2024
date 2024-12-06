"use strict";

export function getBox(index) {
  index ??= getRandomIntInclusive(1, 5);
  const boxs = loadBoxs();

  return boxs[index - 1];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function loadBoxs() {
  const boxs = [];
  const box1 = '###,#*#,###'.split(',');
  const box2 = '####,#* #,#  #,####'.split(',');
  const box3 = '*####,#    #,#  #*,####'.split(',');
  const box4 = '#####,#   #,#   #,#   #,#####'.split(',');
  const box5 = '##*##,#   #,#####'.split(',');

  boxs.push(box1, box2, box3, box4, box5);

  return boxs;
}
