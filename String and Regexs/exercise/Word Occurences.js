function wordOccurences(input, str) {
    let count = 0;
    let regex = new RegExp("\\b"+str+"\\b", "gi");
    let match = regex.exec(input);

    while(match){
        count++;
        match= regex.exec(input);
    }
    console.log(count);

}