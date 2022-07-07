'use strict';

const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

const res1 = MyMath.sum(3,5);
const res2 = MyMath.sub(3,5);
console.log('res1=', res1);
console.log('hi!');


const component1 = new Component();
component1.render();