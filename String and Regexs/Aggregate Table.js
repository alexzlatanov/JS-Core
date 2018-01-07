function aggregateTable(input) {
    let rezult = [];
    let sum = 0;
    for(let line of input){
        let townData = line.split('|'),
            townName = townData[1].trim();
        income = Number(townData[2].trim());
        rezult.push(townName);
        sum += income;
    }
    console.log(rezult.join(', ') + '\n' + sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
    ]);