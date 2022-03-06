def string_compression(s):

    compressed = []
    counter = 0

    for i in range(len(s)):
        if i != 0 and s[i] != s[i-1]:
            compressed.append(s[i-1] + str(counter))
            counter = 0
        counter += 1

    if counter:
        compressed.append(s[-1] + str(counter))

    new_string = "".join(compressed)
    return s if len(new_string) >= len(s) else new_string


print(string_compression('aabcccccaaa')) #a2b1c5a3
print(string_compression('abcdef')) #abcdef
print(string_compression('aabb')) #aabb
print(string_compression('aaa')) #a3