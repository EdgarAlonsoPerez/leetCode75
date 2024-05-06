function equalPairs(grid: number[][]) {
    let colKeys:string[] = [];
    let rowKeys:string[] = [];
    let count:number = 0;
    
    for(let r = 0; r < grid.length; r++){
        let sRow = '';
        let sCol = '';
        for(let c = 0; c < grid.length; c++){
            sRow += `${grid[r][c]}-`;
            sCol += `${grid[c][r]}-`;
            
            if ( (sRow.split('-').length-1) == grid.length) {
                rowKeys.push(sRow)
            }
            
            if ( (sCol.split('-').length-1) == grid.length) {
                colKeys.push(sCol)
            }
        }    
    }
    
    colKeys.forEach((col) => {
        const pairs = rowKeys.filter((row) =>  (row === col ))
        
        if (pairs.length > 0) {
            count += pairs.length;
        }
    })
    return count 
};



equalPairs([[3,2,1],[1,7,6],[2,7,7]])
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

equalPairs([[3,1,2,2],[1,4,4,4],[2,4,2,2],[2,5,2,2]]) // == 3

equalPairs([[13,13],[13,13]]) // == 4

equalPairs([[11,1],[1,11]]) // == 2

