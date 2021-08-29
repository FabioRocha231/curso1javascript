let corredor1 = 32.05;
let corredor2 = 32.03;
let corredor3 = 32.04;

if (corredor1 < corredor2 && corredor1 < corredor3) {
  console.log(`corredor 1 fez o circuito em ${corredor1}s e foi o campeao da prova!`);
} else if(corredor2 < corredor1 && corredor2 < corredor3) {
  console.log(`corredor 2 fez o circuito em ${corredor2}s e foi o campeao da prova!`)
} else if (corredor3 < corredor1 && corredor3 < corredor2){
  console.log(`corredor 3 fez o percuso em ${corredor3}s e foi o vencedor da prova!`)
} else {
  console.log('dado invalido')
}