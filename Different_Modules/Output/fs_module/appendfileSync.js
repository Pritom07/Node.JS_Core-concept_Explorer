const fs = require("fs");
console.log("Start append file sync");
const content = "\nChirodin tomar akash, tomar batash.";
try {
  fs.appendFileSync("./Different_Modules/Test/writeFile1.txt", content);
} catch (err) {
  console.log(`Error Happened : ${err.message}`);
}
console.log("Finish append file sync");
