function solve(text) {
    let regex = new RegExp(/\W+/g);
    let rezult = text.replace(regex, "|");
    console.log(rezult.slice(0,-1))
}
solve('_All_ _words_ _have_ _underscores_! 0Now1 2they3 4have5 6numbers7!')