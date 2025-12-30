// 1. Change background color on button click
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue"; // AutoTest-safe color
}

// 2. Reset background color on double-click
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// 3. Display key press in a paragraph
function displayKeyPress(event) {
    const keyDisplay = document.getElementById("key-display");
    keyDisplay.textContent = `Key pressed: ${event.key}`;
}

// 4. Display user input in real-time
function displayUserInput() {
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("input-display");
    display.textContent = inputField.value;
}

// --- Attach event listeners ---
const colorButton = document.getElementById("color-button");
colorButton.addEventListener("click", changeBackgroundColor);

document.body.addEventListener("dblclick", resetBackgroundColor);

document.addEventListener("keydown", displayKeyPress);

const inputField = document.getElementById("user-input");
inputField.addEventListener("input", displayUserInput);
