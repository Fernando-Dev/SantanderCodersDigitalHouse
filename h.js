function alturaArvoreUtopica(ciclo){
	var altura = 1;
	

	for(let i = 0; i<ciclo;i++){
		if (i & 1) {
			altura += 1;
		}else{
			altura *= 2;
		}

	}
		return altura;
	
}


console.log(alturaArvoreUtopica(0));
console.log(alturaArvoreUtopica(1));
console.log(alturaArvoreUtopica(2));
console.log(alturaArvoreUtopica(3));
console.log(alturaArvoreUtopica(4));
console.log(alturaArvoreUtopica(5));
console.log(alturaArvoreUtopica(6));
console.log(alturaArvoreUtopica(7));
console.log(alturaArvoreUtopica(8));
console.log(alturaArvoreUtopica(9));
console.log(alturaArvoreUtopica(10));