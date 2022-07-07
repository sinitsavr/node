"use strict";

const { MyMath } = require("./MyMath");
const { Component } = require("./Component");

const fs = require('fs/promises');

// const res1 = MyMath.sum(3,5);
// const res2 = MyMath.sub(3,5);
// console.log('res1=', res1);
// console.log('hi!');
fs.readFile('./text.txt', 'utf-8')
.then((content) =>{
  console.log(content)
  fs.writeFile('./newText.txt', content + "\n1232323223", "utf-8");
})
.catch((err) => {console.log(err)})
// console.log(fs)

// const component1 = new Component();
// component1.render();
