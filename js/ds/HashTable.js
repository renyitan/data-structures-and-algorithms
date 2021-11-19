class HashTable {
  constructor() {
    this.size = 0;
    this.table = [];
  }

  _hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index;
  }

  set(key, value) {
    let index = this._hash(key);
    if (this.table[index]) {
      this.table[index].push(value)
    } else {
      this.table[index] = [value]
    }
    this.size++;
  }

  get(key) {
    let index = this._hash(key);
    return this.table[index];
  }

  removeKey(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      this.size -= this.table[index].length;
      this.table[index] = undefined;

    }
  }
}

const hash = new HashTable();
hash.set('a', 5);
hash.set('a', 7);
hash.set('a', 8);
hash.set('a', 4);
hash.set('a', 3);
hash.removeKey('a')
console.log(hash.size)
