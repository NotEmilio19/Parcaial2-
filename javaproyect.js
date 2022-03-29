function ejecuta(){
	Nombre=document.forma.Nombre.value;
	Nombre=Nombre.toLowerCase();
	ap_paterno=document.forma.ap_paterno.value;
	ap_paterno=ap_paterno.toLowerCase();
	ap_materno=document.forma.ap_materno.value;
	ap_materno=ap_materno.toLowerCase();
	Fec_nac=document.forma.Fec_nac.value;
	corr=Nombre.charAt(0)+ap_paterno+ap_materno.charAt(0)+"@empresa.com.mx"
	
	corr=corr.replaceAll("ñ","n");
	corr=corr.replaceAll("á","a");
	corr=corr.replaceAll("ó","o");
	corr=corr.replaceAll("í","i");
	corr=corr.replaceAll("ü","u");
	corr=corr.replaceAll("ú","u");
	corr=corr.replaceAll(" ","_");
	document.forma.correo.value=corr;
	
	anio=Fec_nac.substr(2,2);
	mes=Fec_nac.substr(5,2);
	dia=Fec_nac.substr(8,2);
	con=dia+mes+anio
	document.forma.contra.value=con;

	if(Nombre.length==0){
		alert("Error se debe de indicar el nombre");
		document.forma.Nombre.style.background="red"

	}
	else{	
		if (ap_paterno.length==0){
			alert("Error, se debe inidcar el Apellido Paterno");
			document.forma.ap_paterno.style.background="red";
		}	
	else{
		if (ap_materno.length==0){
			alert("Error, se debe inidcar el Apellido Materno");
			document.forma.ap_materno.style.background="red";
		}	

		else{
		Fec_nac=document.forma.Fec_nac.value;
		if (Fec_nac.length==0){
			alert("Error, se debe inidcar la Fecha de nacimiento");
			document.forma.Fec_nac.style.background="red";
		}	
	}
	}
}

}