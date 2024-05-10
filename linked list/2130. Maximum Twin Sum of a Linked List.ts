// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}



function pairSum(head: ListNode | null): number {
    // The length will always be even (2,4,6,8,10 ...)
    // ${listNode} = [5,4,2,1] => ${n} = 4 (0,1,2,3) are the indexes
    // ${i} will be the twin of (${n}-1-${i}) 
    //      *) For node 0, the twin is ((4-1)-0) 3 => node 0 has its twin at node 3
    //      *) For node 1, the twin is ((4-1)-1) 2 => node 1 has its twin at node 2
    //      The iteration must stop here because it will return the same as a cycle
    //          *) For node 2, the twin is ((4-1)-2) 1 => node 2 has its twin at node 1
    //          *) For node 3, the twin is ((4-1)-3) 0 => node 3 has its twin at node 0

    // [0,1,2,3] 
    // [5,4,2,1], node 0 (listNode[0] == 5) is the twin of node 3 (listNode[3] == 1) 
    // [5,4,2,1], node 1 (listNode[1] == 4) is the twin of node 2 (listNode[2] == 2)
    // The result is 6 because the sum of node 0 and its twin (node 3) is 6, the same as for the second pair of twins, which are node 1 and node 2
    // node 0 + node 3 = 6 => 5 + 1 = 6 (twin1)
    // node 1 + node 2 = 6 => 4 + 2 = 6 (twin2)
    // return twin1 > twin2 ? twin1 : twin2 => 6 > 6 ? 6 : 6
    let length: number = 0;
    const getTwinIndex = (l: number, i:number) => ((l-1)-i)
    const stack:ListNode[] = []
    let aux: ListNode | null = head;
    let result: number = 0;
    
    if (aux?.next) {
        length++
        stack.push(new ListNode(aux.val))
    }
        
    while(aux?.next){
        length++;
        aux = aux.next
        stack.push(new ListNode(aux.val))
    }
    
    for(let i = 0;  i < stack.length; i++) {
        const twinIndex = getTwinIndex(length, i);
        if (twinIndex && stack[twinIndex]?.val) {            
            result = stack[i].val + stack[twinIndex]?.val > result ? stack[i].val + stack[twinIndex]?.val : result
        }
    }
    
    return result;
};

 pairSum(new ListNode(5,new ListNode(4,new ListNode(2,new ListNode(1))))) // == 6
