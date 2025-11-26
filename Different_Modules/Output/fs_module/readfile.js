const fs = require("fs");
console.log("Starting Read File asynchronous way");
fs.readFile("./Different_Modules/Test/file1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error happened : ${err.message}`);
  } else {
    console.log(data);
    console.log("Data read complete in asynchronous way.");
  }
});
console.log("Good Bye");
