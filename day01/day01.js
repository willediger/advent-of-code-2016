// const fs = require('fs');

const dayStr = day.toString().padStart(2,'0');

const path = `./day${dayStr}/input.txt`;

console.log(path);

fs.readFile(path, (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})