'use strict';
$_$wp(1);
class ListNode {
    constructor(data) {
        $_$wf(1);
        $_$w(1, 0), this.data = data;
        $_$w(1, 1), this.next = null;
    }
}
class LinkedList {
    constructor() {
        $_$wf(1);
        $_$w(1, 2), this.head = null;
    }
    printList() {
        $_$wf(1);
        let current = ($_$w(1, 3), this.head);
        if ($_$w(1, 4), !current) {
            return $_$w(1, 5), 'Empty';
        } else {
            let values = ($_$w(1, 6), `List: `);
            $_$w(1, 7), values += current.data;
            while ($_$w(1, 8), current.next) {
                $_$w(1, 9), current = current.next;
                $_$w(1, 10), values += `-${ current.data }`;
            }
            return $_$w(1, 11), values;
        }
    }
    add(data) {
        $_$wf(1);
        if ($_$w(1, 12), !this.head) {
            $_$w(1, 13), this.head = new ListNode(data);
        } else {
            let current = ($_$w(1, 14), this.head);
            while ($_$w(1, 15), current.next) {
                $_$w(1, 16), current = current.next;
            }
            $_$w(1, 17), current.next = new ListNode(data);
        }
    }
    remove(index) {
        $_$wf(1);
        let current = ($_$w(1, 18), this.head);
        let counter = ($_$w(1, 19), 0);
        if ($_$w(1, 20), !current) {
            return $_$w(1, 21);
        } else if ($_$w(1, 22), !index) {
            $_$w(1, 23), this.head = current.next;
            $_$w(1, 24), current.data = null;
            $_$w(1, 25), current.next = null;
        } else {
            let prev = $_$w(1, 26);
            while ($_$w(1, 27), ($_$w(1, 28), counter < index) && ($_$w(1, 29), current.next)) {
                $_$w(1, 30), prev = current;
                $_$w(1, 31), current = current.next;
                $_$w(1, 32), counter++;
            }
            if ($_$w(1, 33), index > counter) {
                return $_$w(1, 34);
            }
            $_$w(1, 35), prev.next = current.next;
            $_$w(1, 36), current.data = null;
            $_$w(1, 37), current.next = null;
        }
    }
    insert(data, index) {
        $_$wf(1);
        let count = ($_$w(1, 38), 0);
        let current = ($_$w(1, 39), this.head);
        let newNode = ($_$w(1, 40), new ListNode(data));
        if ($_$w(1, 41), ($_$w(1, 42), !this.head) || ($_$w(1, 43), !index)) {
            $_$w(1, 44), newNode.next = this.head;
            $_$w(1, 45), this.head = newNode;
        } else {
            while ($_$w(1, 46), ($_$w(1, 47), current.next) && ($_$w(1, 48), count < index - 1)) {
                $_$w(1, 49), current = current.next;
                $_$w(1, 50), count++;
            }
            $_$w(1, 51), newNode.next = current.next;
            $_$w(1, 52), current.next = newNode;
        }
    }
}
let ll = ($_$w(1, 53), new LinkedList());
$_$w(1, 54), ll.add('zero');
$_$w(1, 55), ll.add('one');
$_$w(1, 56), ll.add('two');
$_$w(1, 57), ll.add('three');
$_$w(1, 58), ll.add('four');
$_$w(1, 59), ll.add('five');
$_$w(1, 60), ll.add('six');
$_$w(1, 61), ll.add('seven');
$_$w(1, 62), ll.insert('inserted', 0);
$_$w(1, 63), ll.insert('|five|', 5);
$_$w(1, 64), $_$tracer.log(ll.printList(), 'll.printList()', 1, 64);
$_$w(1, 65), ll.remove(6);
$_$w(1, 66), ll.remove(1);
$_$w(1, 67), $_$tracer.log(ll.printList(), 'll.printList()', 1, 67);
$_$w(1, 68), ll.remove();
$_$w(1, 69), $_$tracer.log(ll.printList(), 'll.printList()', 1, 69);
$_$w(1, 70), $_$tracer.log(ll.printList(), 'll.printList()', 1, 70);
$_$wpe(1);