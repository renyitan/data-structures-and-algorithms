class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        if s1 == s2:
            return True

        s1, s2 = list(s1), list(s2)
        if len(s1) != len(s2):
            return False

        swap_index = []

        for i in range(len(s1)):
            if s1[i] != s2[i]:
                swap_index.append(i)
                if len(swap_index) > 2:
                    return False
        if len(swap_index) < 2:
            return False

        first, second = swap_index
        s1[first], s1[second] = s1[second], s1[first]

        return s1 == s2
