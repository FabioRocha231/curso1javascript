function interrogatorio(){
  let numSim = 0;
  let p1 = prompt('telefonou para a vitima?');
  let p2 = prompt('esteve no local do crime?');
  let p3 = prompt('mora perto da vitima?');
  let p4 = prompt('devia para a vitima?');
  let p5 = prompt('Ja trabalhou com a vitima?');

  if (p1 === 'sim')  {
    numSim += 1;
  } if (p2 === 'sim'){
    numSim += 1;
  }if (p3 === 'sim'){
    numSim += 1;
  }if (p4 === 'sim'){
    numSim += 1;
  }if (p5 === 'sim'){
    numSim += 1; 
  }

  

  function veredito() {
    if (numSim === 0 || numSim === 1) {
      console.log(`individuo teve total de ${numSim} portanto: Inocente`)
    } else if (numSim === 2) {
      console.log(`individuo teve total de ${numSim} portanto: Suspeito!`)
    } else if (numSim === 3 || numSim === 4) {
      console.log(`${numSim} Cumplice portanto sera detido!`);
    } else {
      console.log(`${numSim} ASSASINO!!!!!`)
    }
  }
  return veredito();
  
}

console.log(interrogatorio());
