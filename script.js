const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

// Create a new blank image data object
const imageData = ctx.createImageData(canvas.width, canvas.height);
const data = imageData.data; // A 1D array representing pixels (R, G, B, A)

// Function to set a single pixel
function setPixel(x, y, r, g, b, a) {
  const index = (y * canvas.width + x) * 4;
  data[index] = r; // Red
  data[index + 1] = g; // Green
  data[index + 2] = b; // Blue
  data[index + 3] = a; // Alpha
}

// Example: Draw a red pixel at (10, 10)
setPixel(10, 10, 255, 0, 0, 255);

// After manipulating the data array, put the image data onto the canvas
ctx.putImageData(imageData, 0, 0);
