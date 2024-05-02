function reverseVowels(s: string): string {
    
    const isVowel = (c:string) => {
        if (!c) return false;
        return {a:'a', e:'e', i:'i', o:'o', u:'u'}[c.toLowerCase()] ? true : false;
    }
    let li = 0; 
    let ri = s.length - 1;
    let newWord = s.split('');
    while(ri > li) {
        if ( isVowel(newWord[li]) ) {
            
            if ( isVowel(s[ri]) )  {
                console.log(`${newWord[li]} - ${newWord[ri]}`)
                const temp = newWord[li];
                newWord[li] = newWord[ri];
                newWord[ri] = temp;
                ri--;
                li++
            } else {
                ri--;
            }
            li--;
        }
        li++
    }
    return newWord.join('');
};  

reverseVowels("hello") == "holle"
reverseVowels("leetcode") == "leotcede"
reverseVowels("race car")  == "race car"