/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    const alphabet = {
        a : 1,
        b : 2,
        c : 3,
        d : 4,
        e : 5,
        f : 6,
        g : 7,
        h : 8,
        i : 9,
        j : 10,
        k : 11,
        l : 12,
        m : 13,
        n : 14,
        o : 15,
        p : 16,
        q : 17,
        r : 18,
        s : 19,
        t : 20,
        u : 21,
        v : 22,
        w : 23,
        x : 24,
        y : 25,
        z : 26,
    }
    let prod = 0
    for (let i = 0; i < s.length; i++) {
        const idx = alphabet[s[i]];
        prod += (i + 1) * Math.abs(26 - idx + 1)
    }
    return prod
};

const s = "abc"
console.log(reverseDegree(s))