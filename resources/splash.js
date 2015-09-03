function showOverlayBox() {
	//if box is not set to open then don't do anything
	if( typeof isOpen === "undefined" || isOpen == false ) return;
	// set the properties of the overlay box, the left and top positions
	$('.overlayBox').css({
		display:'block',
		left:( $(window).width() - $('.overlayBox').width() )/2,
		top:( $(window).height() - $('.overlayBox').height() )/2 -20,
		position:'fixed'
	});
	// set the window background for the overlay. i.e the body becomes darker
	$('.bgCover').css({
		display:'block',
		minWidth: "1160px",
		width: $(window).width(),
		height:$(window).height(),
	});
}
function doOverlayOpen() {
	//set status to open
	isOpen = true;
	showOverlayBox();
	$('.bgCover').css({opacity:0}).animate( {opacity:0.8, backgroundColor:'#000'} );
	// dont follow the link : so return false.
	return false;
}
function doOverlayClose() {
	//set status to closed
	isOpen = false;
	$('.overlayBox').css( 'display', 'none' );
	$('.bgCover').css( 'display', 'none' );
	// now animate the background to fade out to opacity 0
	// and then hide it after the animation is complete.
	// $('.bgCover').animate( {opacity:0}, null, null, function() { $(this).hide(); } );
}

/*** COOKIE PROCESS ***/
if (!readCookie('smoSplashHide')) {
	// $('.overlayBox').show();
	doOverlayOpen();
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}