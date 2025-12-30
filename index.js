// Change body background to a random color
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// Reset body background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Display the last key pressed
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  keyPressDisplay.textContent = `Key pressed: ${event.key}`
}

// Display user input in real-time
function displayUserInput(event) {
  const textInputDisplay = document.getElementById('textInputDisplay')
  textInputDisplay.textContent = `You typed: ${event.target.value}`
}

// Setup all event listeners
function setupEventListeners() {
  const colorButton = document.getElementById('color-button')
  const resetButton = document.getElementById('reset-button')
  const textInput = document.getElementById('textInput')

  colorButton.addEventListener('click', changeBackgroundColor)
  resetButton.addEventListener('dblclick', resetBackgroundColor)
  document.body.addEventListener('keydown', displayKeyPress)
  textInput.addEventListener('input', displayUserInput)
}

// Initialize event listeners
setupEventListeners()

// For Jest testing
if (typeof module !== 'undefined') {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners
  }
}
