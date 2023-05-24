import { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native'

type TemperatureProps = {
  temperatureInDegrees: string
};

export const Temperature: FunctionComponent<TemperatureProps> = ({ temperatureInDegrees }) => {
  return (
    <View>
      <Text style={styles.temperature}>{temperatureInDegrees}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  temperature: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 144,
    color: '#000000',
  }
});
