var szamok = new Array(23, 54, 87, 45, 22, 19, 89, 66, 48, 35, 93, 17);


// Összegzés tétele

function osszegzes(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }

    return sum;
}

console.log('A tömb elemeinek összege: ' + osszegzes(szamok) + '\n');


//Megszámlálás tétele

function megszamlalas(tomb){
    let db = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            db ++;
        }
    }

    return db;
}

console.log('A tömbben ' + megszamlalas(szamok) + ' páros szám található.\n');


//Maximum kiválastás tétele

function maximum(tomb){
    let max = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }
    return max;
}

console.log('A tömb legnagyobb elemének helye: ' + maximum(szamok) + '. index.');
console.log('A tömb legnagyobb eleme: ' + szamok[maximum(szamok)] + '\n');


//Eldöntés tétele

var keresett_szam = 819;

function eldontes(tomb, feltetel){
    let v = false;
    let i = 0;

    while(i < tomb.length && tomb[i] != feltetel){
        i ++;
    }

    if(i< tomb.length){
        v = true;
    }
    return v;
}

console.log('A keresett szám benne van a tömben: ' + eldontes(szamok, keresett_szam));









