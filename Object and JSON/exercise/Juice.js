function solve (dataRows) {
    let flavorObj = {};
    let bottlesObj = {};
    for(let dataRow of dataRows){
        let [juiceName, quantity] = dataRow.split(/\s=>\s/g);
        quantity = Number(quantity);
        if(!flavorObj.hasOwnProperty(juiceName)){
            flavorObj[juiceName] = quantity;
        }else{
            flavorObj[juiceName] += quantity;
        }

        quantity = flavorObj[juiceName];
        if(quantity >= 1000){
            let bottlesCount = Math.floor(quantity / 1000);
                bottlesObj[juiceName] = bottlesCount;
        }
    }

    for(let juiceName in bottlesObj){
        console.log(`${juiceName} => ${bottlesObj[juiceName]}`)
    }
}
solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])