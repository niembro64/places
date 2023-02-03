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
exports.getIndexesOfMax = void 0;
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
        var i_2 = (0, exports.getIndexesOfMax)(input);
        position++;
        for (var j = 0; j < i_2.length; j++) {
            output[i_2[j]] = position;
        }
        console.log('p', output);
        console.log('x', input);
        console.log();
    }
    return output;
};
var players = [
    { id: 3, shots: 5, deaths: 2, hits: 3 },
    { id: 1, shots: 5, deaths: 1, hits: 2 },
    { id: 0, shots: 5, deaths: 2, hits: 2 },
    { id: 2, shots: 2, deaths: 2, hits: 2 },
];
// sort players by shots
// if there are ties, sort by deaths
// if there are ties, sort by hits
// if there are ties, sort by id
var sortedPlayers = __spreadArray([], players, true);
sortedPlayers.sort(function (a, b) {
    if (a.shots > b.shots) {
        return -1;
    }
    else if (a.shots < b.shots) {
        return 1;
    }
    else {
        if (a.deaths > b.deaths) {
            return -1;
        }
        else if (a.deaths < b.deaths) {
            return 1;
        }
        else {
            if (a.hits > b.hits) {
                return -1;
            }
            else if (a.hits < b.hits) {
                return 1;
            }
            else {
                if (a.id > b.id) {
                    return 1;
                }
                else if (a.id < b.id) {
                    return -1;
                }
                else {
                    return 1;
                }
            }
        }
    }
});
console.log(players);
console.log(sortedPlayers);
