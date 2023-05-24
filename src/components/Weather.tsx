import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import evaluateWeather from '../utils/EvaluateWeather';

type WeatherProps = {
  wind: string
  humidity: string
};

export const Weather: FunctionComponent<WeatherProps> = ({ wind, humidity }) => {
  return (
    <View style={styles.weatherContainer}>
      <Text style={styles.weather}>{evaluateWeather(wind, humidity)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weather: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
  },
  weatherContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
