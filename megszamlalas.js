var szamok = new Array(10, 53, 74, 82, 33, 26, 39, 12, 98, 41);

function megszamol(tomb){
    let darab = 0;
    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 3 == 0){
            darab ++;
        }
    }
    return darab;
}

console.log('A tömbben ' + megszamol(szamok) + 'db hárommal osztható szám van.');