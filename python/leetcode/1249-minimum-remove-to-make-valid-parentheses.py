class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:

        remove_indices = set()
        stack = []

        for i, c in enumerate(s):

            if c != "(" and c != ")":
                continue

            if c == "(":
                stack.append(i)
            elif not stack:
                remove_indices.add(i)
            else:
                stack.pop()
        remove_indices = remove_indices.union(set(stack))
        new_string = []
        for i, c in enumerate(s):
            if i not in remove_indices:
                new_string.append(c)
        return "".join(new_string)
