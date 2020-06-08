function escada(quantidadeDegrau){
	var degrau = "#";
	var escada = [];
	
	
	for (let i = 1; i <= quantidadeDegrau; i++) {
		var adicaoEspaco = " ".repeat(quantidadeDegrau - i);
		var adicaoDegraus = degrau.repeat(i);
		escada.push(adicaoEspaco+adicaoDegraus);
	}

	return escada;
	
}

console.log(escada(15));