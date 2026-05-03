class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const getMap = (s) => {
            const map = new Map()
            for(let i of s){
                if(map.has(i)){
                    const val = map.get(i) + 1
                    map.set(i,val)
                }else{
                    map.set(i,1)
                }
            }
            return map
        }

        const sMap = getMap(s)
        const tMap = getMap(t)


        const compareMap = (sMap,tMap) => {
            let result = false
            for (const [key, value] of sMap) {
                if(tMap.has(key)){
                    if(tMap.get(key) === value){
                        result = true
                    }else{
                        result = false
                        break
                    }
                }else{
                    result = false
                    break
                }
            }
            return result
        }
        return compareMap(sMap,tMap)
    }
}
