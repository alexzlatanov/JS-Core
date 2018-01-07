function calculator(a, b, str) {
    if(str == '+'){
        return a+b;
    }
    if(str == '-'){
        return a-b;
    }
    if(str == '*'){
        return a*b;
    }
    if(str == '/'){
        return a/b;
    }
}
console.log(calculator(2,3,'+'));