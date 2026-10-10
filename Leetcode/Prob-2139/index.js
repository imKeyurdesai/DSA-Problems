/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
    let steps = 0;

    while (target > 1 && maxDoubles > 0) {
        if (target % 2 === 0) {
            target /= 2;
            maxDoubles--;
        } else {
            target -= 1;
        }
        steps++;
    }

    if (target > 1) {
        steps += (target - 1);
    }

    return steps;
};
const target = 19, maxDoubles = 2
console.log(minMoves(target, maxDoubles))