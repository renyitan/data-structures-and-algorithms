public class Solution {
    public int[][] Insert(int[][] intervals, int[] newInterval) {
        var intervalList = new List<int[]>(intervals);
        intervalList.Add(newInterval);
        intervalList = intervalList.OrderBy(x => x[0]).ToList();
        
        var merged = new List<int[]>();
        foreach(var interval in intervalList) {
            if (merged.Count == 0 || interval[0] > merged[^1][1]) {
                merged.Add(interval);
            }
            else {
                merged[^1][1] = Math.Max(merged[^1][1], interval[1]);
            }
        }
        
        return merged.ToArray();
    }
}