const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/


let linkedList = new LinkedList();
let doubleList = new DoublyLinkedList();

const n = 1000;

console.time('LL:addToHead');
for (let i = 0; i < 1000; i++) {
    linkedList.addToHead(i);
}
console.timeEnd('LL:addToHead')


console.time('LL:addToTail');
for (let i = 0; i < 1000; i++) {
    linkedList.addToTail(i);
}
console.timeEnd('LL:addToTail')


console.time('DL:addToHead');
for (let i = 0; i < 1000; i++) {
    doubleList.addToHead(i);
}
console.timeEnd('DL:addToHead')


console.time('DL:addToTail');
for (let i = 0; i < 1000; i++) {
    doubleList.addToTail(i);
}
console.timeEnd('DL:addToTail')