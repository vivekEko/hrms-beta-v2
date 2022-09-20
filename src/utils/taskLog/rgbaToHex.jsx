function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return console.log("rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")");
  } else {
    return console.log("rgb(" + r + ", " + g + ", " + b + ")");
  }
}

hexToRGB("#00ac69", 0.2);
