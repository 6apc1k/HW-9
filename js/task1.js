var sh = '#', sp = ' ';

while (sp++ < 8) {
   console.log( sp % 2 ? `${sh} ${sh} ${sh} ${sh}` : ` ${sh} ${sh} ${sh} ${sh}` );
}