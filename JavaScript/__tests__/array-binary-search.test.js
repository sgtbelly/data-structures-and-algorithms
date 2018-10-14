'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

it('requires a number', () => {
  let arr = faker.random.number();
  expect(number).toBeNull();
});

it('rejects letters', () => {
  let number = faker.random.number();
  expect(number).toBeNull();
});

it('rejects objects', () => {
  let number = faker.random.number();
  expect(number).toBeNull();
});

