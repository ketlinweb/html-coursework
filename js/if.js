// kogu html laetud tuleb jquery
$(document).ready(
	function() {
		// kui on tingimus tõene
		if($(".icon").hasClass("active")) {
			$(".active").css("background-color", "#e15c46");
		}
	}
)