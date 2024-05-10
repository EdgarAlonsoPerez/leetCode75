// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function oddEvenList(head: ListNode | null): ListNode | null {
   const isEven = (num:number):boolean => num % 2 === 0; 
   if (!head) {
       return null
   }
   const l: ListNode[] = [new ListNode(head.val)]
   const r: ListNode[] = []
   let index = 1;
   let aux = head.next
   while (aux?.next){
       index++;
       if (isEven(index)){
           r.push(new ListNode(aux.val))
       } else {
           l.push(new ListNode(aux.val))
       }
       aux = aux.next
       if (!aux.next) {
           index++
           if (isEven(index)){
               r.push(new ListNode(aux.val))
           } else {
               l.push(new ListNode(aux.val))
           }
       }
   }
   
   for(let i = r.length-1; i >= 0 ;i--) {
       if (i == r.length-1) { true
           aux = new ListNode(r[i].val)
       } else {
           aux = new ListNode(r[i].val,aux)
       }
   }
   
   for(let i = l.length-1; i >= 0; i--) {
       aux = new ListNode(l[i].val,aux)
   }
   
   return aux
};


oddEvenList(new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5)))))) // == 1 3 5 2 4

oddEvenList(null) // == null

oddEvenList(new ListNode(1) ) // == 1