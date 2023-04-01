class Mahasiswa{
    constructor(nama,umur,saku){
        this.nama = nama;
        this.umur = umur;
        this.saku = saku;
    }

    inputData(){
        return [this.nama,this.umur,this.saku];
    }

    isValidationError(){
        if(this.nama.length < 10 || 
            this.umur.value < 25 || 
            this.saku.value < 100000 || 
            this.saku.value > 1000000){
            return true;
        }else{
            return false;
        }
    }
}

// VARIABLE COUNTER
let totalSiswa = 0;
let totalUmur = 0;
let totalUang = 0;

// SELECTOR INPUT
const inputNama = document.querySelector('#inputNama');
const inputUmur = document.querySelector('#inputUmur');
const inputUangSaku = document.querySelector('#inputUangSaku');

const simpanInput =()=> {
    
    let mahasiswa = new Mahasiswa(inputNama.value,inputUmur.value,inputUangSaku.value);

    // VALIDASI
    let validationError = mahasiswa.isValidationError();

    if(validationError){
        alert('Periksa Kembali Input Data');
    }else{
        totalSiswa++;
        totalUmur += Number(inputUmur.value);
        totalUang += Number(inputUangSaku.value);

        let newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${totalSiswa}</td>
            <td>${mahasiswa.nama}</td>
            <td>${mahasiswa.umur}</td>
            <td>${mahasiswa.saku}</td>`;
        document.getElementById('body_data').append(newRow);
    }
};

const resumeData =()=> {
    const resultUmur = document.getElementById('averageUmur');
    const resultUang = document.getElementById('averageUang');

    let averageUmur = new Promise(function(resolve,reject){
        let hitungUmur = totalUmur/totalSiswa;
        resolve(hitungUmur);
    });

    let averageUang = new Promise(function(resolve,reject){
        let hitungUang = totalUang/totalSiswa;
        resolve(hitungUang);
    });

    Promise.all([averageUmur,averageUang]).then(function(result){
        setTimeout(function(){
            resultUmur.innerHTML = Number.isNaN(result[0]) ? 'Waiting for input data' : `${result[0]}  Tahun`;
            resultUang.innerHTML = Number.isNaN(result[1]) ? 'Waiting for input data' : `Rp. ${result[1]}`;
        },1300);
    }); // DIKASIH DELAY 1,3 DETIK BIAR KELIATAN ASYNCHRONOUS 🗿
};