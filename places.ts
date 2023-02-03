export const getIndexesOfMax = (arr) => {
  let max = arr[0];
  let maxIndexes = [0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndexes = [i];
      max = arr[i];
    } else if (arr[i] === max) {
      maxIndexes.push(i);
    }
  }

  for (let i = 0; i < maxIndexes.length; i++) {
    arr[maxIndexes[i]] = -1;
  }

  return maxIndexes;
};

const getPositions = (i: number[]): number[] => {
  let input = [...i];
  let output: number[] = [];

  for (let i = 0; i < input.length; i++) {
    output.push(0);
  }

  let position = 0;
  while (input.some((v) => v > 0)) {
    let i = getIndexesOfMax(input);
    position++;
    for (let j = 0; j < i.length; j++) {
      output[i[j]] = position;
    }
    console.log('p', output);
    console.log('x', input);
    console.log();
  }

  return output;
};

// export const hasDuplicates = (array: number[]): boolean => {
//   return new Set(array).size !== array.length;
// };

// let x: number[][] = [
//   [2, 2, 3, 1],
//   [1, 2, 2, 4],
//   [2, 2, 2, 2],
// ];

// let index = 0;
// let posPlayers: number[] = getPositions(x[index]);

export interface Player {
  id: number;
  shots: number;
  deaths: number;
  hits: number;
}

let players: Player[] = [
  { id: 0, shots: 2, deaths: 2, hits: 3 },
  { id: 1, shots: 2, deaths: 1, hits: 2 },
  { id: 2, shots: 5, deaths: 2, hits: 2 },
  { id: 2, shots: 2, deaths: 2, hits: 2 },
];

// sort players by shots
// if there are ties, sort by deaths
// if there are ties, sort by hits
// if there are ties, sort by id
let sortedPlayers = [...players];
sortedPlayers.sort((a: Player, b: Player) => {
  if (a.shots > b.shots) {
    return -1;
  } else if (a.shots < b.shots) {
    return 1;
  } else {
    if (a.deaths > b.deaths) {
      return -1;
    } else if (a.deaths < b.deaths) {
      return 1;
    } else {
      if (a.hits > b.hits) {
        return -1;
      } else if (a.hits < b.hits) {
        return 1;
      } else {
        if (a.id > b.id) {
          return 1;
        } else if (a.id < b.id) {
          return -1;
        } else {
          return 1;
        }
      }
    }
  }
});

console.log(players);
console.log(sortedPlayers);
