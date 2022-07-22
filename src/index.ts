import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// create object that satisfies datareader interface
const csvFileReader = new CsvFileReader('football.csv')
// create an instance of matchreader and pass in something that saatisfies the data reader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

// console.log(matchReader.matches[0][0]); // this is very incredible, study it later
