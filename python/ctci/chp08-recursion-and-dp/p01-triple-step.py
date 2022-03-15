def tripleStep(n):

    if n == 0:
        return 0
    if n == 1:
        return 1
    if n == 2:
        return 2
    if n == 3:
        return 4
    f = [None] * (n+1)
    f[0] = 0
    f[1] = 1
    f[2] = 2
    f[3] = 4
    for i in range(4, len(f)):
        f[i] = f[i-1] + f[i-2] + f[i-3]

    return f[n]


print(tripleStep(1))
print(tripleStep(2))
print(tripleStep(3))
print(tripleStep(4))
print(tripleStep(7))
print(tripleStep(10))
