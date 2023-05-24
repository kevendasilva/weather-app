function evaluateWeather(wind: string, humidity: string) {
  // Vento alto e humidade baixa ou média -> ensolarado
  // Vento alto e humidade alta -> chuva
  // Vento baixo ou médio e humidade alta -> risco de chuva
  //
  // Vento:
  //         < 15 -> baixo
  // 15 <= x < 20 -> médio
  //      20 <= x -> alto
  // Humidade:
  //         < 50 -> baixo
  // 50 <= x < 75 -> médio
  //      75 <= x -> alto
  const windNumber = Number(removeUnit(wind));
  const humidityNumber = Number(removeUnit(humidity));

  if (windNumber >= 20 && (humidityNumber < 50 || 50 <= humidityNumber && humidityNumber < 75)) {
    return "ensolarado"
  }

  if (windNumber >= 20 && humidityNumber > 75) {
    return "chuva"
  }

  if ((windNumber < 15 || 15 <= windNumber && windNumber < 20) && humidityNumber > 75) {
    return "risco de chuva"
  }

  return "ameno"
};

function removeUnit(metric: string) {
  return metric.replace(/[^0-9]/g, "");
}

export default evaluateWeather;
