$(document).ready(function(){
	$('p #txt2').fadeIn(3000);

	$('.google-maps').click(function () {
  	  $('.google-maps iframe').css("pointer-events", "auto");
	});

	$( ".google-maps" ).mouseleave(function() {
  		$('.google-mapsiframe').css("pointer-events", "none"); 
	});


	function maquina(contenedor,texto,intervalo){
 	 	// Calculamos la longitud del texto
  		longitud = texto.length;
   		// Obtenemos referencia del div donde se va a alojar el texto.
   		cnt = document.getElementById(contenedor);
   		var i=0;
   		// Creamos el timer
   		timer = setInterval(function(){
     	// Vamos añadiendo letra por letra y la _ al final.
      	cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      	// Si hemos llegado al final del texto..
      	if(i >= longitud){
         	// Salimos del Timer y quitamos la barra baja (_)
        	clearInterval(timer);
         	cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         	return true;
      	} else {
         // En caso contrario.. seguimos
         	i++;
      		}},intervalo);
		};

		var texto = "Domesticando la fuerza del agua";
		// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
		maquina("maquinas",texto,100);


});