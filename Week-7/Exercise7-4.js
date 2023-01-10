const parenthesisChecker = (arr) => {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }
        if (stack.length == 0) return false;
        let parenthesis;
        switch (x) {
            case ')':
                parenthesis = stack.pop();
                if (parenthesis == '{' || parenthesis == '[')
                    return false;
                break;

            case '}':
                parenthesis = stack.pop();
                if (parenthesis == '(' || parenthesis == '[')
                    return false;
                break;

            case ']':
                parenthesis = stack.pop();
                if (parenthesis == '{' || parenthesis == '(')
                    return false;
                break;
        }
    }
    return (stack.length == 0)
}
const arr = "[({})]";
if (parenthesisChecker(arr)) console.log(true);

else
    console.log(false);