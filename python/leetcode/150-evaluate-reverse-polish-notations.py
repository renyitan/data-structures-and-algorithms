class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operators = ['+', '-', '*', '/']
        stack = []
        res = 0

        for token in tokens:
            if token in operators:
                op2 = int(stack.pop())
                op1 = int(stack.pop())

                if (token == '+'):
                    stack.append(op1 + op2)
                elif (token == '-'):
                    stack.append(op1-op2)
                elif (token == '*'):
                    stack.append(op1*op2)
                elif (token == '/'):
                    if op1 == 0 or op2 == 0:
                        stack.append(0)
                    else:
                        stack.append(op1/op2)
            else:
                stack.append(int(token))

        return int(stack[0])
