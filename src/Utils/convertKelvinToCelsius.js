const convertKelvinToCelsius = (temperature) => {
  const kelvin = 273.15;
  return parseFloat(temperature - kelvin, 10).toFixed(2);
};

export default convertKelvinToCelsius;
