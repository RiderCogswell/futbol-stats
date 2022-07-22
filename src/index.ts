import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtml('Man United') // only benefit is we do not have to call a new instance as the static class already does

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

// console.log(matchReader.matches[0][0]); // this is very incredible, study it later
