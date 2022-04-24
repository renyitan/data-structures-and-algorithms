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