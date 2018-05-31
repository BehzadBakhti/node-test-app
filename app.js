console.log("Starting...");
const fs= require("fs");
const _=require("lodash");
const notes=require('./notes.js');
const yargs=require('yargs');

var command=process.argv;

console.log('Command:', command);

console.log('Yargs:', yargs.argv);
