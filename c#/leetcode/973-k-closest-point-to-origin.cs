public class Solution {
    public int[][] KClosest(int[][] points, int k) {
        var heap = new PriorityQueue<int, double>();
        
        for (int i=0; i < points.Length; i++) {
            int x = points[i][0], y = points[i][1];
            double dist = Math.Sqrt(Math.Pow(x, 2)+ Math.Pow(y, 2));
            heap.Enqueue(i, dist);
        }
        
        int n = 0;
        var res = new List<int[]>();
        while (n<k) {
            int index = heap.Dequeue();
            res.Add(points[index]);
            n++;
        }
        
        return res.ToArray();
    }
}