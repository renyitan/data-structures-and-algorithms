public class Solution {
    public int LastStoneWeight(int[] stones) {
        var q = new PriorityQueue<int, int>(Comparer<int>.Create((x,y) => y - x));
        
        foreach (var stone in stones) {
            q.Enqueue(stone, stone);
        }
        
        while (q.Count >= 2) {
            int y = q.Dequeue();
            int x = q.Dequeue();
            
            if (x != y) {
                q.Enqueue((y-x), (y-x));
                
            }
        }
        
        return q.Count == 1 ? q.Peek() : 0;
    }
}