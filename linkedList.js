class LinkedList {
    constructor(value, link){
        this.value = value;
        this.link = link;   
    }
}

const createLinkedList = arr =>{
    let root = null;
    let index = 0;
    for(let value of arr){
        if(index === 0) {
            let node = new LinkedList(value, null);
            root = node;
        }
        else{
            addToLinkedList(root, value);
        }
        index++;
    }
    return root;
}

const addToLinkedList = (root, value) =>{
    if(!root.link){
        root.link = new LinkedList(value, null);
        return;
    } 
    let node = {...root};
    if(node.link){
        addToLinkedList(node.link, value);
    }
}

const traverseLinkedList = root => {
    let node = {...root};
    if(node.link){
        console.log(node.value);
        traverseLinkedList(node.link);
    }else{
        console.log(node.value);
    }
}

const deleteFromLinkedList = (root, value)=>{
    if(root.value === value) return true;
    let node = root;
    let isFound = deleteFromLinkedList(node.link, value);
    if(isFound) node.link = node.link.link;
    return false;
}

//1->2->3->4->5->6
//6->5->4->3->2->1
const reverseLinkedList = node =>{
    let prev = null;
    let current = node;
    let next = null;
    while(current){
        next = current.link;
        current.link = prev;
        prev = current;
        current = next;
    }
    return prev;
}

const reverseRecursively = root =>{
    if(!root.link) return root;
    let head = reverseRecursively(root.link);
    root.link.link = root;
    root.link = null;
    return head;
}

let root = createLinkedList([1,2,3,4,5,6]);
deleteFromLinkedList(root, 3);
//let x = reverseLinkedList(root);
let x = reverseRecursively(root);
traverseLinkedList(x);
