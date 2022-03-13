from numbers import Number


def isPalindrome(num: int):
    num = str(num)
    return num == num[::1]

print(isPalindrome(121))
