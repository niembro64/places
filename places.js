"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getDuplicatesIndexes = exports.hasDuplicates = exports.getIndexesOfMax = void 0;
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
var getPositions = function (i) {
    var input = __spreadArray([], i, true);
    var output = [];
    for (var i_1 = 0; i_1 < input.length; i_1++) {
        output.push(0);
    }
    var position = 0;
    while (input.some(function (v) { return v > 0; })) {
        var indexes = (0, exports.getIndexesOfMax)(input);
        position++;
        for (var j = 0; j < indexes.length; j++) {
            output[indexes[j]] = position;
        }
        console.log('p', output);
        console.log('x', input);
        console.log();
    }
    return output;
};
var hasDuplicates = function (array) {
    return new Set(array).size !== array.length;
};
exports.hasDuplicates = hasDuplicates;
var getDuplicatesIndexes = function (array) {
    var duplicates = [];
    var sorted_arr = array.slice().sort();
    var results = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
};
exports.getDuplicatesIndexes = getDuplicatesIndexes;
var x = [
    [2, 2, 3, 1],
    [1, 2, 2, 4],
    [2, 2, 2, 2],
];
var index = 0;
var posPlayers = getPositions(x[index]);
while ((0, exports.hasDuplicates)(posPlayers)) {
    index++;
    posPlayers = getPositions(x[index]);
}
console.log((0, exports.getDuplicatesIndexes)(x[0]));
console.log((0, exports.getDuplicatesIndexes)(x[1]));
console.log((0, exports.getDuplicatesIndexes)(x[2]));
