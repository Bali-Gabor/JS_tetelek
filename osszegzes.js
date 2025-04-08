var x = new Array(434,2,44,56,87,23,76,98,31,10);

function osszeg(tomb){
    let s = 0;
    for (let i = 0; i < tomb.length; i++){
        s += tomb[i];
    }
    return s;
}
console.log("Összeg: " + osszeg(x));
