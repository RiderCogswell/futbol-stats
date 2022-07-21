"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
// create object that satisfies datareader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of matchreader and pass in something that saatisfies the data reader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches[0][0]); // this is very incredible, study it later
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games!`);
