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
            const lookUp = target - nums[i]
            if(newMap.has(lookUp)){
                const iVal = parseInt(i)
                const lookUpVal = parseInt(newMap.get(lookUp))
                if(iVal === lookUpVal) continue
                return [iVal,lookUpVal]
            }
        }
        for(let i = 0; i<nums.length; i++){
            
        }
    }
}
