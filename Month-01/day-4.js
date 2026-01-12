// - **Day 4:** Convert Celsius to Fahrenheit

// °F = (°C × 9/5) + 32
// °C = (°F − 32) × 5/9

function convertCelsius(cel) {
  let fahren = (cel * 9) / 5 + 32;
  console.log(fahren);
}

convertCelsius(26);
