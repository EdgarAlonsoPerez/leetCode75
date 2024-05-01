
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandiesNumber = Math.max(...candies) + extraCandies;  
    return candies.map( (candyNumber: number) => candyNumber + extraCandies == maxCandiesNumber ? true : false)
};


kidsWithCandies([2,3,5,1,3],3) // => [true,true,true,false,true] 

// Explanation: If you give all extraCandies to:
// Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.


kidsWithCandies([4,2,1,1,2],1) // => [true,false,false,false,false] 
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.


kidsWithCandies([12,1,12],10) // => [true,false,true]