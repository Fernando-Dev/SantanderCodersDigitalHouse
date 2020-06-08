function produto(numero){
	var resultado = 1;
	for (var i = 0; i < numero.length; i++) {
	 if (numero.length > 1) {
	 resultado = numero[i] * resultado;
 	 }else{
	 	return numero[i];
	 }
	}
	return resultado;
}
var numero = [3,2];
console.log(produto(numero));