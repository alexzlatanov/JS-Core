function solce (text) {
    let rezult = [];
    let open = text.indexOf('(');

    while (open !== -1){
        let close = text.indexOf(')', open);
        if(close === -1){
            break;
        }
        rezult.push(text.substring(open + 1, close));

        open = text.indexOf('(', close + 1);
    }

    console.log(rezult.join(', '))

}
solce('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');