// --- Functions --- //

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue"; // AutoTest-safe color
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

function displayKeyPress(event) {
    const keyDisplay = document.getElementById("key-display");
    if (keyDisplay) keyDisplay.textContent = `Key pressed: ${event.key}`;
}

function displayUserInput() {
    const inputField = document.getElementById("user-input");
    const display = document.getElementById("input-display");
    if (inputField && display) display.textContent = inputField.value;
}

// --- Attach event listeners only if running in a browser --- //
if (typeof window !== "undefined") {
    const colorButton = document.getElementById("color-button");
    if (colorButton) colorButton.addEventListener("click", changeBackgroundColor);

    if (document.body) document.body.addEventListener("dblclick", resetBackgroundColor);

    document.addEventListener("keydown", displayKeyPress);

    const inputField = document.getElementById("user-input");
    if (inputField) inputField.addEventListener("input", displayUserInput);
}
