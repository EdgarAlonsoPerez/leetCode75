/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let zerosRemoved = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] == 0) {
            nums.splice(i,1)
            i--;
            zerosRemoved++;
        }
    }
    while(zerosRemoved > 0) {
        nums.push(0);
        zerosRemoved--;
    }
};

moveZeroes([0,1,0,3,12]) // => [1,3,12,0,0]
moveZeroes([0]) // => [0]
moveZeroes([0,0,1]) // => [1,0,0]
