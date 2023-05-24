import { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native'

type TemperatureProps = {
  temperatureInDegrees: string
};

export const Temperature: FunctionComponent<TemperatureProps> = ({ temperatureInDegrees }) => {
  return (
    <View style={styles.temperatureContainer}>
      <Text style={styles.temperature}>{temperatureInDegrees}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  temperature: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 144,
    fontWeight: '700',
  },
  temperatureContainer: {
    flex: 5,
    justifyContent: 'center'
  }
});
