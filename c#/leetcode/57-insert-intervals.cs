public class Solution {
    public int[][] Insert(int[][] intervals, int[] newInterval) {
        var intervalsList = new List<int[]>();
        
        foreach(var interval in intervals) {
            intervalsList.Add(interval);
        }
        intervalsList.Add(newInterval);
        var sortedList = intervalsList.OrderBy((interval) => interval[0]).ToArray();
        
        var res = new List<int[]>();
        foreach(var interval in sortedList) {
            if (res.Count == 0 || res[^1][1] < interval[0]) {
                res.Add(interval);
            }
            else {
                res[^1][1] = Math.Max(res[^1][1], interval[1]);
            }
        }
        
        return res.ToArray();
    }
}