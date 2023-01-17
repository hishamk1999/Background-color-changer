const container = document.querySelector(".container");
const inputColor = document.getElementById("bg-color");

/**
 * @param {domElement} element the element that will be changed its background color
 * @param {color} color the background color ex: red, green, blue and #000
 */
function changeBgColor(element, color) {
	localStorage.setItem("bg-color", color);
	// Set the background color to the specific element
	element.style.background = color;
}

// add event listeners to the input .
inputColor.addEventListener("change", () => {
	changeBgColor(container, inputColor.value);
});

/**
 * when the page loads the first time if there is
 * found value found in local storage will change the background.
 * Otherwise, nothing will happen.
 */
window.onload = () => {
	// get the color from localStorage
	let color = localStorage.getItem("bg-color");
	// if color is set checked by logical AND (&&) operator will return True
	// then changeBgColor(container, color) will be implemented.
	color && changeBgColor(container, color);
};
