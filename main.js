var szamok = new Array(100, 44, 52, 96, 74, 42, 66, 84, 91, 28, 35);

// Összegzés tétele

function osszeg(tomb){
    let sum = 0; 

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }
    return sum;
}

console.log('1.\tA tömb elemeinek összege: ' + osszeg(szamok));


// kiválogatás tétele

function megszamlalas(tomb){
    let darab = 0;

    for(let i = 0; i <tomb.length; i ++){
        
        if(tomb[i] % 2 == 1){
            darab ++;
        }
    }
    return darab;
}

console.log('2.\tA tömben ' + megszamlalas(szamok) + ' páratlan szám található.');


// Maximum kiválasztás tétele

function max(tomb){
    let index = 0;

    for(let i = 1; i < tomb.length; i ++){
        
        if(tomb[i] > tomb[index]){
            index = i;
        }
    }
    return index;
}

console.log('3/a.\tA tömb legnaggyobb elemének indexe: ' + max(szamok));
console.log('3/b.\tA tömb maximum értéke: ' + szamok[max(szamok)]);


// Eldöntés tétele

var keres = 30;

function eldont(tomb, feltetel){
    let i = 0;
    let van = false;

    while(i < tomb.length && tomb[i] != feltetel){
        i ++;
    }

    if(i < tomb.length){
        van = true;
    }
    return van;
}

console.log('4.\tA tömbben benne van a keresett szám: ' + eldont(szamok, keres));


// Minimum kiválasztás tétele

function minimum(tomb){
    let min = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] < tomb[min]){
            min = i;
        }
    }
    return min;
}

console.log('5/a.\tA tömb legkisebb elemének indexe: ' + minimum(szamok));
console.log('5/b.\tA tömb legkisebb eleme: ' + szamok[minimum(szamok)]);


// Kiválasztás tétele

var tulajdonsag = 66;

function kivalasztas(tomb, keres){
    let i = 0;

    while(tomb[i] != keres){
        i ++;
    }
    return i;
}

console.log('6.\tA keresett szám indexe: ' + kivalasztas(szamok, tulajdonsag));


//Kiválogatás tétele

function kivalogatas(tomb){
    let kiv = new Array();

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            kiv.push(tomb[i]);
        }
    }
    return kiv;
}

console.log('7.\tA tömbben található páros számok: ' + kivalogatas(szamok));


//Keresés tétele

var tulajdonsag = 43;

function kereses(tomb, keres){
    let i = 0;
    let sorszam = 0;

    while(i <= tomb.length && tomb[i] != keres){
        i ++;
    }
    if(i <= tomb.length){
        sorszam = i;
    }
    else{
        sorszam = -1;
    }
    return sorszam;
}

console.log('8.\tA keresett szám az: ' + kereses(szamok, tulajdonsag) + ' indexen található.');


