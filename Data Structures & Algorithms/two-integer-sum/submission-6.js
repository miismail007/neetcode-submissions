class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length === 2){
            return [0,1]
        }
        const newMap = new Map()
        for(let i = 0; i<nums.length; i++){
            newMap.set(nums[i],i)
            const lookUp = target - nums[i]
            if(newMap.has(lookUp)){
                const iVal = parseInt(i)
                const lookUpVal = parseInt(newMap.get(lookUp))
                if(iVal === lookUpVal) continue
                return [iVal,lookUpVal]
            }
        }
    }
}
