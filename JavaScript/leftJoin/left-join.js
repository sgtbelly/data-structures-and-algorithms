'use strict';

let leftJoin = module.exports = {};

leftJoin.leftjoins = (mapList1, mapList2) => {
  let newObj = {};
  let keys1 = Array.from(mapList1.keys());
  let keys2 = Array.from(mapList2.keys());
  console.log(keys1);
  console.log(keys2);

  if((keys1.length === 0) || (keys2.length === 0)) {
    return 'empty hashmap';
  }

  for(let i = 0; i < keys1.length; i ++) {
    let keyNew = keys1[i];
    let valL = mapList1.get(keyNew);
    let valR = mapList2.get(keyNew);
    newObj[keyNew] = [valL, valR];
  }
  console.log(newObj);
  return newObj;
};