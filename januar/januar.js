function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var januar = [];

// 1. feladat:

function homerseklet_feltolt(tomb){

  for(let i = 0; i < 31; i ++){
    tomb[i] = getRndInteger(-10, 3);
  }
}

// 2. feladat:

function homerseklet_kiiras(tomb){

  console.log('Hőmérsékletek:\n');

  for(let i = 0;i < tomb.length; i ++){
    let nap = i+1
    console.log('\tJanuár ' + nap + '. ' + tomb[i] + ' Celsius fok');
  }
  console.log('');
}

// 3. feladat:

function kozephomerseklet(tomb){
  let osszeg = 0;

  for(let i = 0; i < tomb.length; i ++){
    osszeg += tomb[i];
  }

  return Math.round(osszeg / tomb.length);
}

// 4. feladat:

function fagypont_felett(tomb){
  let van = false;
  let i = 0;

  while(i < tomb.length && tomb[i] <= 0){
    i ++;
  }

  if(i < tomb.length){
    van = true;
  }

  return van;
}

// 5. feladat:

function fagymentes_kivalaszt(tomb){
  let i = 0;

  while(tomb[i] <= 0){
    i ++;
  }

  return i;
}

// 6. feladat:

function mentes_darab(tomb){
  let darab = 0;

  for(let i = 0; i < tomb.length; i ++){

    if(tomb[i] > 0){
      darab ++;
    }
  }

  return darab;
}

// 7. feladat:

function leg_napok(tomb){
  let min = 0;
  let max = 0;

  for(let i = 0; i < tomb.length; i ++){

    if(tomb[i] < tomb[min]){
      min = i;
    }
  }
  console.log('A hónap leghidegebb napja: Január ' + (min + 1) + '. ' + tomb[min] + ' Celsius fok\n');
  
  for(let i = 0; i < tomb.length;i ++){

    if(tomb[i] > tomb[max]){
      max = i;
    }
  }
  console.log('A hónap legmelegebb napja: Január ' + (max + 1) + '. ' + tomb[max] + ' Celsius fok');
}

//-------------------------------
homerseklet_feltolt(januar);

homerseklet_kiiras(januar);

console.log('A januári középhőmérséklet: ' + kozephomerseklet(januar) + '\n');

if(fagypont_felett(januar)){
  console.log('Volt fagymentes nap.\n');
  let mentes = fagymentes_kivalaszt(januar) + 1;
  console.log('Az első fagymentes nap: Január ' + mentes + '.\n');
  console.log('Fagymentes napok száma: ' + mentes_darab(januar) + '\n');
}
else{
  console.log('Nem volt fagymentes nap.\n');
}

leg_napok(januar);

