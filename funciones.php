<?php
	$nombre = $_POST['nombre'];
	$clave = $_POST['clave'];
	$repitaClave = $_POST['repitaclave'];
	$pais = $_POST['pais'];
	$rut = $_POST['rut'];
	$email = $_POST['email'];
	$repitaEmail = $_POST['repitaemail'];

	$conexion = mysql_connect(localhost,root,contrasena_mysql);

	mysql_select_db("programacion",$conexion);
	$sql = "INSERT INTO usuario(nombre, clave, repitaClave, pais, rut, email, repitaEmail) VALUES ('$nombre','$clave', '$repitaClave', '$pais', '$rut', '$email', '$repitaEmail')";
	
	if(mysql_query($sql)){
		echo "datos insertados correctamente";
	}else{
		echo "hubo un error al insertar los datos";
	}


?>


