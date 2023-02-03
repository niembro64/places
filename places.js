"use strict";
exports.__esModule = true;
exports.getIndexesOfMax = exports.getIndexOfMax = exports.getFourthLargest = exports.getThirdLargest = exports.getSecondLargest = exports.getFirstLargest = void 0;
var getFirstLargest = function (arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};
exports.getFirstLargest = getFirstLargest;
var getSecondLargest = function (arr) {
    var largest = arr[0];
    var secondLargest = arr[1];
    if (largest < secondLargest) {
        largest = arr[1];
        secondLargest = arr[0];
    }
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
};
exports.getSecondLargest = getSecondLargest;
var getThirdLargest = function (arr) {
    var largest = arr[0];
    var secondLargest = arr[1];
    var thirdLargest = arr[2];
    if (largest < secondLargest) {
        largest = arr[1];
        secondLargest = arr[0];
    }
    if (secondLargest < thirdLargest) {
        if (largest < thirdLargest) {
            secondLargest = largest;
            largest = arr[2];
        }
        else {
            secondLargest = thirdLargest;
            thirdLargest = arr[1];
        }
    }
    for (var i = 3; i < arr.length; i++) {
        if (arr[i] > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        }
        else if (arr[i] > thirdLargest) {
            thirdLargest = arr[i];
        }
    }
    return thirdLargest;
};
exports.getThirdLargest = getThirdLargest;
var getFourthLargest = function (arr) {
    var largest = arr[0];
    var secondLargest = arr[1];
    var thirdLargest = arr[2];
    var fourthLargest = arr[3];
    if (largest < secondLargest) {
        largest = arr[1];
        secondLargest = arr[0];
    }
    if (secondLargest < thirdLargest) {
        if (largest < thirdLargest) {
            secondLargest = largest;
            largest = arr[2];
        }
        else {
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
            }
            else {
                thirdLargest = secondLargest;
                secondLargest = fourthLargest;
                fourthLargest = arr[2];
            }
        }
        else {
            thirdLargest = fourthLargest;
            fourthLargest = arr[2];
        }
    }
    for (var i = 4; i < arr.length; i++) {
        if (arr[i] > largest) {
            fourthLargest = thirdLargest;
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            fourthLargest = thirdLargest;
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        }
        else if (arr[i] > thirdLargest) {
            fourthLargest = thirdLargest;
            thirdLargest = arr[i];
        }
        else if (arr[i] > fourthLargest) {
            fourthLargest = arr[i];
        }
    }
    return fourthLargest;
};
exports.getFourthLargest = getFourthLargest;
var getIndexOfMax = function (arr) {
    var max = arr[0];
    var maxIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    arr[maxIndex] = -1;
    return maxIndex;
};
exports.getIndexOfMax = getIndexOfMax;
var getIndexesOfMax = function (arr) {
    var max = arr[0];
    var maxIndexes = [0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndexes = [i];
            max = arr[i];
        }
        else if (arr[i] === max) {
            maxIndexes.push(i);
        }
    }
    for (var i = 0; i < maxIndexes.length; i++) {
        arr[maxIndexes[i]] = -1;
    }
    return maxIndexes;
};
exports.getIndexesOfMax = getIndexesOfMax;
var x = [10, 20, 30, 20, 30, 100];
var p = [0, 0, 0, 0, 0, 0];
// while x has at least positive numbers in it
var pos = 0;
while (x.some(function (v) { return v > 0; })) {
    var i = (0, exports.getIndexesOfMax)(x);
    pos++;
    for (var j = 0; j < i.length; j++) {
        p[i[j]] = pos;
    }
    console.log('p', p);
    console.log('x', x);
    console.log();
}
