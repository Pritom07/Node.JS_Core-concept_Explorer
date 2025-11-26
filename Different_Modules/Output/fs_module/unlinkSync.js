const fs = require("fs");
const content = "Thanks for Testing.";
fs.writeFileSync("./Different_Modules/Test/writeFile3.txt", content);

if (fs.existsSync("./Different_Modules/Test/writeFile3.txt")) {
  console.log(true);
  fs.unlinkSync("./Different_Modules/Test/writeFile3.txt");
} else {
  console.log(false);
}
