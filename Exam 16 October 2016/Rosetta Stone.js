function solve(input) {
    let templateMatrixSide = Number(input[0]);
    let teplateMatrix = [];
    for(let index = 1; index<1 + templateMatrixSide; index++){
           let currentRow = input[index];
           teplateMatrix.push(currentRow.split(' ').map(Number));

    }
    let encodedMatrix = [];
    for(let index = 1 + templateMatrixSide; index < input.length; index++){
        let currentRow = input[index];
        encodedMatrix.push(currentRow.split(' ').map(Number));
    }
    let templateMatrixRows = templateMatrixSide;
    let teplateMatrixCols = teplateMatrix[0].length;

    for(let encodedRow = 0; encodedRow < encodedMatrix.length; encodedRow+=templateMatrixRows){
        let currenetRow = encodedMatrix[encodedRow];
        for(let encodedCol = 0; encodedCol< encodedMatrix[encodedRow].length; encodedCol+=teplateMatrixCols){
            let currentEncodedNumber = encodedMatrix[encodedRow][encodedCol];

            for(let teplateRow = 0; teplateRow<teplateMatrix.length; teplateRow++){
                let currentTeplateRow = teplateMatrix[teplateRow];
                for(let teplateCol = 0; teplateCol<teplateMatrix[teplateRow].length; teplateCol++){
                    let currentTeplateNumber = teplateMatrix[teplateRow][teplateCol];


                    let targetRow = encodedRow + teplateRow;
                    let targetCol = encodedCol + teplateCol;

                    if(targetCol < encodedMatrix[encodedRow].length && teplateRow < encodedMatrix.length){
                        let summedNumber = encodedMatrix[targetRow][targetCol] + teplateMatrix[teplateRow][teplateCol];
                        summedNumber %= 27
                        if(summedNumber === 0){
                            encodedMatrix[targetRow][targetCol] = ' ';
                        }else{
                            encodedMatrix[targetRow][targetCol] = String.fromCharCode(summedNumber + 64);
                        }
                    }
                }
            }
        }
    }
    let output = '';
    encodedMatrix.forEach(function (element) {
        element.forEach(function (letter) {
            output += letter;
        })
    });
    console.log(output.trim());
}