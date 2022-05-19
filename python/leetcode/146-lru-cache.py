from collections import OrderedDict


class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.hash = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.hash:
            return -1
        self.hash.move_to_end(key)
        return self.hash[key]

    def put(self, key: int, value: int) -> None:

        if key in self.hash:
            self.hash[key] = value
            self.hash.move_to_end(key)

        self.hash[key] = value

        if len(self.hash) > self.capacity:
            self.hash.popitem(last=False)


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
