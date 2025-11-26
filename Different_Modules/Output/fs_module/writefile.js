const fs = require("fs");
console.log("Start writing file in asynchronous way");
const content = "Chirodin tomar akash tomar batas";
fs.writeFile("./Different_Modules/Test/writeFile2.txt", content, (err) => {
  if (err) {
    console.log(`Error happened : ${err.message}`);
  }
});
console.log("Writing file asynchronous way completed");
