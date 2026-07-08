/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
    const MOD = 1000000007;
    const MOD_BIG = BigInt(MOD);
    const m = s.length;

    // prefixSum[i]   = sum of digits in s[0..i-1]
    // prefixCount[i] = count of non-zero digits in s[0..i-1]
    // prefixVal[i]   = value of concatenating non-zero digits in s[0..i-1], mod MOD
    // pow10[i]       = 10^i mod MOD
    const prefixSum = new Array(m + 1).fill(0);
    const prefixCount = new Array(m + 1).fill(0);
    const prefixVal = new Array(m + 1).fill(0);
    const pow10 = new Array(m + 1).fill(1);

    for (let i = 1; i <= m; i++) {
        const d = s.charCodeAt(i - 1) - 48;
        prefixSum[i] = prefixSum[i - 1] + d;
        pow10[i] = (pow10[i - 1] * 10) % MOD;

        if (d === 0) {
            prefixCount[i] = prefixCount[i - 1];
            prefixVal[i] = prefixVal[i - 1];
        } else {
            prefixCount[i] = prefixCount[i - 1] + 1;
            prefixVal[i] = (prefixVal[i - 1] * 10 + d) % MOD;
        }
    }

    const res = [];
    for (const [l, r] of queries) {
        const sum = prefixSum[r + 1] - prefixSum[l];
        const shift = prefixCount[r + 1] - prefixCount[l]; // non-zero digits before l

        // prefixVal[l] * pow10[shift] can be ~10^18 — too big for Number to
        // stay exact, so this one multiply uses BigInt.
        const scaled = Number((BigInt(prefixVal[l]) * BigInt(pow10[shift])) % MOD_BIG);

        let x = (prefixVal[r + 1] - scaled) % MOD;
        if (x < 0) x += MOD;

        res.push((x * sum) % MOD);
    }

    return res;
};

let s = "1000"
let queries = [[0,3],[1,1]]
console.log(sumAndMultiply(s, queries))