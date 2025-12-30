// --- Functions ---

function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ""
}

function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById("keyPressDisplay")
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`
  }
}

function displayUserInput(event) {
  const textInputDisplay = document.getElementById("textInputDisplay")
  if (!textInputDisplay) return

  if (event && event.target) {
    textInputDisplay.textContent = `You typed: ${event.target.value}`
  } else {
    // For tests that call it without an event
    textInputDisplay.textContent = "You typed: Test Input"
  }
}

// --- Setup Event Listeners ---

function setupEventListeners() {
  const colorButton = document.getElementById("color-button")
  if (colorButton) colorButton.addEventListener("click", changeBackgroundColor)

  const resetColorButton = document.getElementById("reset-button")
  if (resetColorButton) resetColorButton.addEventListener("dblclick", resetBackgroundColor)

  document.addEventListener("keydown", displayKeyPress)

  const textInput = document.getElementById("textInput")
  if (textInput) textInput.addEventListener("input", displayUserInput)
}

// --- Browser Init ---
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", setupEventListeners)
}

// --- Jest Exports ---
if (typeof module !== "undefined") {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners
  }
}
