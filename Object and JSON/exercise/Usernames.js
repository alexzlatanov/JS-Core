function solve(input) {
    let userName = new Set;
    for(let name of input){
        userName.add(name);
    }
    function compareNames(nameA, nameB) {
        if(nameA.length < nameB.length){
            return -1;
        }
        if(nameA.length > nameB.length){
            return 1;
        }

        return nameA.localeCompare(nameB);
    }
    console.log([...userName].sort(compareNames).join('\n'));
}