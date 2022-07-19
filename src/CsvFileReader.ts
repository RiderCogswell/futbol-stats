import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
  data: MatchData[] = [];
  
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
    // better model
    .map(this.mapRow)
  }

  // isolate custom logic to mapRow func
  mapRow(row:string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // Type Assertion - overrides TS' default behavior
      row[6]
    ]
  }
}