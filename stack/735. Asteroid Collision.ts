function asteroidCollision(asteroids: number[]): number[] {
    for(let i = 0; i < asteroids.length; i++) {
        let nextI:number = i+1;
        let lastI:number = i == 0 ? 0 : i-1;
        
        if (asteroids[i] > 0) {
            if (asteroids[nextI] < 0) {
                let r = asteroids[i] + asteroids[nextI]
                
                if ( r == 0 ) {
                    asteroids.splice(i,2)
                    i -= 2;
                }
                
                if ( r > 0 ) {
                    asteroids.splice(nextI,1)
                    if (asteroids[nextI] < 0) { 
                        while (r > 0 && asteroids[nextI] < 0){
                            r = asteroids[i] + asteroids[nextI]
                            if (r > 0) {
                                asteroids.splice(nextI,1)
                            }
                            if ( r == 0 ) { 
                                asteroids.splice(i,2)
                                i -= 2; 
                            }
                        }
                    }
                }
                
                if ( r < 0 ) { 
                    asteroids.splice(i,1) 
                    i--; 
                    if (asteroids[lastI] > 0){
                        i--  
                    }
                }
            }
        }
    
    }
    return asteroids
};



asteroidCollision([5,10,-5]) // == [5,10]
// // Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

asteroidCollision([8,-8]) // ==  []
// // Explanation: The 8 and -8 collide exploding each other.

asteroidCollision([10,2,-5]) // == [10]
// //Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 
asteroidCollision([10,-5,5,-7]) // == [10]

asteroidCollision([-2,2,-1,-2]) // == [-2] 
// [-2,2,-1,-2]
// [-2,2,   -2]
// [-2        ]

asteroidCollision([1,1,-1,-2]) // == [-2]
// [1,1,-1,-2]
// [1,    ,-2]
// [       -2]

asteroidCollision([2,-1,-1,-2]) // == []
// [2,-1,-1,-2]
// [2,  ,-1,-2]
// [2,     ,-2]
// [          ]

asteroidCollision([2,-1,-1,1]) // == [2,1]
// [2,-1,-1,1]
// [2,  ,-1,1]
// [2,  ,  ,1]
