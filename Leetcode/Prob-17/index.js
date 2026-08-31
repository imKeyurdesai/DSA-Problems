/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, current) {
        // Base case
        if (index === digits.length) {
            result.push(current);
            return;
        }

        // Get letters for current digit
        const letters = map[digits[index]];

        // Try each letter
        for (const ch of letters) {
            backtrack(index + 1, current + ch);
        }
    }

    backtrack(0, "");
    return result;
};

const digits = "23"
console.log(letterCombinations(digits))