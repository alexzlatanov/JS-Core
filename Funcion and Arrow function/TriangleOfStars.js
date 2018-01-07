function triangle(n) {
    function stars(count) {
        console.log("*".repeat(count));
    }
    for(let i=1; i<=n; i++){
        stars(i);
    }
    for (let i=n-1; i>0; i--){
        stars(i);
    }
}
triangle(2)