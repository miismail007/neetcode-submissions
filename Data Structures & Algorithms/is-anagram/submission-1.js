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
        
        for(let i of t){
            if(!sMap.has(i)){
                return false
            }
            const value = sMap.get(i)
            sMap.set(i, value -1)
        }
        
        return Array.from(sMap.values()).every(val => val === 0);

    }
}
