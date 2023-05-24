import { Container } from './src/components/Container';
import { DailySummary } from './src/components/DailySummary';
import { DateTime } from './src/components/DateTime';
import { Location } from './src/components/Location';
import { Metrics } from './src/components/Metrics';
import { Temperature } from './src/components/Temperature';
import { Weather } from './src/components/Weather';

import data from './data.json'

export default function App() {
  const weatherData = getRandomSample();

  function getRandomSample() {
    return data[Math.floor(Math.random() * data.length)];
  }

  return (
    <Container>
      <Location city={weatherData.city} state={weatherData.state} />
      <DateTime datetime={weatherData.date} />
      <Weather
        temperature={weatherData.temperature}
        wind={weatherData.wind}
        humidity={weatherData.humidity}
      />
      <Temperature temperatureInDegrees={weatherData.temperature} />
      <DailySummary
        content={weatherData.daily_summary}
      />
      <Metrics
        wind={weatherData.wind}
        humidity={weatherData.humidity}
        visibility={weatherData.visibility}
      />
    </Container>
  );
}
