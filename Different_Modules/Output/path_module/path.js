const path = require("path");
console.log("-".repeat(50));
console.log(`Current Directory : ${__dirname}`);
console.log(`Current File Location : ${__filename}`);
console.log("-".repeat(50));

const customePath = "./Output/Documents/myDoc/cv.pdf";
console.log(path.dirname(customePath));
console.log(path.basename(customePath));
console.log(path.extname(customePath));
console.log(path.basename(customePath, path.extname(customePath)));

const parsed = path.parse(customePath);
console.log(parsed);
console.log(path.format(parsed));
