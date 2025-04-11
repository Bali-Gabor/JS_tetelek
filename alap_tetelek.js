// 1. Összegzés tétele

var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function osszegzes(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }
    return sum;
}

console.log('A tömb elemeinek összege: ' + osszegzes(szamok));
//------------------------------------------------------------


// 2. Maximum kiválasztás tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];

function maximum(tomb){
    let max = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] > tomb[max]){
            max = i;
        }
    }
    return max;
}

console.log('A tömb legnagyobb elemének indexe ' + maximum(szamok) + ', értéke ' + szamok[maximum(szamok)]);
//----------------------------------------------------------------------------------------------------------

// 3. Eldöntés tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];
var keres = 5;

function eldontes(tomb, tulajdonsag){
    let i = 0;
    let van = false;

    while( i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }

    if(i < tomb.length){
        van = true;
    }

    return van;
}

console.log('A keresett érték "' + keres + '" szerepel a tömbben: ' + eldontes(szamok, keres));
//---------------------------------------------------------------------------------------------

// 4. Megszámolás tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];

function megszamlalas(tomb){
    let darab = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            darab ++;
        }
    }
    return darab;
}

console.log('A tömben található páros számok száma: ' + megszamlalas(szamok));
//----------------------------------------------------------------------------

// 5. Minimum érték kiválasztása tétel

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];

function minimum(tomb){
    let min = 0;

    for(let i = 1 ; i < tomb.length; i ++){

        if(tomb[i] < tomb[min]){
            min = i;
        }
    }
    return min;
}

console.log('A tömb legkisebb elemének indexe ' + minimum(szamok) + ', értéke ' + szamok[minimum(szamok)]);
//---------------------------------------------------------------------------------------------------------

// 6. Keresés tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];
var keres= 3;

function kereses(tomb, tulajdonsag){
    let i = 0;
    let index = 0;

    while(i < tomb.length && tomb[i] != tulajdonsag){
        i ++;
    }
    if(i < tomb.length){
        index = i;
    }
    else{
        index = -1;
    }

    return index;
}

console.log('A keresett szám indexe: ' + kereses(szamok, keres));
//----------------------------------------------------------------

// 7. Kiválasztás tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];
var keres = 8;

function kivalasztas(tomb, tulajdonsag){
    let i = 0;

    while(tomb[i] != tulajdonsag){
        i ++;
    }
    return i;
}

console.log('A keresett érték indexe: ' + kivalasztas(szamok, keres));
//--------------------------------------------------------------------

// 8. Kiválogatás tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];
var parattlan_szamok = [];

function kivalogatas(tomb, uj_tomb){
    let szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 != 0){
            uj_tomb[szamlalo] = tomb[i];
            szamlalo ++;
        }
    }
}

kivalogatas(szamok, parattlan_szamok);
console.log('A kiválogatott páratlan számok: ' + parattlan_szamok.join(', '));
//----------------------------------------------------------------------------

// 9. Átlagolás tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];

function atlagolas(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }

    return sum / tomb.length;
}

console.log('A tömb átlaga: ' + atlagolas(szamok));
//-------------------------------------------------

// 10. Szétválogatás tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];
var parattlan_szamok = [];
var paros_szamok = [];

function szetvalogatas(tomb, paros_tomb, paratlan_tomb){
    let paros_szamlalo = 0;
    let paratlan_szamlalo = 0;

    for(let i = 0; i < tomb.length; i ++){

        if(tomb[i] % 2 == 0){
            paros_tomb[paros_szamlalo] = tomb[i];
            paros_szamlalo ++;
        }
        else{
            paratlan_tomb[paratlan_szamlalo] = tomb[i];
            paratlan_szamlalo ++;
        }
    }
}

szetvalogatas(szamok, paros_szamok, parattlan_szamok);
console.log('Eredeti tömb: ' + szamok.join(', '));
console.log('Páros számok: ' + paros_szamok.join(', '));
console.log('Páratlan számok: ' + parattlan_szamok.join(', '));
//-------------------------------------------------------------

// 11. Unió tétel

var a = [100, 2, 3, 14, 5, 6, -7, 8, 9, 10];
var b = [2, 5, -9, 3, 11, -7, 100, 73, -19];
var u = [];

function unio(a_tomb, b_tomb, unio_tomb){

    for(let i = 0; i < a_tomb.length; i ++){
        unio_tomb[i] = a_tomb[i];
    }
    for(let j = 0; j < b_tomb.length; j ++){
        let van = false;

        for(let k = 0; k < unio_tomb.length; k ++){

            if(b_tomb[j] == unio_tomb[k]){
                van = true;
                break;
            }
        }
        if(van != true){
            unio_tomb.push(b_tomb[j])
        }
    }
}
 unio(a, b, u);
 console.log('A U B = ' + u.join(', '));
//--------------------------------------

// 12. Metsze tétele

var a = [100, 2, 3, 14, 5, 6, -7, 100, 8, 9, 10];
var b = [2, 5, -9, 2, 3, 11, -7, 100, 73, -19];
var a_b_metszet = [];

function metszet(a_tomb, b_tomb, metszet_tomb){
    let szamlalo = 0;

    for(let i = 0; i < a_tomb.length; i ++){

        for(let j = 0; j < b_tomb.length; j ++){

            if(a_tomb[i] == b_tomb[j]){
                let van = false;

                for(let k = 0; k < metszet_tomb.length; k ++){

                    if(metszet_tomb[k] == a_tomb[i]){
                        van = true;
                        break;
                    }
                }

                if(van != true){
                    metszet_tomb[szamlalo] = a_tomb[i];
                    szamlalo ++;
                }
            }
        }
    }
}

metszet(a, b, a_b_metszet);
console.log('A ∩ B = ' + a_b_metszet.join(', '));
//-----------------------------------------------

// 13. Különbség tétele

var a = [100, 2, 3, 14, 5, 6, -7, 100, 8, 14, 9, 10];
var b = [2, 5, -9, 2, 3, 11, -7, 100, 73, -19];
var a_b_kulonbseg = [];

function kulonbseg(a_tomb, b_tomb, kulonbseg_tomb){
    let szamlalo = 0;
    for(let i = 0; i < a_tomb.length; i ++){
        let van = false;

        for(let j = 0; j < b_tomb.length; j ++){

            if(a_tomb[i] == b_tomb[j]){
                van = true;
                break;
            }
        }
        if(van != true){
            kulonbseg_tomb[szamlalo] = a_tomb[i];
            szamlalo ++;
        }
    }
}

kulonbseg(a, b, a_b_kulonbseg);
console.log('A / B = ' + a_b_kulonbseg.join(', '));
//-------------------------------------------------

// 14. Rendezés tétele

var szamok = [100, 2, 3, 14, 5, 6, -7, 100, 8, 14, 9, 10];

function rendezes(tomb){

    for(let i = 0; i < tomb.length - 1; i ++){

        for(let j = i + 1; j < tomb.length; j ++){

            if(tomb[i] > tomb[j]){
                let csere = tomb[i];
                tomb[i] = tomb[j];
                tomb[j] = csere;
            }
        }
    }
}
console.log('Rendezettlen tömb: ' + szamok.join(', '));
rendezes(szamok);
console.log('Rendezett tömb: ' + szamok.join(', '));