import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  data: string[][] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      // telling readFileSync what type of content to expect in football.csv
      // adding this will make it return a string
      encoding: 'utf-8'     
    }).split('\n') // split on each new line
    // map over and on each row, 
    // split and 
    .map((row: string): string[] => {
      return row.split(',');
    })
    // poor model
    .map((row: string[]): (Date | string | number | MatchResult)[] => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // Type Assertion - overrides TS' default behavior
        row[6]
      ]
    })
  }
}