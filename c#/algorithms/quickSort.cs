using System;

public class Program
{
  public static void Main()
  {
    int[] nums = new int[] { 7, 2, 1, 6, 8, 5, 3, 4 };
    quickSort(nums, 0, nums.Length - 1);
    foreach (int num in nums)
    {
      Console.WriteLine(num.ToString());
    }
  }

  public static void quickSort(int[] arr, int start, int end)
  {
    if (start >= end)
    {
      return;
    }
    else
    {
      int pIndex = partition(arr, start, end);
      quickSort(arr, start, pIndex - 1);
      quickSort(arr, pIndex + 1, end);
    }
  }

  public static int partition(int[] arr, int start, int end)
  {
    int pIndex = start;
    int pivot = arr[end];
    for (int i = start; i <= end; i++)
    {
      if (arr[i] < pivot)
      {
        int temp = arr[i];
        arr[i] = arr[pIndex];
        arr[pIndex] = temp;
        pIndex++;
      }
    }
    int swap = arr[pIndex];
    arr[pIndex] = arr[end];
    arr[end] = swap;
    return pIndex;
  }
}