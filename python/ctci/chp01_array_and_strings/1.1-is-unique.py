# standard
def is_unique_using_set(str):
    s = set()
    for i in range(len(str)):
        if str[i] in s:
            return False
        else:
            s.add(str[i])
    return True


print(is_unique_using_set('sdeft'))  # True
print(is_unique_using_set('sssss'))  # False


def is_unique_pythonic(str):
    return len(set(str)) == len(str)


print(is_unique_pythonic('sdeft'))  # True
print(is_unique_pythonic('sssss'))  # False
