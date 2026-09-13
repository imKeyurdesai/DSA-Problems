/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(!map.has(element)){
            map.set(element, 0)
        }
        map.set(element, (map.get(element) || 0) + 1)
    }
    for (let j = 0; j < s.length; j++) {
        const element = s[j];
        if(map.get(element) === 1){
            return j
        }
    }
    return -1
};

const s = "loveleetcode"
console.log(firstUniqChar(s))