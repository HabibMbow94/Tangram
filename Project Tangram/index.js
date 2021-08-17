

function index() {
	// Obtains an array of all <link>
	// elements.
	// Select your element using indexing.
	var theme = document.getElementById("change-style");

	// Change the value of href attribute
	// to change the css sheet.
	if (theme.getAttribute("href") != "Styles/index.css") {
		theme.setAttribute("href", "Styles/index.css");
	} else {
		theme.setAttribute("href", "Styles/index.css");
	}
}

function square() {
	// Obtains an array of all <link>
	// elements.
	// Select your element using indexing.
	var theme = document.getElementById("change-style");

	// Change the value of href attribute
	// to change the css sheet.
	if (theme.getAttribute("href") != "Styles/square.css") {
		theme.setAttribute("href", "Styles/square.css");
	} else {
		theme.setAttribute("href", "Styles/square.css");
	}
}

function bougie() {
	// Obtains an array of all <link>
	// elements.
	// Select your element using indexing.
	var theme = document.getElementById("change-style");

	// Change the value of href attribute
	// to change the css sheet.
	if (theme.getAttribute("href") != "Styles/bougie.css") {
		theme.setAttribute("href", "Styles/bougie.css");
	} else {
		theme.setAttribute("href", "Styles/bougie.css");
	}
}

function voilier() {
	// Obtains an array of all <link>
	// elements.
	// Select your element using indexing.
	var theme = document.getElementById("change-style");

	// Change the value of href attribute
	// to change the css sheet.
	if (theme.getAttribute("href") != "Styles/voilier.css") {
		theme.setAttribute("href", "Styles/voilier.css");
	} else {
		theme.setAttribute("href", "Styles/voilier.css");
	}
}

// // Obtains an array of all <link>
// // elements.
// // Select your element using indexing.
// var theme = document.getElementById("change-style");

// // Change the value of href attribute
// // to change the css sheet.
// if (theme.getAttribute("href") != "Styles/square.css") {
// 	theme.setAttribute("href", "Styles/square.css");
// } else {
// 	theme.setAttribute("href", "Styles/square.css");
// }


// Switch statement for JavaScript: 
var theme = document.getElementById("change-style");

switch (theme.getAttribute("href")) {
	case "Styles/index.css":
		theme.setAttribute("href", "Styles/index.css");
		break;

	case "Styles/square.css":
		theme.setAttribute("href", "Styles/square.css");
		break;

	case "Styles/bougie.css":
		theme.setAttribute("href", "Styles/bougie.css");
		break;

	case "Styles/voilier.css":
		theme.setAttribute("href", "Styles/voilier.css");
		break;
}

// function swap(cssFile) {
// 	var link = document.getElementById("style")
// 	link.href = cssFile;
// }
// <button onclick="swap('Stylesheets/style3.css')"> Fusée</button>