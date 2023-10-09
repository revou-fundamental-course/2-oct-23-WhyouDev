const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert");
const reverseButton = document.getElementById("reverse");
const resetButton = document.getElementById("reset");
const caraKalkulasi = document.getElementById("caraKalkulasi");

convertButton.addEventListener("click", () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheitValue;
    caraKalkulasi.value = `Celsius to Fahrenheit Conversion:\n${celsiusValue} °C * 9/5 + 32 = ${fahrenheitValue} °F`;
    document.getElementById("calculation-description").textContent = `${celsiusInput}`
  } else if (!isNaN(fahrenheitValue)) {
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    celsiusInput.value = celsiusValue;
    caraKalkulasi.value = `Fahrenheit to Celsius Conversion:\n(${fahrenheitValue} °F - 32) * 5/9 = ${celsiusValue} °C`;
  }
});

reverseButton.addEventListener("click", () => {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  const celsiusValue = celsiusInput.value;
  celsiusInput.value = fahrenheitInput.value;
  fahrenheitInput.value = celsiusValue;
});

resetButton.addEventListener("click", () => {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  caraKalkulasi.value = "";
});

