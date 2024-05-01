function uniqueOccurrences(arr: number[]) {
    const map = new Map();
    const occ: any = {};
    let result = true;
    for(var i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i],1)
        } else {
            map.set(arr[i],map.get(arr[i])+1)
        }
    }
    map.forEach((v) => {
        if (!occ[v]) {
            occ[v] = v;    
        } else {
            result = false
        }
    })
    return result 
};

uniqueOccurrences([1,2,2,1,1,3])
// m.get(3)
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

uniqueOccurrences([1,2])
// Output: false

uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])
// Output: true
