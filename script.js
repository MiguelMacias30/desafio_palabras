var text = document.querySelector{"texto-entrada"}.value

var repetidas = []
var no repetidas = []

for(var i = 0; i < string.toLowerCase().split(" ").length; i++){

	var element = string.toLowerCase().split(" ")[i];

	var cant = string.toLowerCase().split(" ").reduce(function(n, val)   {
		return n + (val === element);
	}, 0);

  if(cant > 1){

    if(repetidos.indexOf(element) === -1){
      repetidos.push(element);
    }
  }else{
    noRepetidos.push(element);
  }
}
