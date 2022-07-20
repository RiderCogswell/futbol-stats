import fs from 'fs';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string]

export abstract class CsvFileReader<T> { // we usually use T to show a genric, but it can literally be anything
  data: T[] = [];
  
  constructor(public filename: string) {}

  abstract mapRow(row:string[]): T // isolate custom logic to mapRow func

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
}