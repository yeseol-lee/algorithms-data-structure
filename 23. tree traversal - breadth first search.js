//Queue Class
class NodeQ {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new NodeQ(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
         
    }

    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

//Binary Search Tree Class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                 //if value is same with current value
                 if(value === current.value) return undefined;
                 
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }

                } else if (value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                   
                } 
                
            }
        }
    }

    //return true if there is "value"
    find(value) {
        if(this.root === null) return false;
        var currentNode = this.root;
        
        //keep looping until return true or false
        while(true) {
            if(value < currentNode.value) {
                if (currentNode.left === null) return false;
                else {
                    currentNode = currentNode.left;
                }
            } else if (value > currentNode.value) {
                if(currentNode.right === null) return false;
                else {
                    currentNode = currentNode.right;
                }
            //if found value, return true!
            } else if (value === currentNode.value) {
                return true;
            }
        }
    }

    find(value) {
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}

var tree = new BinarySearchTree();
tree.insert(90);
tree.insert(88);
tree.insert(100);
tree.insert(1);
tree.insert(50);
tree.insert(98);
tree.insert(121);
tree.insert(77);
tree.insert(32);
tree.insert(17);
tree.insert(52);
tree.insert(123);

//Breadth First Search
function BFS(tree) {
    var queue = new Queue();
    var visited = [];
    var currentNode = tree.root;
    queue.enqueue(currentNode);

    while (queue.first) {
        currentNode = queue.first.value;
        
        //if a node exists at left or right of current node
        //add node to the queue
        if(currentNode.left != null) {
            queue.enqueue(currentNode.left);
        }
        if(currentNode.right != null) {
            queue.enqueue(currentNode.right);
        }
        //add value of visited node to array "visited"
        visited.push(currentNode.value);

        //dequeue first element
        queue.dequeue();
    }

    return visited;
}
