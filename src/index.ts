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

// javascript option solution
const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D',
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
