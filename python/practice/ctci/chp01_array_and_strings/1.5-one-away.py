def one_away(s1, s2):
    if (abs(len(s1) - len(s2)) > 1):
        return False

    hash = {}

    for i in range(len(s1)):
        hash[s1[i]] = 1

    for i in range(len(s2)):
        if (s2[i] in hash):
            del hash[s2[i]]
        else:
            hash[s2[i]] = 1

    return True if sum(hash.values()) == 1 else False


print(one_away('ple', 'pale'))  # True
print(one_away('ple', 'paale'))  # False
