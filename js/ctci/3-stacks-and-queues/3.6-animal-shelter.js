class Queue {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  enqueue(value) {
    this.data.push(value);
    this.size++;
  }

  dequeue() {
    this.size--;
    return this.data.shift();
  }

  length() {
    return this.size;
  }

  print() {
    console.log(this.data);
  }

  isEmpty() {
    return this.size === 0;
  }

  getFront() {
    return this.isEmpty() ? null : this.data[0];
  }

  getLast() {
    return this.isEmpty() ? null : this.data[this.size - 1];
  }
}

const ANIMALS = {
  CAT: 'cat',
  DOG: 'dog',
};

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
    this.count = 0;
  }

  enqueue(data) {
    const { type, name } = data;

    if (type === ANIMALS.CAT) {
      this.cats.enqueue({ name, id: this.count++ });
    }
    if (type === ANIMALS.DOG) {
      this.dogs.enqueue({ name, id: this.count++ });
    }
  }

  dequeueDog() {
    return this.dogs.dequeue();
  }
  dequeueCat() {
    return this.cats.dequeue();
  }

  dequeueAny() {
    const cat = this.cats.getFront();
    const dog = this.dogs.getFront();
    if (cat.id < dog.id) {
      return this.cats.dequeue();
    } else {
      return this.dogs.dequeue();
    }
  }
}

const animalShelter = new AnimalShelter();
animalShelter.enqueue({ type: ANIMALS.DOG, name: 'dogo' });
animalShelter.enqueue({ type: ANIMALS.CAT, name: 'cat1' });
animalShelter.enqueue({ type: ANIMALS.CAT, name: 'cat2' });
animalShelter.enqueue({ type: ANIMALS.DOG, name: 'dog1' });
animalShelter.enqueue({ type: ANIMALS.DOG, name: 'dog2' });
animalShelter.enqueue({ type: ANIMALS.DOG, name: 'dog3' });
console.log(animalShelter.dequeueAny())
