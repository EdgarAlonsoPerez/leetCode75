function maxVowels(s: string, k: number): number {
    if (k === 0) return 0
    const isVowel = (l) => ( {a:'a',e:'e',i:'i',o:'o',u:'u'}[l] )
    let initialVowels = s.slice(0,k).split('').filter(isVowel).length
    let maxVowels = Number(initialVowels);
    
    for(let i = 1; i < s.length; i++) {
        const nextChar = s[i+(k-1)];
        
        // breaks the loop
        if (nextChar == undefined) {
            i = s.length 
        } else {
            // check both chars, the char that i left and the char next to my index
            const lastChar = s[i-1];
            
            // check the the char that i left 
            if (isVowel(lastChar))  initialVowels--;

            // check the incomming char
            if (isVowel(nextChar)) initialVowels++;

            maxVowels = initialVowels > maxVowels ? initialVowels : maxVowels;
        }
    }
    return maxVowels
};




maxVowels("abciiidef",3) // => 3
maxVowels("aeiou", 2) // => 2
maxVowels("leetcode", 3) // => 2
maxVowels("tryhard", 4) // => 1