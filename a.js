function quantidadeDeMesesComLucro(umPeriodo) {
  let quantidade= 0;
  for (let mes=0; mes< umPeriodo.length; mes++) {
    if(umPeriodo[mes]>0){
        quantidade++;
    }
    
  }
  return quantidade;
}

console.log(quantidadeDeMesesComLucro([0, 3, -1, 5]));
console.log(quantidadeDeMesesComLucro([10, -10, 2, 100]));


