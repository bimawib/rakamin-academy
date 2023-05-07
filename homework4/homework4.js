// THIS FUNCTION RETURN 3 VALUE IN ARRAY :
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

// THIS FUNCTION ACCEPT 2 ARRAY TYPE PARAMS
// THIS FUNCTION WILL RETURN THESE PROPERTIES : MIN,MAX,TOTAL, and AVERAGE OF BOTH ARRAY

let analyzeNumber =(arrayOdd, arrayEven)=> {
    let result = [];
    let totalNumberOdd = 0;
    let totalNumberEven = 0;
    let minimumNumberOdd;
    let minimumNumberEven;
    let maximumNumberOdd;
    let maximumNumberEven;

    for(let i=0; i < arrayOdd.length; i++){
        // adding each value in both array (Total)
        totalNumberOdd += arrayOdd[i];
        totalNumberEven += arrayEven[i];

        // constantly replacing min/max value if condition accepted
        if(minimumNumberOdd == undefined){
            minimumNumberOdd = arrayOdd[i];
            minimumNumberEven = arrayEven[i];
            maximumNumberOdd = arrayOdd[i];
            maximumNumberEven = arrayEven[i];
        }else{
            if(arrayOdd[i] < minimumNumberOdd){
                minimumNumberOdd = arrayOdd[i];
            }
            if(arrayEven[i] < minimumNumberEven){
                minimumNumberEven = arrayEven[i];
            }
            if(arrayOdd[i] > maximumNumberOdd){
                maximumNumberOdd = arrayOdd[i];
            }
            if(arrayEven[i] > maximumNumberEven){
                maximumNumberEven = arrayEven[i];
            }
        }
    }

    // averaging total value of both array
    let averageNumberOdd = totalNumberOdd / arrayOdd.length;
    let averageNumberEven = totalNumberEven / arrayEven.length;

    console.log("Hasil analisis data: ");
    analyzeResult(minimumNumberOdd,minimumNumberEven,'minimal');
    analyzeResult(maximumNumberOdd,maximumNumberEven,'maksimal');
    analyzeResult(totalNumberOdd,totalNumberEven,'Total');
    analyzeResult(averageNumberOdd,averageNumberEven,'rata-rata');

    result['minimumNumberOdd'] = minimumNumberOdd;
    result['minimumNumberEven'] = minimumNumberEven;
    result['maximumNumberOdd'] = maximumNumberOdd;
    result['maximumNumberEven'] = maximumNumberEven;
    result['totalNumberOdd'] = totalNumberOdd;
    result['totalNumberEven'] = totalNumberEven;
    result['averageNumberOdd'] = averageNumberOdd;
    result['averageNumberEven'] = averageNumberEven;

    return result;
}

// THIS FUNCTION ACCEPT 2 INT TYPE PARAMS and 1 STRING PARAM
// THIS FUNCTION WILL NOT RETURN ANYTHING BUT PRINT THE ANALYSIS FOR BOTH PARAMS INSTEAD

let analyzeResult = (oddValue,evenValue,subject = '')=>{
    if(oddValue > evenValue){
        console.log(`Nilai ${subject} pada array dengan index ganjil (${oddValue}) lebih besar daripada nilai ${subject} pada array dengan index genap (${evenValue}).`);
    }else if(oddValue < evenValue){
        console.log(`Nilai ${subject} pada array dengan index ganjil (${oddValue}) lebih kecil daripada nilai ${subject} pada array dengan index genap (${evenValue}).`);
    }else if(oddValue == evenValue){
        console.log(`Nilai ${subject} pada kedua array sama (${oddValue}).`)
    }
}

// IMPLEMENTATION

let randomNumber = generateRandom(); // GENERATE ARRAY OF RANDOM NUMBER
console.log(randomNumber);

let numberAnalysis = analyzeNumber(randomNumber['arrayOddIndex'],randomNumber['arrayEvenIndex']); // ANALYZE ARRAY FROM BOTH ODD & EVEN INDEX
console.log(numberAnalysis);