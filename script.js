const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');

function updateColor() {
  const selectedColor = colorPicker.value;
  console.log(selectedColor);
  colorDisplay.style.backgroundColor = selectedColor;
  colorCode.innerText = `Selected Color: ${selectedColor}`;
}

document.getElementById('colorPicker').addEventListener('input', updateColor);
