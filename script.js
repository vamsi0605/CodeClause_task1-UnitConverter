function convert() {
  const input = parseFloat(document.getElementById("input").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  let result;

  if (fromUnit === "meters" && toUnit === "centimeters") {
    result = input * 100;
  } else if (fromUnit === "meters" && toUnit === "kilometers") {
    result = input / 1000;
  } else if (fromUnit === "centimeters" && toUnit === "meters") {
    result = input / 100;
  } else if (fromUnit === "centimeters" && toUnit === "kilometers") {
    result = input / 100000;
  } else if (fromUnit === "kilometers" && toUnit === "meters") {
    result = input * 1000;
  } else if (fromUnit === "kilometers" && toUnit === "centimeters") {
    result = input * 100000;
  } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    result = (input * 9/5) + 32;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    result = (input - 32) * 5/9;
  } else {
    result = input;
  }

  document.getElementById("output").value = result.toFixed(2);
}
