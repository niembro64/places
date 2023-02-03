export const getFirstLargest = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

export const getSecondLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[1];

  if (largest < secondLargest) {
    largest = arr[1];
    secondLargest = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

export const getThirdLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[1];
  let thirdLargest = arr[2];

  if (largest < secondLargest) {
    largest = arr[1];
    secondLargest = arr[0];
  }

  if (secondLargest < thirdLargest) {
    if (largest < thirdLargest) {
      secondLargest = largest;
      largest = arr[2];
    } else {
      secondLargest = thirdLargest;
      thirdLargest = arr[1];
    }
  }

  for (let i = 3; i < arr.length; i++) {
    if (arr[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > thirdLargest) {
      thirdLargest = arr[i];
    }
  }

  return thirdLargest;
};

export const getFourthLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[1];
  let thirdLargest = arr[2];
  let fourthLargest = arr[3];

  if (largest < secondLargest) {
    largest = arr[1];
    secondLargest = arr[0];
  }

  if (secondLargest < thirdLargest) {
    if (largest < thirdLargest) {
      secondLargest = largest;
      largest = arr[2];
    } else {
      secondLargest = thirdLargest;
      thirdLargest = arr[1];
    }
  }

  if (thirdLargest < fourthLargest) {
    if (secondLargest < fourthLargest) {
      if (largest < fourthLargest) {
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = arr[3];
      } else {
        thirdLargest = secondLargest;
        secondLargest = fourthLargest;
        fourthLargest = arr[2];
      }
    } else {
      thirdLargest = fourthLargest;
      fourthLargest = arr[2];
    }
  }

  for (let i = 4; i < arr.length; i++) {
    if (arr[i] > largest) {
      fourthLargest = thirdLargest;
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      fourthLargest = thirdLargest;
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > thirdLargest) {
      fourthLargest = thirdLargest;
      thirdLargest = arr[i];
    } else if (arr[i] > fourthLargest) {
      fourthLargest = arr[i];
    }
  }

  return fourthLargest;
};

export const getIndexOfMax = (arr) => {
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  arr[maxIndex] = -1;

  return maxIndex;
};

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

const getPositions = (input: number[]): number[] => {
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
