'use strict';

const leftJoin = require('./left-join.js');

let mapList1 = new Map();
mapList1.set('fond', 'enamored');
mapList1.set('wrath', 'anger');
mapList1.set('diligent', 'employed');
mapList1.set('outfit', 'garb');
mapList1.set('guide', 'usher');

let mapList2 = new Map();
mapList2.set('fond', 'averse');
mapList2.set('wrath', 'delight');
mapList2.set('diligent', 'idle');
mapList2.set('guide', 'follow');
mapList2.set('flow', 'jam');

let mapList3 = new Map();

let join = {
  '1': ['fond', 'enamored', 'averse'],
  '2': ['wrath', 'anger', 'delight'],
  '3': ['diligent', 'employed', 'idle'],
  '4': ['outfit', 'garb', NULL],
  '5': ['guide', 'usher', 'follow']
};

describe('left-join.js', () => {

  it('join two hashmaps', () => {
    let hash = leftJoin.leftjoins(mapList1, mapList2);
    expect(hash).toEqual(join);
  });

  it('check for empty hashmap', () => {
    let hash = leftJoin.leftjoins(mapList1, mapList3);
    expect(hash).toEqual('empty hashmap');
  })

});


