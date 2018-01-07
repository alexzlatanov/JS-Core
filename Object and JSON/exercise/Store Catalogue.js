function solve(dataRows) {
    let initialMap = new Map();
    for(let datarow of dataRows){
        let [productName, productPrice] = datarow.split(/\s:\s/g);
        let initial =  productName[0];
        if(!initialMap.has(initial)){
            initialMap.set(initial, new Map());
        }

        let productsMap = initialMap.get(initial);
        productsMap.set(productName, productPrice);
    }
    let sortedInitials = [...initialMap.entries()].sort(sortAlpha);
    for(let [initial, productsMap] of sortedInitials){
        console.log(initial);
        let sortedProducts = [...productsMap.entries()].sort(sortAlpha);
        for(let [name, price] of sortedProducts){
            console.log(` ${name}: ${price}`);
        }

    }

    function sortAlpha(a,b) {
        return a[0].localeCompare(b[0]);
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'

]);