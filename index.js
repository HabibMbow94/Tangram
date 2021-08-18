
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
