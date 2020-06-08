function maisMenos(numeros){
	var fracaoNumeros = [];
	var contadorPositivo = 0;
	var contadorZero = 0;
	var contadorNegativo = 0;


	for (var i = 0; i < numeros.length; i++) {
		if (numeros[i] > 0){
			contadorPositivo++;
		}else if (numeros [i] == 0) {
			contadorZero++;	
		}else if (numeros[i] < 0) {
			contadorNegativo++;	
		}
	}

	var resultadoPositivo = contadorPositivo/numeros.length;
	var resultadoZero = contadorZero/numeros.length;
	var resultadoNegativo = contadorNegativo/numeros.length;

	fracaoNumeros.push(resultadoPositivo);
	fracaoNumeros.push(resultadoZero);
	fracaoNumeros.push(resultadoNegativo);

	return fracaoNumeros;

}


var numeros = [1,2,3,0];

console.log(maisMenos(numeros));