$(document).ready(function() {
	$('#rut').Rut({
  		on_error: function(){ alert('Rut incorrecto'); }
	});
	$("#boton").click(function(){
		var contador = 0;
		var nombre = $("#nombre").val();
		var clave = $("#clave").val();
		var repitaclave = $("#repitaclave").val();
		var pais = $("select#pais option:selected").val();
		var rut = $("#rut").val();
		var email = $("#email").val();
		var repitaemail = $("#repitaemail").val();

		var valCorreo = document.getElementById("clave").value;
		var valRut = document.getElementById("rut").value;
		var valNombre = document.getElementById("nombre").value;
  
        if (valNombre.length == 0) {
           	alert("el nombre no puede estar vacio");
			return 0;
        }

        if (valRut.length == 0) {
           	alert("el rut no puede estar vacio");
			return 0;
        }

        if (valCorreo.length == 0) {
           	alert("la clave no puede estar vacia");
			return 0;
        }
		for(i=0;i<clave.length;i++){
			if(clave.charAt(i)==" "){
				alert("la clave no puede tener espacios vacios");
				return 0;
			} 
		}

		if(clave!=repitaclave){	
			alert("clave no coinside");
			return 0;
		}

		if(email!=repitaemail){	
			alert("email no coinside");
			return 0;
		}


		for(i=0;i<email.length;i++){
			if(email.charAt(i)=="@"){
				contador = contador +1;
			} 
		}

		if (contador == 0 || contador >1){
			alert("correo no valido");
			return 0;
		};


		$.ajax({
		type: "POST",
		url: "funciones.php",
		data: { nombre: nombre,
				clave: clave,
				repitaclave: repitaclave,
				pais: pais,
				rut: rut,
				email: email,
				repitaemail: repitaemail

		}
		}).done(function( msg ) {
			alert(msg);
		});

	});

});
