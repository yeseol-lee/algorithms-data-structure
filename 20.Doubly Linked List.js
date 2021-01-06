
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

     push(val) {
         var newNode = new Node(val);
         if(this.length === 0) {
             this.head = newNode;
             this.tail = newNode;
         } else {
             this.tail.next = newNode;
             newNode.prev = this.tail;
             this.tail = newNode;
        
         }
         this.length++;
         return this;
     }

     pop() {
         if(!this.head) return undefined;
         var poppedNode = this.tail;
         if(this.length === 1) {
             this.head = null;
             this.tail = null;
         } else {
             this.tail = poppedNode.prev;
             this.tail.next = null;
             poppedNode.prev = null;

         }
         this.length--;
         return poppedNode;
     }

     shift() {
         if(!this.head) return undefined;
         var oldHead = this.head;
         if(this.length === 1) {
             this.head = null;
             this.tail = null;
         } else {
             this.head = oldHead.next;
             this.head.prev = null;
             oldHead.next = null;
         }
         this.length--;
         return oldHead;
     }

     unshift(val) {
         var newNode = new Node(val);
         if(!this.length === 0) {
             this.head = newNode;
             this.tail = newNode;
         } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
         }
         this.length++;
         return this;

     }

     get(index) {
         if(index > this.length || index < 0) return null;
         if(index <= this.length/2) {
            let memory = 0;
            let node = this.head;
            while (index > memory) {
                node = node.next;
                memory++;
            }
            return node;
         } else {
             let memory = this.length - 1;
             let node = this.tail;
             while (index < memory) {
                node = node.prev;
                memory--;
             }
             return node;
         }
     }

     set(index, val) {
        var node = this.get(index);
        if(node) { 
            node.val = val;
            return true;
        } else return false;
      }
     
     insert(index, val) {
         if(index < 0 || index > this.length) return false;
         if(index === 0) return !!this.unshift(val);
         if(index === this.length) return !!this.push(val);

         var newNode = new Node(val);
         var beforeNode = this.get(index-1);
         var afterNode = beforeNode.next;

         beforeNode.next = newNode, newNode.prev = beforeNode;
         newNode.next = afterNode, afterNode.prev = newNode;
         this.length++;
         return true;
     }

     remove(index) {
         if(index < 0 || index >= this.length) return undefined;
         if(index === 0) return this.shift();
         if(index === this.length - 1) return this.pop();
         var removedNode = this.get(index);
         removedNode.prev.next = removedNode.next;
         removedNode.next.prev = removedNode.prev;
         removedNode.next = null;
         removedNode.prev = null;
         this.length--;
         return removedNode;
         
     }

}

list = new DoublyLinkedList();
list.push(4);
list.push(2);
list.push(3);
list.push(5);
list.push(6);