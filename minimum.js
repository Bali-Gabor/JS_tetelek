var szamok = new Array(41, 55, 23, 19, 94, 73, 88, 69, 51);

function minimum(tomb){
    let index = 0;

    for(let i = 1; i < tomb.length; i ++){

        if(tomb[i] < tomb[index]){
            index = i;
        }
    }
    return index;
}

console.log('A tömb legkisebb elemének indexe: ' + minimum(szamok));
console.log('A tömb legkisebb elemének értéke: ' + szamok[minimum(szamok)]);