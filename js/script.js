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

// emoji
document.addEventListener("DOMContentLoaded", () => {
	const emoji = document.querySelector(".emoji"),
		slider = document.querySelector(".slider"),
		tempOutput = document.querySelector(".temperature-output"),
		displayTemp = (temperature) => {
			//Display temperature
			tempOutput.textContent = temperature;

			//Display emoji
			if (temperature >= 0 && temperature <= 8) {
				emoji.textContent = "🥶";
				emoji.setAttribute("aria-label", "freezing face");
			} else if (temperature > 8 && temperature <= 16) {
				emoji.textContent = "😬";
				emoji.setAttribute("aria-label", "cold face");
			} else if (temperature > 16 && temperature <= 24) {
				emoji.textContent = "😊";
				emoji.setAttribute("aria-label", "happy face");
			} else if (temperature > 24 && temperature <= 32) {
				emoji.textContent = "😅";
				emoji.setAttribute("aria-label", "warm face");
			} else if (temperature > 32 && temperature <= 64){
				emoji.textContent = "🥵";
				emoji.setAttribute("aria-label", "hot face");
			} else {
        emoji.textContent = "💀"
        emoji.setAttribute("aria-label", "dead face");
      }
		};

	slider.addEventListener("input", () => displayTemp(slider.value));

	if (location.pathname.includes("fullcpgrid")) {
		let temperature = 0;

		const interval = setInterval(() => {
			//Remove interval if max temperature is reached
			if (temperature === 40) clearInterval(interval);

			//Update slider value
			slider.value = temperature;

			//Display temperature and emoji
			displayTemp(temperature);

			//Increase temperature
			temperature++;
		}, 100);
	}
});

