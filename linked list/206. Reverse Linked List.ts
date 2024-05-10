// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
   if (!head) {
       return null
   }
   let aux:ListNode = head;
   let stack:ListNode[] = [new ListNode(head.val)];
   
   while(aux?.next){
       aux = aux.next;
       stack.unshift(new ListNode(aux.val))
   }

   for(let i = stack.length-1; i >= 0; i--) {
       if (i === stack.length-1) {
           aux = new ListNode(stack[i].val)
       } else {
           aux = new ListNode(stack[i].val,aux)   
       }
   }
   return aux
};

reverseList(new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5)))))) // [5,4,3,2,1]