//require('babel-register');
const kitty = require('emoji-generator').kittyEmoji;
for (i=0; i<10; i++) console.log(kitty.next().value);
