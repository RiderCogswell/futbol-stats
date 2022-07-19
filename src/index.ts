import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  // telling readFileSync what type of content to expect in football.csv
  // adding this will make it return a string
  encoding: 'utf-8'
  // split on each new line
}).split('\n')
// map over and on each row, 
.map((row: string): string[] => {
  return row.split(',');
})

console.log(matches);