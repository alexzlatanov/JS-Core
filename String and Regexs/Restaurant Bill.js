function printBil(input) {
    let items = input.filter((x,i) => i%2==0);
    let sum = input.filter((x,i) => i%2==1)
        .map(Number)
        .reduce((a,b)=> a+ b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}
printBil(['Cola','1.35', 'Pancakes', '2.88']);