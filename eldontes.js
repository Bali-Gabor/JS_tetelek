var szamok = new Array(11, 22, 33, 44, 55, 66, 77, 88, 99, 0);

var keres = 66;

function eldontes(tomb, feltetel){
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

console.log('A keresett szám a tömb eleme: ' + eldontes(szamok, keres));