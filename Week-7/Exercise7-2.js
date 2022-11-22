var head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
function rotateLinkedList(k) {
    if (k == 0)
    return;
    var current = head;
    var count = 1;
    while (count < k) {
        current = current.next;
        count++;
    }
    if (current == null)
    return;
    var kth = current;
    while (current.next != null)
    current = current.next;
    current.next = head;
    head = kth.next;
    kth.next = null;
}
function push(new_data) {
var new_node = new Node(new_data);
new_node.next = head;
    head = new_node;
}
function printList() {
    var temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
}
let arr = [10, 20, 30, 40, 50, 60]
for (let i = 0; i < arr.length; i++)
push(arr[i]);
printList();
rotateLinkedList(2);
console.log("Rotated Linked List");
printList();

