## Type Casting

`char` -> `int` -> `long` -> `float` -> `double`

**Implicit / Explicity Type casting**
```cs
// implicit casting -- done automatically when passing a smaller type to larger type
int n = 9;
double d = n; // int to double, output: 9.00

// explicit casting -- done manually when passing larger type to smaller type
double d = 9.78
int n = (int) d; // double to int, output: 9

```

**Type Conversion Methods**

```cs
Convert.ToBoolean();
Convert.ToDouble();
Convert.ToString();
Convert.ToInt32(); // int
Convert.ToInt64(); // long
```

## Arrays
```cs
// 1-dimensional arrays
int[] array = new int[5];
int[] array1 = new int[] { 1, 3, 5, 7, 9 };
int[] array2 = { 1, 3, 5, 7, 9 }; // implicit typed array


// multi-dimensional arrays
int[,] array = new int[4, 2];
int[,,] array1 = new int[4, 2, 3];
int[,] array2D = new int[,] { { 1, 2 }, { 3, 4 }, { 5, 6 }, { 7, 8 } };
int[,] array2Da = new int[4, 2] { { 1, 2 }, { 3, 4 }, { 5, 6 }, { 7, 8 } };

System.Console.WriteLine(array2D[0, 0]); // 1
System.Console.WriteLine(array2D[1, 0]); // 3

// jagged array
int[][] jaggedArray = new int[3][]; // 1D array of arrays

// before you can used jagged array, its elements must be initialised. 
jaggedArray[0] = new int[5];
jaggedArray[1] = new int[] { 0, 2, 4, 6 };


// shorthand initialisation
int[][] jaggedArray3 =
{
    new int[] { 1, 3, 5, 7, 9 },
    new int[] { 0, 2, 4, 6 },
    new int[] { 11, 22 }
};
```

### Collections

LINQ features can be used with any type that implements `IEnumerable` or `IEnumerable<T>`

**Commonly Used Collections (`IList`)**
- List<T>
- Queue<T>
- Stack<T>

**Commonly Used Collections (`IDictionary`)**
- SortedList<TKey, TValue>
- Dictionary<TKey, TValue>
- HashSet<T>
- SortedSet<T>

### Lists
```cs
var list = new List<string>();
list.Add(T); // adds object to end of list
list.Contains(T); // determines if element is in the list
list.Sort() // sorts the elements in the entire List using default comparer
list.Remove(T); // removes first occurence of specific object
list.Reverse(); // Reverses the order of the elements
list.ToArray(); // copies the elements of list to new array
list.ToString(); // returns a string representing the current object
list.Exists(Predicate<T>) // determine whether the List<T> contains elements that match the conditions of predicate
list.Exists(e => e.EndsWith('saurus'));
list.Any(Predicate<T>)
list.FindAll(Predicate<T>); // searches for an element that matches the conditions defined by specific predicate, returns first occurence
```
