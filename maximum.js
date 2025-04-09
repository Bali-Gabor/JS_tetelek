var szamok = new Array(43, 27, 96, 67, 24, 14, 33, 86, 59, 62, 71);

function maximum(tomb){
    let index = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] > tomb[index]){
            index = i;
        }
    }
    return index;
}

console.log('A tömb legnagyobb elemének indexe: ' + maximum(szamok));
console.log('A tömb legnagyobb elemének értéke: ' + szamok[maximum(szamok)]);