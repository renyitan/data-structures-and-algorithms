from collections import Counter


def check_permutation_pythonic(str1, str2):
    if len(str1) != len(str2):
        return False

    print(Counter(str1) == Counter(str2))

print('check_permutation_pythonic:')
print(check_permutation_pythonic('sdf', 'str'))


def check_permutation_with_dict(str1, str2):
    hash = {}

    if len(str1) != len(str2):
        return False

    for i in range(len(str1)):
        hash[str1[i]] = 1

    for i in range(len(str2)):
        if (str2[i] in hash):
            hash[str2[i]] = hash[str2[i]] - 1
        else:
            return False

    return True if sum(hash.values()) == 0 else False

print('check_permutation_with_dict:')
print(check_permutation_with_dict('str', 'rts'))  # True
print(check_permutation_with_dict('str', 'rfd'))  # False

# using sorted list


def check_permutation_sorted(s1, s2):
    if(len(s1) != len(s2)):
        return False

    s1_sorted, s2_sorted = sorted(s1), sorted(s2)

    for i in range(len(s1)):
        if s1_sorted[i] != s2_sorted[i]:
            return False

    return True

print('check_permutation_sorted:')
print(check_permutation_sorted('str', 'rts'))
print(check_permutation_sorted('str', 'rfd'))
