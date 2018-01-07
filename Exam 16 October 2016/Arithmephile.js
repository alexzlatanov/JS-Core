function solve(inputNumbers) {
    inputNumbers = inputNumbers.map(Number);
    let biggest = Number.MIN_SAFE_INTEGER;
    for(let index = 0; index<inputNumbers.length; index++){
        let currentNumber = inputNumbers[index];
        if(currentNumber >= 0 && currentNumber<10){
            let currentProduct = 1;
           for(let innerIndex = index+1; innerIndex <= index+currentNumber; innerIndex++){
               let currentMultyplier = inputNumbers[innerIndex];
               currentProduct *= currentMultyplier;
           }
           if(currentProduct > biggest){
               biggest = currentProduct;
           }
        }
    }

    console.log(biggest);
}