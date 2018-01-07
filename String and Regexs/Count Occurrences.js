function solve (str, text) {
    let counter = 0;
    let index = text.indexOf(str);

    while (index !== -1){
        index++;
        counter++;
        index = text.indexOf(str, index);
    }
    return counter;
}
console.log(solve('the', 'The quick brown fox jumps over the lay dog.'));