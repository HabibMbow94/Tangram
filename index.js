

// function basic() {
// 	// Obtains an array of all <link>
// 	// elements.
// 	// Select your element using indexing.
// 	var theme = document.getElementById("change-style");

// 	// Change the value of href attribute
// 	// to change the css sheet.
// 	if (theme.getAttribute("href") != "Styles/basic.css") {
// 		theme.setAttribute("href", "Styles/basic.css");
// 	} else {
// 		theme.setAttribute("href", "Styles/basic.css");
// 	}
// }
// function square() {
// 	// Obtains an array of all <link>
// 	// elements.
// 	// Select your element using indexing.
// 	var theme = document.getElementById("change-style");

// 	// Change the value of href attribute
// 	// to change the css sheet.
// 	if (theme.getAttribute("href") != "Styles/square.css") {
// 		theme.setAttribute("href", "Styles/square.css");
// 	} else {
// 		theme.setAttribute("href", "Styles/square.css");
// 	}
// }
// function poule() {
// 	// Obtains an array of all <link>
// 	// elements.
// 	// Select your element using indexing.
// 	var theme = document.getElementById("change-style");

// 	// Change the value of href attribute
// 	// to change the css sheet.
// 	if (theme.getAttribute("href") != "Styles/poule.css") {
// 		theme.setAttribute("href", "Styles/poule.css");
// 	} else {
// 		theme.setAttribute("href", "Styles/poule.css");
// 	}
// }
// 	// Obtains an array of all <link>
// 	// elements.
// 	// Select your element using indexing.
var theme = document.getElementById("change-style");

// Change the value of href attribute
// to change the css sheet.
if (theme.getAttribute("href") != "Styles/square.css") {
	theme.setAttribute("href", "Styles/square.css");
} else {
		theme.setAttribute("href", "Styles/square.css");
}

function swap(cssFile) {
    var link = document.getElementById("change-style")
    link.href = cssFile;
}
