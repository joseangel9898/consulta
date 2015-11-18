// JavaScript Document

function consulta()
{
	datos="";
	$.ajax({
		    type: "POST", 
			url: "192.168.1.30/procesar.php", 
			datos: datos 
	       }).done(function(mensaje){
		alert (mensaje);
	});
}


$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
		$("#btnconsulta").on("tap", function(){
			alert ("preguntando..");
	        consulta();
        });
 });//device ready
});//document ready
