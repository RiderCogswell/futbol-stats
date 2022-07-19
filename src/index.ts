import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
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

console.log(matches);

// enum - enumeration - is a much better option because most engineers 
// will delete unused vars and enums are clear to engineers in utility
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

const printMatchResult = (): MatchResult => {
  if (match[5] === 'H') {
    return MatchResult.HomeWin;
  }
  // basecase away win
  return MatchResult.AwayWin;
}

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games!`);
