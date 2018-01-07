function solve(dataRows) {

    let airport = new Map();
    let townStatistics = new Map();
    let townPlane = new Map();

    for(let dataRow of dataRows){
        let [planeId, town, passengers, action] = dataRow.split(/\s+/g);

        passengers = Number(passengers);
        if(action === 'land'){
            if(airport.has(planeId)){
                continue;
            }else{
                airport.set(planeId, 'land');
            }
            if(!townStatistics.has(town)){
                townStatistics.set(town, [0,0]);
            }

            if(!townPlane.has(town)){
                townPlane.set(town, new Set());
            }

            townStatistics.get(town)[0] += passengers;
            townPlane.get(town).add(planeId);
        }else{
            if(airport.has(planeId)){
                airport.delete(planeId);
            }else{
                continue;
            }

            if(!townStatistics.has(town)){
                townStatistics.set(town, [0,0]);
            }

            if(!townPlane.has(town)){
                townPlane.set(town, new Set());
            }

            townStatistics.get(town)[1] += passengers;
            townPlane.get(town).add(planeId);
        }

    }

    let sortedAirport = [...airport.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    console.log('Planes left:');
    for(let [planeId] of sortedAirport){
        console.log(`- ${planeId}`);
    }

    let sortedTowns = [...townStatistics.entries()].sort(sortTown);

    for(let [town, statistics] of sortedTowns){
        console.log(town);
        console.log(`Arrivals: ${statistics[0]}`);
        console.log(`Departures: ${statistics[1]}`);
        let sortedPlanes = [...townPlane.get(town).values()]
            .sort((a, b) => a.localeCompare(b));
        console.log("Planes:");
        for(let planeId of sortedPlanes){
            console.log(`-- ${planeId}`);
        }
    }

    function sortTown(a ,b) {
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];

        let firstCriteria = bArrivals - aArrivals;

        if(firstCriteria !== 0){
            return firstCriteria;
        }else{
            return a[0].localeCompare(b[0]);
        }
    }
}
solve([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
])