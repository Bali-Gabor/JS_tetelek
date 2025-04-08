var szamok = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

function osszeg(tomb){
    let sum = 0;

    for(let i = 0; i < tomb.length; i ++){
        sum += tomb[i];
    }
    return sum;
}

console.log('A tömb elemeinek összege: ' + osszeg(szamok));