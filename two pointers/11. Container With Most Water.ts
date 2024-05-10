function maxArea(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;

    while (l < r) {
        let minHeight = height[l] <= height[r] ? height[l] : height[r]; // here we have the minimal height
        let base = r - l; // i.e. 80 - 0 = 80, 10 - 4 = 6;
        const cArea = minHeight * base; 
        maxArea = maxArea < cArea ? cArea : maxArea;

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxArea;
};