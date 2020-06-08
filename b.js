function naipeDeTruco(naipe){
var cartas = [];
for(var i =1; i<13;i++){
    if(i != 8 && i !=9){
        cartas.push(i+" "+"de"+" "+naipe);
    }
}
return cartas;
}
