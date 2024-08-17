import React from "react";

const Index = () => {
  // Queue
  interface ArrayQueue {
    items: (number | string)[];
    enqueue: (element: string | number) => void;
    dequeue: () => number | string | undefined;
    isEmpty: () => boolean;
    peek: () => null | number | string;
    size: () => number;
    print: () => void;
  }

  const queue: ArrayQueue = {
    items: [],

    enqueue(element) {
      this.items.push(element);
    },

    dequeue() {
      return this.items.shift();
    },

    isEmpty() {
      return this.items.length === 0;
    },

    peek() {
      if (!this.isEmpty) {
        return this.items[0];
      }
      return null;
    },

    size() {
      return this.items.length;
    },

    print() {
      console.log(this.items.toString());
    },
  };

  //   Optimize way
  type Queue = {
    item: { [key: number]: string | number };
    rear: number;
    front: number;
    enqueue: (element: string | number) => void;
    optimizeDequeue: () => string | number | undefined;
    isEmpty: () => boolean;
    peek: () => null | number | string;
    size: () => number;
    print: () => void;
  };

  const objectQueue: Queue = {
    item: {},
    rear: 0,
    front: 0,

    enqueue(element: string | number) {
      this.item[this.rear] = element;
      this.rear++;
    },

    optimizeDequeue() {
      if (this.front === this.rear) {
        return undefined; // Queue is empty
      }
      const dequeuedItem = this.item[this.front];
      delete this.item[this.front];
      this.front++;
      return dequeuedItem;
    },

    isEmpty() {
      return this.rear - this.front === 0;
    },

    peek() {
      return this.item[this.front];
    },

    size() {
      return this.rear - this.front;
    },

    print() {
      console.log(this.item);
    },
  };

  //   circular Queue
  interface CircularQueueType {
    item: (string | number)[];
    rear: number;
    front: number;
    capacity: number;
    enqueue: (element: string | number) => void;
    optimizeDequeue: () => string | number | undefined;
    isEmpty: () => boolean;
    peek: () => string | number | null;
    size: () => number;
    print: () => void;
  }

  // const circularQueue: CircularQueueType={

  //     item: new Array(capacity),
  //     rear: 0,
  //     front: 0,
  //     capacity,
  // }

  return <></>;
};

interface CircularQueueType {
  item: (string | number)[];
  rear: number;
  front: number;
  capacity: number;
  enqueue: (element: string | number) => void;
  optimizeDequeue: () => string | number | undefined;
  isEmpty: () => boolean;
  peek: () => string | number | null;
  size: () => number;
  print: () => void;
}

function createCircularQueue(capacity: number): CircularQueueType {
  const queue: CircularQueueType = {
    item: new Array(capacity),
    rear: 0,
    front: 0,
    capacity,

    enqueue(element: string | number) {
      if ((this.rear + 1) % this.capacity === this.front) {
        throw new Error("Queue is full");
      }
      this.item[this.rear] = element;
      this.rear = (this.rear + 1) % this.capacity;
    },

    optimizeDequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const dequeuedItem = this.item[this.front];
      this.item[this.front] = undefined as any;
      this.front = (this.front + 1) % this.capacity;
      return dequeuedItem;
    },

    isEmpty() {
      return this.front === this.rear;
    },

    peek() {
      return this.isEmpty() ? null : this.item[this.front];
    },

    size() {
      return (this.rear + this.capacity - this.front) % this.capacity;
    },

    print() {
      console.log(this.item);
    },
  };

  return queue;
}

// Usage
const circularQueue = createCircularQueue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(20);
console.log(circularQueue.optimizeDequeue());
console.log(circularQueue.size());
circularQueue.print(); 

export default Index;
