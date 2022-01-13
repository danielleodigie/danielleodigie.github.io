function projectScroll(){
	var element = document.getElementById("projects");
	element.scrollIntoView({behavior: "smooth"});
}

function aboutScroll(){
	var element = document.getElementById("main");
	element.scrollIntoView({behavior: "smooth"});
}

function contactScroll(){
	var element = document.getElementById("contact");
	element.scrollIntoView({behavior: "smooth"});
}


function scrollToTop(){
	window.scrollTo({top: 0, behavior: 'smooth'});
}