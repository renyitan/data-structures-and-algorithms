class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False


class Trie:
    def __init__(self):
        """Initialize Trie"""
        self.root = TrieNode()
    
    def insert(self, word):
        """Insert word into Trie"""
        current = self.root
        for char in word:
            if char not in current.children:
                current.children[char] = TrieNode()
            current = current.children[char]
        current.end = True
    
    def search(self, word):
        """Returns if word is in the trie"""
        current = self.root
        for char in word:
            if char not in current.children:
                return False
            current = current.children[char]
        return current.end
    
    def startsWith(self, word):
        current = self.root
        for char in word:
            if char not in current.children:
                return False
            current = current.children[char]
        return True


if __name__ == "__main__":
    t = Trie()
    t.insert('hi')
    print(t.search('hi'))
    print(t.startsWith('h'))
