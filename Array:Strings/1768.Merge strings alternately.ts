function mergeAlternately(word1: string, word2: string): string {
    let result = "";
    const length = word1.length > word2.length ? word1.length : word2.length;
    
    for(let i = 0; i < length; i++){
        result += word1[i] ? word1[i] : '';
        result += word2[i] ? word2[i] : '';
    }
    
    return result;
  };
  
mergeAlternately("abc","pqr") == "apbqcr" // => "apbqcr"
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r