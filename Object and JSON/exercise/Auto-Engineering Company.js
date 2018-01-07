function solve(input) {
    let total = new Map();
    for(let i=0; i<input.length; i++){
        let current = input[i].split(' | ');
        let carBrand = current[0];
        let carModel = current[1];
        let producedCars = Number(current[2]);

        if(!total.has(carBrand)){
            total.set(carBrand, new Map);
        }

        if(!total.get(carBrand).has(carModel)){
            total.get(carBrand).set(carModel, 0);
        }
        total.get(carBrand).set(carModel, total.get(carBrand).get(carModel) + producedCars);
    }

    for(let [carBrand, carModel] of total){
        console.log(carBrand);
        for(let [model,quantity] of carModel){
            console.log("###" + model + " -> " + quantity);
        }
    }
}