$(document).ready(function() {
alert("Bienvenido");
edad= prompt("ingrese su edad");
	if(isNaN(edad)){
		alert("dato mal ingresado");
		location.href("index.html");
	}else{
		if(edad>=18){
			alert("bienvenido asd");
			location.href="registro.html";
		}else{
			alert("no puede tener acceso")
			location.href="index.html";
		}
	}

});