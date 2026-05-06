class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = []
        const map = new Map()
        for(let str of strs){
            const sortedStr = str.split('').sort().join('')
            if(map.has(sortedStr)){
                map.set(sortedStr,[...map.get(sortedStr),str])
            }else{
                map.set(sortedStr, [str])
            }
        }

        for(let [i,val] of map){
            result.push(val)
        }

        return result.sort((a, b) => a.length - b.length);
    }
}
