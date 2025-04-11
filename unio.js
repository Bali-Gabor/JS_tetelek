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