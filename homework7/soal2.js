const fs = require('fs');

let logs = '';

const callbackRead = (data) => {
    logs = data;
    console.log(logs);
}

const readData = (filename, type) => {
    return new Promise((resolve, reject)=>{
        fs.readFile(filename, type, (err, data)=>{
            if(err){
                console.error(err);
                reject(err);
            }else{
                const readedFile = data;
                callbackRead(readedFile);
                resolve(data);
            }
        });
    });
}

const writeData = (filename, text) => {
    return new Promise((resolve, reject)=>{
        fs.writeFile(filename, text, (err, data)=>{
            if(err){
                console.error(err);
                reject(err)
            }else{
                const successWritten = 'data succesfully created';
                console.log(successWritten);
                resolve(successWritten);
            }
        });
    });
}

// CALL THE PROMISE

readData('logs.txt','utf-8').then(
    function(value){
        writeData('logs_result.txt', value);
    },
    function(error){
        console.error('ERROR : ' + error);
    }
);