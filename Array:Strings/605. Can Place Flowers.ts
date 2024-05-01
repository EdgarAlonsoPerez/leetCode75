function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) return true
    for(let i = 0; i < flowerbed.length; i++){
        if ( flowerbed[i] === 0 && !flowerbed[i-1] && !flowerbed[i+1] ) {
            flowerbed[i] = 1;
            n--;
            i = n === 0 ? flowerbed.length : i
         }
    }
    return n === 0
};

canPlaceFlowers([1,0,0,0,1], 1) == true
canPlaceFlowers([1,0,0,0,1], 2) == false
canPlaceFlowers([1,0,1,0,1,0,1],0) == true
canPlaceFlowers([1,0,0,0,1,0,0],2) == true