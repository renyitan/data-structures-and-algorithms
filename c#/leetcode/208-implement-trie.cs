public class TrieNode
{
  public Dictionary<char, TrieNode> children;
  public bool end;

  public TrieNode()
  {
    this.children = new Dictionary<char, TrieNode>();
    this.end = false;
  }
}

public class Trie
{
  public TrieNode root;

  public Trie()
  {
    this.root = new TrieNode();
  }

  public void Insert(string word)
  {
    TrieNode current = this.root;
    foreach (var ch in word)
    {
      if (!current.children.ContainsKey(ch))
      {
        current.children.Add(ch, new TrieNode());
      }
      current = current.children[ch];
    }
    current.end = true;

  }

  public bool Search(string word)
  {
    TrieNode current = this.root;
    foreach (var ch in word)
    {
      if (!current.children.ContainsKey(ch))
      {
        return false;
      }
      current = current.children[ch];
    }
    return current.end;

  }

  public bool StartsWith(string prefix)
  {
    TrieNode current = this.root;
    foreach (var ch in prefix)
    {
      if (!current.children.ContainsKey(ch))
      {
        return false;
      }
      current = current.children[ch];
    }
    return true;

  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.Insert(word);
 * bool param_2 = obj.Search(word);
 * bool param_3 = obj.StartsWith(prefix);
 */