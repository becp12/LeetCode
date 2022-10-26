/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let arr = [...digits];
//     arr = parseInt(arr.join(""));
//     arr += 1;
//     newArr = Array.from(arr.toString()).map(Number);
//     console.log(newArr);
// };

// arr.split('');
    // console.log(arr);
    // 
    // newArr.pop();
    // newArr.push(newNum);
    // console.log(newArr);
    // const newNum = arr[arr.length - 1] + 1;
    // const newArr = arr.splice(arr.length-1, 1, newNum)
    // console.log(newArr);
// Array.from(n.toString()).map(Number);
// const n = 123456;
// 
// // [1, 2, 3, 4, 5, 6]

var plusOne = function(digits) {
    return arr = Array.from(String(BigInt(digits.join("")) + BigInt(1)), Number)
};