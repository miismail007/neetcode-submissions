class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        const map = new Map();
        for(let num of nums){
            if(map.has(num)){
                result = true;
                break;
            }
            map.set(num, 0);
        }

        return result
    }
}
