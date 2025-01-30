const fs = require('fs');
const chalk = require("chalk");
global.api = 'https://api.maher-zubair.xyz/';
global.id = "30ad0d748059aee58dd";
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});