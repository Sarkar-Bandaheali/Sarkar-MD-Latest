
const fs = require('fs');
const chalk = require('chalk');


//~~~~~~~~< Owner Information>~~~~~~~~~~~~~~\\
global.ytname = process.env.YT_NAME || "YT: bandaheali";

global.socialm = process.env.GITHUB_USERNAME || "GitHub: Sarkar-Bandaheali";

global.location = process.env.LOCATION || "Pakistan, Sindh, Nawabshah";


//~~~~~~~~<Session and Bot Details>~~~~~~~~~~~~~\\
global.SESSION_ID = process.env.SESSION_ID || '';

global.botname = process.env.BOT_NAME || 'Bandaheali';

global.ownernumber = [process.env.OWNER_NUMBER || '923253617422'];

global.ownername = process.env.OWNER_NAME || 'S a r k a r';


//~~~~~~<Website and Social Links>~~~~~~~~~~\\
global.websitex = process.env.WEBSITE_URL || "https://github.com/Sarkar-Bandaheali";

global.wagc = process.env.WHATSAPP_CHANNEL || "https://whatsapp.com/channel/0029VajGHyh2phHOH5zJl73P";


//~~~~~~~~<Theme and Miscellaneous>~~~~~~~~~~\\
global.themeemoji = process.env.THEME_EMOJI || '⛩';

global.wm = process.env.WATERMARK || "Bandaheali.";

global.botscript = process.env.SCRIPT_LINK || 'https://github.com/Sarkar-Bandaheali';

global.packname = process.env.PACK_NAME || "B a n d a h e a l i";

global.author = process.env.AUTHOR_NAME || "MΛDΣ WITH 💚";

global.creator = process.env.CREATOR_NUMBER || "923253617422@s.whatsapp.net";


//~~~~~~~~~~~~~<Bot Settings>~~~~~~~~~~~~~~~\\
global.xprefix = process.env.PREFIX || '?';

global.premium = [process.env.PREMIUM_NUMBER || '923253617422'];

global.typemenu = process.env.MENU_TYPE || 'v2';

global.typereply = process.env.REPLY_TYPE || 'v4';

global.autoblocknumber = process.env.AUTOBLOCK_COUNTRYCODE || '212';

global.antiforeignnumber = process.env.ANTIFOREIGN_COUNTRYCODE || '91';

global.antidelete = process.env.ANTI_DELETE === 'true';


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆'];


global.tempatDB = process.env.DB_FILE || 'database.json';


global.limit = {
  free: parseInt(process.env.FREE_LIMIT || 100),
  premium: parseInt(process.env.PREMIUM_LIMIT || 999),
  vip: process.env.VIP_LIMIT || 'VIP'
};


global.uang = {
  free: parseInt(process.env.FREE_UANG || 10000),
  premium: parseInt(process.env.PREMIUM_UANG || 1000000),
  vip: parseInt(process.env.VIP_UANG || 10000000)
};


global.mess = {
  error: process.env.ERROR_MESSAGE || 'Error!',
  nsfw: process.env.NSFW_MESSAGE || 'Nsfw is disabled in this group, Please tell the admin to enable',
  done: process.env.DONE_MESSAGE || 'Done'
};


global.bot = {
  limit: 0,
  uang: 0
};


global.game = {
  suit: {},
  menfes: {},
  tictactoe: {},
  kuismath: {},
  tebakbom: {},
};


//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
// Watch for file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Updated ${__filename}`));
  delete require.cache[file];
  require(file);
});
