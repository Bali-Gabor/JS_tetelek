var szamok = new Array(1, 2, -3, 4, 5, -6, 7, 8, -9, 10);

//Minimum kiválasztás

function minimum(tomb){
    let min = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] < tomb[min]){
            min = i;
        }
    }
    return min;
}

console.log('A tömb legkisebb elemének indexe. ' + minimum(szamok));
console.log('A Legkisebb elem értéke: ' + szamok[minimum(szamok)]);


//Keresés tétele

var keres = 5;

function kereses(tomb, tulajdonsag){
    let i = 0;
    let sorszam = 0;

    while(i < tomb.length &&tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        sorszam = i;
    }
    else{
        sorszam = -1;
    }

    return sorszam;
}

console.log('A keresett érték indexe: ' + kereses(szamok, keres));


//Kiválastás tétele

var keres = -9;

function kivalaszt(tomb, tulajdonsag){
    let i = 0;

    while(tomb[i] != tulajdonsag){
        i ++;
    }

    return i;
}

console.log('A keresett elem a következő indexen található: ' + kivalaszt(szamok, keres));


//Kiválogatás tétele

var paros_szamok = new Array();

function kivalogat(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }
}

kivalogat(szamok, paros_szamok);
console.log('Kiválogatott páros számok: ' + paros_szamok.join(', '));