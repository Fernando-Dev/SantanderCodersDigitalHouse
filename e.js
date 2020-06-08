function fatorial(numero){
	var resultado = 1;
	var numeros = [];
	numeros.push(numero);
	for (var i = 1; i < numero + 1; i++) {
		var subtracao = numero - i;
		if (subtracao != 0) {
		numeros.push(subtracao);
		}
	}
	
	for (var i = 0; i < numeros.length; i++) {
	 if (numeros.length > 1) {
	 resultado = numeros[i] * resultado;
 	 }else if (numeros[i] == 1 || numeros [i] == 0) {
 	 	return 1;
 	 }
	}
	 	return resultado;
}

var numero = 10;

console.log(fatorial(numero));

