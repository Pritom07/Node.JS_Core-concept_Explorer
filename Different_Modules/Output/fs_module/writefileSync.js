const fs = require("fs");
console.log("Start writing file synchronously");
const content = `Amar sonar bangla, ami tomai valobasi`;
try {
  fs.writeFileSync("./Different_Modules/Test/writeFile1.txt", content);
  console.log("File writing in 'writeFile1.txt' completed ");
} catch (err) {
  console.log(`Error Occured : ${err.message}`);
}
console.log("OK! Good Bye.");
