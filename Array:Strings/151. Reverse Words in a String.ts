function reverseWords(s: string): string {
    const words = s.split(' ');
    let result =  `${words[words.length -1]} `;
    for(let i = words.length-2; i >= 0; i--) {
        if(words[i] != '') {
            result += `${words[i]}`;
            if(i != 0) result += ' ';
        }
    }
    return result.trim();
};