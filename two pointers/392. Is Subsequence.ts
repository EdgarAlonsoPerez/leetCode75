function isSubsequence(s: string, t: string): boolean {
    let result = true;
    const sequence:number[] = [];
    const letterSequence:string[] = [];
    let tArray:string[] = t.split('');
    
    if( t.indexOf(s) != -1) return result;

    for(let i = 0; i < s.length; i++) {
        if (!result) i = s.length; //breaks the for and return teh result

        let index = tArray.indexOf( s[i] );
        if( index == -1) result = false;
        sequence.push(index)
        letterSequence.push(tArray[index])
        tArray.splice(0,index+1)
    }
    return result;
};