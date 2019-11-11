var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.onload = function() { //Autoslide on load
    showSlides(slideIndex);

    myTimer = setInterval(function(){plusSlides(1)}, 3000);
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    slideshowContainer.addEventListener('mouseenter', pause);
    slideshowContainer.addEventListener('mouseleave', resume);
}

function plusSlides(n){ //Set Previous and next slide by using prev/next button
	clearInterval(myTimer);

	if (n < 0){
	showSlides(slideIndex -= 1);
	} else {
	showSlides(slideIndex += 1); 
	}

	if (n === -1){
		myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
	} else {
		myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
	}
}

function currentSlide(n){ // Set slide using dots
	clearInterval(myTimer);
	myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
	showSlides(slideIndex = n);
}

function showSlides(n){ //Slide
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("navigation-icon");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

function pause(){ //pause slide
	clearInterval(myTimer);
}

function resume(){ //resume slide
	clearInterval(myTimer);
	myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
}