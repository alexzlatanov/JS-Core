function solve (intput) {
    let heroData = [];
    for(let i = 0; i<intput.length; i++){
        let currentHero = intput[i].split(" / ");

        let heroName = currentHero[0];
        let currentHeroLevel = Number(currentHero[1]);

        let currentHeroItems = [];
        if(currentHero.length>2){
            currentHeroItems = currentHero[2].split(", ");
        }

        let hero = {
            name: heroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}