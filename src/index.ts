import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// create object that satisfies datareader interface
const csvFileReader = new CsvFileReader('football.csv')
// create an instance of matchreader and pass in something that saatisfies the data reader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(matchReader.matches[0][0]); // this is very incredible, study it later
