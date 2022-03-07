from numbers import Number


def isPalindrome(num: int):
    num_str = str(num)
    return num_str == num_str[::-1]


print(isPalindrome(121))
