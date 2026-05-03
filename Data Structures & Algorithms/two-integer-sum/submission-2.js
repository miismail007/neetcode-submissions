class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const newMap = new Map()
        for(let i in nums){
            newMap.set(nums[i],i)
        }
        for(let i in nums){
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
