public class Solution
{
  public int FindKthLargest(int[] nums, int k)
  {
    var queue = new PriorityQueue<int, int>();

    foreach (int num in nums)
    {
      queue.Enqueue(num, num);
      if (queue.Count <= k) continue;
      queue.Dequeue();
    }

    return queue.Peek();

  }
}

public class Solution
{
  public int FindKthLargest(int[] nums, int k)
  {
    var q = new PriorityQueue<int, int>();

    for (int i = 0; i < nums.Length; i++)
    {
      q.Enqueue(nums[i], nums[i]);
    }

    var res = new List<int>();
    for (int j = 0; j < (nums.Length - k); j++)
    {
      q.Dequeue();
    }

    return q.Peek();
  }
}