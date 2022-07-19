import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      // telling readFileSync what type of content to expect in football.csv
      // adding this will make it return a string
      encoding: 'utf-8'
      // split on each new line
    }).split('\n')
    // map over and on each row, 
    // split and 
    .map((row: string): string[] => {
      return row.split(',');
    })
  }
}