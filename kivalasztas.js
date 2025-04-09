var szamok = new Array(12, 23, 34, 45, 56, 67, 78, 89, 90);

var tulajdonsag = 90;

function kivalaszt(tomb, feltetel){
    let i = 0;

    while(i < tomb.length &&tomb[i] != feltetel){
        i ++;
    }
    return i;
}

console.log('A keresett elem indexe: ' + kivalaszt(szamok, tulajdonsag));