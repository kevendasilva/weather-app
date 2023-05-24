import { Container } from './src/components/Container';
import { DailySummary } from './src/components/DailySummary';
import { DateTime } from './src/components/DateTime';
import { Location } from './src/components/Location';
import { Temperature } from './src/components/Temperature';
import { Weather } from './src/components/Weather';

export default function App() {
  return (
    <Container>
      <Location city="Fortaleza" state="CE" />
      <DateTime datetime="terça-feira, 20 de maio" />
      <Weather temperature="" wind="" humidity="" />
      <Temperature temperatureInDegrees="31º" />
      <DailySummary
        content="Agora, sensação térmica de +34º.
Possíveis pancadas de chuva ao final do dia."
      />
    </Container>
  );
}
