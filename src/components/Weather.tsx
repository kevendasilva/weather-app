import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import evaluateWeather from '../utils/EvaluateWeather';

type WeatherProps = {
  temperature: string
  wind: string
  humidity: string
};

export const Weather: FunctionComponent<WeatherProps> = ({ temperature, wind, humidity }) => {
  return (
    <View style={styles.weatherContainer}>
      <Text style={styles.weather}>{evaluateWeather(temperature, wind, humidity)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weather: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
  },
  weatherContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
