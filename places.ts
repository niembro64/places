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

export const hasDuplicates = (array: number[]): boolean => {
  return new Set(array).size !== array.length;
};

let x: number[][] = [
  [2, 2, 3, 1],
  [1, 2, 2, 4],
  [2, 2, 2, 2],
];

let index = 0;
let posPlayers: number[] = getPositions(x[index]);
