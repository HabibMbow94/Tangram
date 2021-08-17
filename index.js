// var theme = document.getElementById("change-style");
// function index() {
// 	// Obtains an array of all <link>
// 	// elements.
// 	// Select your element using indexing.
// 	// Change the value of href attribute
// 	// to change the css sheet.
// 	if (theme.getAttribute("href") != "Styles/index.css") {
// 		theme.setAttribute("href", "Styles/index.css");
// 	} else {
// 		theme.setAttribute("href", "Styles/index.css");
// 	}
// }
// function square() {
// 	// Obtains an array of all <link>
// 	// elements.
// 	// Select your element using indexing.
// 	// var theme = document.getElementById("change-style");

// 	// Change the value of href attribute
// 	// to change the css sheet.
// 	if (theme.getAttribute("href") != "Styles/square.css") {
// 		theme.setAttribute("href", "Styles/square.css");
// 	} else {
// 		theme.setAttribute("href", "Styles/square.css");
// 	}
// }
// function boat() {
// 	// Obtains an array of all <link>
// 	// elements.
// 	// Select your element using indexing.
// 	// var theme = document.getElementById("change-style");

// 	// Change the value of href attribute
// 	// to change the css sheet.
// 	if (theme.getAttribute("href") != "Styles/boat.css") {
// 		theme.setAttribute("href", "Styles/boat.css");
// 	} else {
// 		theme.setAttribute("href", "Styles/boat.css");
// 	}
// }
// 	// Obtains an array of all <link>
// 	// elements.
// 	// Select your element using indexing.
// // var theme = document.getElementById("change-style");

// // Change the value of href attribute
// // to change the css sheet.
// if (theme.getAttribute("href") != "Styles/square.css") {
// 	theme.setAttribute("href", "Styles/square.css");
// } else {
// 		theme.setAttribute("href", "Styles/square.css");
// }

function swap(cssFile) {
    var link = document.getElementById("style")
    link.href = cssFile;
}