const fs = require("fs");
console.log("Starting read file sync");
console.log("-".repeat(50));
try {
  const data = fs.readFileSync("./Different_Modules/Test/file1.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.log(`Error Happened : ${err.message}`);
}
console.log("Completing read file sync.");
