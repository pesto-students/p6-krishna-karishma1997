class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}
function reverseLInkeddList(node){
    var prev=null;
    var current=node;
    var next=null;
    while(current!=null){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    node = prev;
    return node;
}
function printList(node){
    while(node != null){
        console.log(node.data);
        node=node.next
    }
}
var a=new Node(10);
const b=new Node(20);
const c=new Node(30);
const d=new Node(40);
a.next=b;
b.next=c;
c.next=d;
printList(a);
a=reverseLInkeddList(a);
console.log("Reverse list");
printList(a);