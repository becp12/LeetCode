/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // let ans = [];
    // let n = nums.length;
    // while (ans.length != n) {
    //     for (let i = 0; i < n; i++) {
    //         ans.push(nums[i]);
    //     }
    // }
    // while (ans.length != 2*n) {
    //     for (let i = 0; i < n; i++) {
    //         ans.push(nums[i]);
    //     }
    // }
    // return ans;
    return [...nums, ...nums]
};