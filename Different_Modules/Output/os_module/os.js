const os = require("os");
console.log("Platform Info");
console.log("-".repeat(50));
console.log(`Host Name : ${os.hostname()}`);
console.log(`Release : ${os.release()}`);
console.log(`Platform : ${os.platform()}`);
console.log(`Type : ${os.type()}`);
console.log(`Architecture : ${os.arch()}`);
console.log("\n");

console.log("CPU Info");
console.log("-".repeat(50));
const cpus = os.cpus();
console.log(cpus);
console.log(`Number of core : ${cpus.length}`);
console.log(`CPU model : ${cpus[0].model}`);
console.log(`CPU speed : ${cpus[0].speed}`);
console.log("\n");

console.log("Storage Info");
console.log("-".repeat(50));
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`Total memory : ${totalMemory} bytes`);
console.log(`Free Memory : ${freeMemory} bytes`);
console.log(
  `Total memory(GB) : ${Math.floor(totalMemory / 1024 / 1024 / 1024)} GB`
);
console.log(
  `Free Memory(GB) : ${Math.floor(freeMemory / 1024 / 1024 / 1024)} GB`
);
console.log("\n");

console.log("Uptime Info");
console.log("-".repeat(50));
const Uptime = os.uptime();
console.log(`Running Time(s) : ${Uptime} sec`);
console.log(`Days : ${Math.floor(Uptime / (24 * 60 * 60))}`);
console.log(`Hours : ${Math.floor((Uptime % (24 * 60 * 60)) / (60 * 60))}`);
console.log(
  `Minutes : ${Math.floor(((Uptime % (24 * 60 * 60)) % (60 * 60)) / 60)}`
);
console.log(
  `Seconds : ${(((Uptime % (24 * 60 * 60)) % (60 * 60)) % 60).toFixed(2)}`
);
