function productExceptSelf(nums: number[]): number[] {
    const leftArray:number[] =  [] ;
    const rightArray: number[] = [];
    let leftProduct = nums[0];
    let rightProduct = nums[nums.length-1];
    let result:number[] = [];
    
    for(let i = 0; i < nums.length; i++) {
        const rIndex = ((nums.length-1) - i)
        const lIndex = (i-1);

        if (nums[lIndex] != undefined){
            
            leftProduct *= nums[i];
        }
        
        if (rIndex != nums.length-1){
            rightProduct *= nums[rIndex];
        }
    
        leftArray.push(leftProduct)
        rightArray.unshift(rightProduct)
    }
    
    for(let i = 0; i < nums.length; i++) {
        let leftProduct = leftArray[i-1] != undefined ? leftArray[i-1] : 1;
        let rightProduct = rightArray[i+1] != undefined ? rightArray[i+1] : 1;        
        result.push(leftProduct * rightProduct)
    }
    return result
};

// productExceptSelf([1,2,3,4]) // == [24,12,8,6]
// productExceptSelf([-1,1,0,-3,3]) // == [0,0,9,0,0]
// productExceptSelf([9,5,4,8,7]) // == [1120,2016,2520,1260,1440]
productExceptSelf([1,2,3,4,5,6,7]) // [5040,2520,1680,1260,1008,840,720]