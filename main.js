if (process.stdout._handle) process.stdout._handle.setBlocking(true);


const fs = require('fs');


const path = './day01/input2.txt';

let data = '';

let readStream = fs.createReadStream(path, 'utf8');

readStream.on('data', function(chunk) {  
  data += chunk;
}).on('end', function() {
  // console.log(data);
  console.log('done');
});


let dataLines = data.split('/n');

function printDataLines(d) {
  console.log('_');
  console.log(d);
  console.log('_');
}

printDataLines(dataLines);

// fs.readFile(path, (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log('data')
//   console.log(data)
// })



// let fork = require('child_process').fork;
// let child = fork('./script');


// const dayStr = day.toString().padStart(2,'0');

// const path = `./day${dayStr}/input.txt`;




