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

#### Lists

```cs
// instantiate
var list = new List<T>();
List<T> list = new List<T>();

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

#### Queue

```cs
// instantiate
Queue<T> words = new Queue<T>();
Queue<T> numbers = new Queue<T>(IEnumerable<T>);

// properties
Queue.Count // gets the number of elements

// methods
Queue.Contains(T);
Queue.Enqueue(T);
Queue.Dequeue(T);
Queue.Peek();
Queue.ToArray();
Queue.ToString();
```

#### Stack

```cs
// instantiate
Stack<T> stack = new Stack<T>();
Stack<T> stack = new Stack<T>(ICollection);

// properties
stack.Count // gets the number of elements

// methods
stack.Contains(T);
stack.Push(T);
stack.Pop(T);
stack.Peek();
stack.ToArray();
stack.ToString();
```

#### Sorted List <TKey, TValue>

Represents a collection of key/value pairs that are sorted by key based on the associated IComparer<T> implementation.

```cs
// instantiate
SortedList<TKey,TValue> sorted = new SortedList<TKey,TValue>()
;
SortedList<TKey, TValue> sorted = new SortedList<Tkey, TValue>(IComparer<TKey>);
SortedList<TKey, TValue> sorted = new SortedList<TKey, TValue>(IDictionary<TKey, TValue>, IComparer<TKey>);


// properties
sorted.Capacity // gets or sets the number of elements that the SortedList can contain
sorted.Count // gets the number of key/value pairs in the sorted list
sorted.Item[TKey]
sorted.Keys // gets a collection containing the keys, in sorted order
sorted.Values // gets a collection containing the values

// methods
sorted.Add(TKey, TValue);
sorted.ContainsKey(TKey);
sorted.ContainsValue(TValue);
sorted.Remove(TKey);
sorted.ToString();

```

#### Dictionary
Represents a collection of keys and values.
```cs
// instantiate
Dictionary<TKey, TValue> dict = new Dictionary<TKey, TValue>();

// properties
dict.Count // gets number of key/value pairs
dict.Item[TKey] 
dict.Keys
dict.Values

dict.Add(TKey, TValue);
dict.ContainsKey(TKey);
dict.ContainsValue(TValue);
dict.Remove(TKey);
dict.ToString();
```

### LINQ


```cs
// Summing
double fullSalary = builders.Sum(x => x.builderSalary);

// Select
string[] builderNames = builders.Select(x => x.builderName).ToArray();

// Where
int[] someSalary = builders.Where(x => x.builderSalary < 100);

// Any and All
int[] arr = {1,2,3,4};
bool biggerThan5 = arr.Any(x => x>5); // false
bool any = arr.Any(); // true
bool all = arr.All(x => x<5); // true

// Max, Min & Average
int[] arr = { 1, 2, 30, 100, 5, 10 };
int maxValue = arr.Max(); // 100
int minValue = arr.Min(); // 1
int average = arr.Average(); 

// Last & First
int[] arr = { 1, 2, 3, 4, 5, 100, 200, 3, 50 };
int last_ = arr.Last(x => x>50); // 200
int last_elem = arr.Last(); // 50
int first_ = arr.First(x=> x>50); // 100
int first_elem = arr.First(); // 1

// Intersect
int[] arr = { 1, 2, 3, 4, 6 };
int[] other_ = { 1, 2, 3, 4, 5 };

arr = arr.Intersect(other_).ToArray(); // [1,2,3,4]

// Prepend and Append
int[] arr = {1,2,3,4};
arr = arr.Prepend(0).ToArray(); // [0,1,2,3,4]
arr = arr.Append(5).ToArray(); // [0,1,2,3,4,5]


// Order By -- default: asc
int[] arr = {4,3,2,1};
arr = arr.OrderBy(x => x).ToArray(); // [1,2,3,4]

// Order By Descending
int[] arr = {1,2,3,4};
arr = arr.OrderByDescending(x=> x).ToArray();

// Distinct
int[] arr = {1,2,1};
arr = arr.Distinct().ToArray(); // [1,2]

// Reverse
int[] arr = {1,5,6,7};
int[] reverse = arr.Reverse().ToArray();
```



