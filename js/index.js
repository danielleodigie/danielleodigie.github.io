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

var i = 0;
var txt = "Hi! I'm Danielle, and I am an aspiring software developer based in NYC. I am currently a freshman studying at Columbia University, and I am excited to learn as much as I can about the tech field!";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("aboutme").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = (event) => typeWriter();
