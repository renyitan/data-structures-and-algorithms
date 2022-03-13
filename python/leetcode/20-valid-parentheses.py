class Solution:
    def isValid(self, s: str) -> bool:
        open_bracket = ['(', '[', '{']
        closed_bracket = [')', ']', '}']
        
        if len(s) <= 1:
            return False
        
        stack = []
        
        for i in range(len(s)):
            if s[i] in open_bracket:
                stack.append(s[i])
            elif s[i] in closed_bracket:
                if len(stack) == 0:
                    
                    return False
                
                top = stack.pop()
                if s[i] == ')' and top != '(':
                    return False
                if s[i] == ']' and top != '[':
                    return False
                if s[i] == '}' and top != '{':
                    return False
                    
        return len(stack) == 0
                    
        