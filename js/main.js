/*
---------------------------------
DECLARING AND ASSIGNING VARIABLES
--------------------------------- */

(function () {

    "use strict";

	/* 
	Access empty div with the 
	class "mh-image" (look at the HTML structure 
	above), and pass the reference
	to variable masthead */
	var masthead = document.querySelector(".mh-image");
	
	/* 
	Assign 4 elements to array slides
	(slide-show content) */
	var slides = [
        '<figure>' +
            '<img src="./img/flower.jpg" alt="pics">' +
            '<figcaption>Effective</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/grass.jpg" alt="pics">' +
            '<figcaption>Environmentally Friendly</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/water.jpg" alt="pics">' +
            '<figcaption>Economy</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/pumpkin.jpg" alt="pics">' +
            '<figcaption>Healthy</figcaption>' +
        '</figure>'
    ];


	/* 
	Define function fadeOut. This function will 
	make currently displayed slide disappear. */
	/* 
	Use style object with property opacity 
	on masthead and set it to 0. */
	var i, k;

    function fadeOut() {
        masthead.style.opacity = 0;
    }
	
	/* 
	End function fadeOut. */
	
	/* 
	Use i as index pointer for the array slides.
	Assign i with initial value 0. */
	i = 0;
	
	/* 
	Define function runSlides. 
	This function will loop through the array slides. */
    function runSlides() {
		
		/* 
	   Set opacity of masthead to 1.
	   Make sure masthead is visible 
	   (use style object and opacity on masthead). */
		masthead.style.opacity = 1;
		
		 /* 
	   Check the value of i.
	   If the value of i is greater than 3 
	   (3 is index of fourth slide),
	   reset the value of i to 0 
	   (slide-show starts over). */
		if (i > 3) {
            i = 0;

        }
		
		/* 
	   Use i to pass the next in line slide 
	   from array slides to masthead. */
		masthead.innerHTML = slides[i];
		
		 /* 
   		Increment i. */
        i += 1;
		
		/* 
	   Use setTimeOut() to call function fadeout 
	   after 5 seconds.(Slide will remain displayed 
	   for 5s and then, function fadeOut 
	   will make it disappear). */
		
       window.setTimeout(fadeOut, 5000);

    }
	
	/* 
	End function runSlides. */
	
	/*
	Call function runSlides. This will display 
	the first slide as the web page is loaded. */
    runSlides();
	
	/* 
	Use setInterval() to call function 
	runSlides every 6 seconds.
	(Function runSlides is 
	a slide-show "engine"). */
	window.setInterval(runSlides, 6000);

	
	/* 
	Collect all buttons in array buttons. 

	Have all contents in array contents. 

	Access div with the class "container"
	and pass the reference to variable container.*/
	var buttons = document.querySelectorAll("main span");

    var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/metal.jpg" alt="pics">' +
            '<figcaption>Bring in your old vehicles, appliances, copper, brass, aluminum, electronics, computers, etc... and we will pay you cash on the spot.</figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/paper.jpg" alt="pics">' +
            '<figcaption>Recycling paper to make pulp actually consumes more fossil fuels than making new pulp via the kraft process; these mills generate most of their energy from burning waste wood (bark, roots, sawmill waste) and byproduct lignin (black liquor).Cite(https://en.wikipedia.org/wiki/Paper_recycling)</figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/bottle.jpg" alt="pics">' +
            '<figcaption>Recycling one ton of plastic can save 5,774 kWh of energy, 98,000,000 btu of energy, 1,000–2,000 gallons of gasoline, 685 gallons of oil, 30 cubic yards of landfill space, 48,000 gallons of water. Cite(https://en.wikipedia.org/wiki/Plastic_recycling)</figcaption>' +
        '</figure>'
    ];

	/*
	Pass the value of the first array-element of array contents
	to container (use innerHTML on container). */
	var container = document.querySelector(".container");
    container.innerHTML = contents[0];

	/* 
	Define function handleClick 
	(pass event object to function) */
	function handleClick(ev) {
        ev.preventDefault();
        var target = ev.target;
		
		/* 
	   Loop through buttons array and
	   use removeAttribute() to remove 
	   id with the value active from an HTML element 
	   that contains this id (use hasAttribute() in if-statement to check). */
		for (k = 0; k < buttons.length; k += 1) {
            if (buttons[k].hasAttribute("id")) {
                buttons[k].removeAttribute("id");
            }
        }
		
		/* 
	   Use innerHTML on ev.target to check which button
	   was clicked. Based on this, display corresponding array 
	   element inside <div class="container"></div> */
        if (ev.target.innerHTML === "Metal"){
            container.innerHTML = contents[0];
        } else if (ev.target.innerHTML === "Paper") {
            container.innerHTML = contents[1];
        } else {
            container.innerHTML = contents[2];
        }
		
		 /*
	   Add the class active to clicked list item (use ev.target) */
			ev.target.setAttribute("id", "active");
    }
	/* 
	End function handleClick. */
	
	/* 
	Loop through buttons array and 
	register handleClick to listen for "click" event 
	on any button from array buttons. */ 
	for (k = 0; k < buttons.length; k += 1) {
        buttons[k].addEventListener("click", handleClick);
    }


})();
