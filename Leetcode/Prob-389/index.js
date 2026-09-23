/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let count = new Map();

    for (let ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    for (let ch of t) {
        if (!count.has(ch) || count.get(ch) === 0) {
            return ch;
        }
        count.set(ch, count.get(ch) - 1);
    }

    return "";
};

const s = "fuck", t = "fvck"
console.log(findTheDifference(s, t))