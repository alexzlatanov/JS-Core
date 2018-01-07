function solve(input) {
    input = input.map(Number);
    let concrete = [];
    while (true){
        let biuldOn = false;
        let dayly = 0;
        for(let i=0; i<input.length; i++){
            if(input[i] !== 30){
                dayly +=195;
                input[i]++;
                biuldOn = true;

            }
        }
        if(!biuldOn){
            break;
        }else {
            concrete.push(dayly);
        }
    }
    let sum = concrete.reduce((a,b) => a+b);
    console.log(concrete.join(', '));
    console.log(`${sum*1900} pesos`);
}
solve(['21', '25', '28'] )