const readlineSync = require('readline-sync');

var player1 = 'Feri';

function entry (player) {
  ways = ['jobb', 'bal'];
  var way = readlineSync.keyInSelect(ways, 'Jobb vagy bal?');
  console.log('Te most ' + ways[way] + ' jaraton haladsz tovabb.');
  if (way === 0) {
    jobb(player);
  } else if (way == 1) {
    bal(player);
  } else {
    end();
  }
}

function jobb (player) {
  minerals = ['arany', 'gyemant', 'vas', 'pulyka'];
  var mineral = readlineSync.keyInSelect(minerals, 'A jobb jarat egy banya lesz, mit akarsz banyaszni?');
  banyaszni();
}

function bal (player) {
  harc = ['sötétség', 'zombie'];
  var harc = readlineSync.keyInSelect(harc, ' a bal járat egy harc mit fogsz tenni ?');
  if (harc === 0) {
    sötétség();
  } else {
    zombie();
  }
}

function banyaszni (player, ezskoz) {
  mivel = ['áso', 'lancoskard', 'pusztakéz', 'csákány'];
  var eszkoz = readlineSync.keyInSelect(mivel , ' mien ezsközel akarsz bányászni ?');
  console.log('+2', minerals);
}

function sötétség (player) {
  console.log('a sötétség elnyelt vége a gamenek');
}
function zombie (player){
  
}
function end () {
  console.log('End of the game');
}

// entry point of the game
entry(player1);
