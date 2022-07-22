"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const ConsoleReports_1 = require("./reportTargets/ConsoleReports");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
// create object that satisfies datareader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of matchreader and pass in something that saatisfies the data reader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReports_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
// console.log(matchReader.matches[0][0]); // this is very incredible, study it later
