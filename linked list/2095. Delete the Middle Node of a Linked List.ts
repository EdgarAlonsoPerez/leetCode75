
// Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function deleteMiddle(head: ListNode | null): ListNode | null {
    const stack:ListNode[] = [];
    let length:number = 0;
    let middle:number = 0;
    if (head){
        length++
    }
    if (head.next) {
        stack.push(new ListNode(head.val))
        length++;
        let _head = head.next;
        stack.push(new ListNode(_head.val))
        while(_head.next){
            _head = _head.next;
            length++
            stack.push(new ListNode(_head.val))
        }
    }
    middle = Math.floor(length / 2)
    stack.splice((middle),1)
    for (let ri = stack.length-1; ri >= 0; ri--) {
        if (stack[ri-1]) {
            stack[ri-1].next = stack[ri]
        }
    }
    return stack[0] ? stack[0] : null
};

const input1 = new ListNode(1,new ListNode(3,new ListNode(4,new ListNode(7,new ListNode(1,new ListNode(2,new ListNode(6)))))))
deleteMiddle(input1) // == Output: [1,3,4,1,2,6]
// // Explanation:
// // The above figure represents the given linked list. The indices of the nodes are written below.
// // Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// // We return the new list after removing this node. 

const input2 = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4))))
deleteMiddle(input2) // Output: [1,2,4]
// // Explanation:
// // The above figure represents the given linked list.
// // For n = 4, node 2 with value 3 is the middle node, which is marked in red.

const input3 = new ListNode(2,new ListNode(1))
deleteMiddle([2,1]) // Output: [2]
// // Explanation:
// // The above figure represents the given linked list.
// // For n = 2, node 1 with value 1 is the middle node, which is marked in red.
// // Node 0 with value 2 is the only node remaining after removing node 1.

const input4 = new ListNode(1)
deleteMiddle(input4) //  Output: []