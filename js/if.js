// kogu html laetud tuleb jquery
$(document).ready(
	function() {
		$(".icon").click(function() {
			// lisa klass - addClass()
			$(this).addClass("active");
					// kui on tingimus tõene ja kui on klass
					if($(".icon").hasClass("active")) {
						// lisa värv - css()
						$(".active").css("background-color", "#e15c46");
					}
		})
		// hiir pealt ära - mouseout()
		$(".icon").mouseout(function() {
			    // eemalda class - removeClass()
				$(this).removeClass("active");
				 // eemalda style - removeAttr(), style on attribut hml kontekstis
				$(this).removeAttr("style");
		})

	}
)