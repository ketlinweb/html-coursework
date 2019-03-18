// lae html
$(document).ready(
   // funktsioon - ülesande lahendamine 
   function() {
	// sulgede sisse () kirjutame html või cssi'
	$(".note").click(function() {
		// alert kutusb esile teavitusakna
		// kui pole { või } , siis tuleb semikoolon lõppu
		alert("Nupule on klikitud");
	})
	$(".login").click(function() {
		// alert kutusb esile teavitusakna
		// kui pole { või } , siis tuleb semikoolon lõppu
		alert("Login sisse");
	})
	// hide - peidab, show kuvab, toggle - peida/kuva
	// ()
	$(".packets p").hide();
	$(".packets h1").click(function() {
		$(this).next().slideToggle("slow");
	})
	$(".contact-form input").focus(function() {
		$(this).css("background-color", "#cccccc");
	})
	//lõpetamine () - html {} - funktsioon
	
	$(".button-add").click(function() {
		// this - see (klikin nupul ja siis SEE peab lisama htmli)
		$(this).after('<div class="box">Uus kast</div>');
	})
	$(".button-remove").click(function() {
		$(".box").remove();
	})
	$(".button-empty").click(function() {
		$(".box").empty();
	})
	
   })