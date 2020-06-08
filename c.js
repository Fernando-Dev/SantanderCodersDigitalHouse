var alunosDaSegunda=[10,-5,3,0];
var alunosDaTerca=[15,0,0,0];
var alunosDaQuarta=[20,4,3,0];
var alunosDaQuinta=[8,3,0];
var alunosDaSexta=[0,0,-3,0];

var frequenciaSemana = [alunosDaSegunda,alunosDaTerca,
alunosDaQuarta,alunosDaQuinta,alunosDaSexta];

function acontece(frequenciaDia,quantidadeMinimaAluno){
	var contadorAluno = 0;
	for (var i = 0; i < frequenciaDia.length; i++) {
		if (frequenciaDia[i]<=0) {
			contadorAluno++;
		}
	}
	if (contadorAluno >= quantidadeMinimaAluno) {
		return true;
	}else{
		return false;
	}
}


function aberturas(frequenciaSemana,quantidadeMinimaAluno){
	var aconteceram = [];
	for (var i = 0; i < frequenciaSemana.length; i++) {
		var resultado = acontece(frequenciaSemana[i],quantidadeMinimaAluno);
		aconteceram.push(resultado);	
	}
	return aconteceram;
}
console.log("*------------------------*");
console.log(acontece(alunosDaSegunda,2));
console.log(acontece(alunosDaTerca,2));
console.log(acontece(alunosDaQuarta,2));
console.log(acontece(alunosDaQuinta,2));
console.log(acontece(alunosDaSexta,2));
console.log("*------------------------*");
console.log(aberturas(frequenciaSemana,2));
console.log("*------------------------*");
