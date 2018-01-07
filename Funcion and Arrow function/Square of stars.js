function square(number) {
    function stars(count = number) {
        console.log("*" + " *".repeat(count-1));
    }
    for(let i=1; i<=number; i++){
        stars();
    }
}
square(5);