"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
// create object that satisfies datareader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of matchreader and pass in something that saatisfies the data reader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches[0][0]); // this is very incredible, study it later
