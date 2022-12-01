/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];

    let maxCandies = 0;
	for (let i = 0; i < candies.length; i++) {
		if (candies[i] > maxCandies) {
			maxCandies = candies[i];
		}
	}
    
    for (let i = 0; i < candies.length; i++) {
        let currentCandies = candies[i] + extraCandies;
        // the below will print true or false without an if...else statement
        result.push(currentCandies >= maxCandies)
        
        // less efficient
        // if (currentCandies >= maxCandies) {
        //     result.push(true);
        // } else {
        //     result.push(false);
        // }
        
    }
    
    //
    return result;
};