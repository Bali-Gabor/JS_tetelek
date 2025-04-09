var szamok = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19);

function kivalogat(tomb){
    let paratlan = new Array();

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 1){
            paratlan.push(tomb[i]);
        }
    }
    return paratlan;
}

console.log('A tömben lévő áratlan számok: ' + kivalogat(szamok));