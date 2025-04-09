var szamok = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

var keres = 1;

function kereses(tomb, feltetel){
    let i = 0;
    let sorszam = 0;

    while(i < tomb.length && tomb[i] != feltetel){
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

console.log('A keresett szám indexe: ' + kereses(szamok, keres));