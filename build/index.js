"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', {
    // telling readFileSync what type of content to expect in football.csv
    // adding this will make it return a string
    encoding: 'utf-8'
    // split on each new line
}).split('\n')
    // map over and on each row, 
    // split and 
    .map((row) => {
    return row.split(',');
});
console.log(matches);
const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games!`);
