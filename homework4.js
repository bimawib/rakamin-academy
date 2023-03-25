// THIS FUNCTION RETURN 3 VALUE IN ARRAY allRandomNumber WHICH CONTAIN :
// arrayRandom (array of random number that being generated)
// arrayOddIndex (array of random number that is in odd index)
// arrayEvenIndex (array of random number that is in even index)

let generateRandom =()=> {
    let arrayRandom = [];
    let arrayOddIndex = [];
    let arrayEvenIndex = [];
    let allRandomNumber = [];

    for(let i = 0; i < 100; i++){
        arrayRandom.push(Math.floor(Math.random() * 50) + 1);
    }
    // console.log(arrayRandom);

    for(let i = 0; i < arrayRandom.length; i++){
        if(i%2 == 0){
            arrayEvenIndex.push(arrayRandom[i]);
        }else{
            arrayOddIndex.push(arrayRandom[i]);
        }
    }
    
    allRandomNumber['arrayRandom'] = arrayRandom;
    allRandomNumber['arrayOddIndex'] = arrayOddIndex;
    allRandomNumber['arrayEvenIndex'] = arrayEvenIndex;

    return allRandomNumber;
}


let randomNumber = generateRandom();
console.log(randomNumber);
console.log(randomNumber['arrayEvenIndex'].length)
console.log(randomNumber['arrayOddIndex'].length)
