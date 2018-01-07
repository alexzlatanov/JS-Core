function solve (input) {
    input=input.map(Number);
    let startingYield = input[0];
    let takenSpice = 0;
    let days = 0;
    while (startingYield >= 100){
        takenSpice += startingYield - 26;
        startingYield -= 10;
        days++;

    }
    if(takenSpice >= 26){
        takenSpice-=26;
    }
    console.log(days);
    console.log(takenSpice);
}
solve(['111']);