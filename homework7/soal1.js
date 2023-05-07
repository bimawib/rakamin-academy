const { squareArea, roundSquare } = require("./calculation");

// HITUNG LUAS

let hitungLuas1 = squareArea(13, 3);
let hitungLuas2 = squareArea(5, 60);
let hitungLuas3 = squareArea(4, 25);

console.log('Hasil perhitungan luas 1 adalah : '+hitungLuas1);
console.log('Hasil perhitungan luas 2 adalah : '+hitungLuas2);
console.log('Hasil perhitungan luas 3 adalah : '+hitungLuas3);

// HITUNG KELILING

let hitungKeliling1 = roundSquare(5, 7);
let hitungKeliling2 = roundSquare(60, 2);
let hitungKeliling3 = roundSquare(23, 50);

console.log('Hasil perhitungan keliling 1 adalah : '+hitungKeliling1);
console.log('Hasil perhitungan keliling 2 adalah : '+hitungKeliling2);
console.log('Hasil perhitungan keliling 3 adalah : '+hitungKeliling3);