module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (stack.length === 0) {
            stack.push(str[i]);
            continue;
        } 

        let hasFound = false;
        for(let k = 0; k < bracketsConfig.length; k++) {
            if (stack[stack.length-1] === bracketsConfig[k][0] && str[i] === bracketsConfig[k][1]) {
                stack.pop();
                hasFound = true;
                break;
            } 
        }
        if(!hasFound) {
            stack.push(str[i]);
        }
    }

    return stack.length === 0;

}

