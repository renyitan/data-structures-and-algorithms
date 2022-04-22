## Type Casting

`char` -> `int` -> `long` -> `float` -> `double`

**Implicit / Explicity Type casting**
```dotnetcli
// implicit casting -- done automatically when passing a smaller type to larger type
int n = 9;
double d = n; // int to double, output: 9.00

// explicit casting -- done manually when passing larger type to smaller type
double d = 9.78
int n = (int) d; // double to int, output: 9

```

**Type Conversion Methods**

```dotnetcli
Convert.ToBoolean();
Convert.ToDouble();
Convert.ToString();
Convert.ToInt32(); // int
Convert.ToInt64(); // long
```


