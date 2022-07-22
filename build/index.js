"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summary_1.Summary.winsAnalysisWithHtml('Man United'); // only benefit is we do not have to call a new instance as the static class already does
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
// console.log(matchReader.matches[0][0]); // this is very incredible, study it later
