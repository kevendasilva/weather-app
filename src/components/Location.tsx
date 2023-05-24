import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type LocationProps = {
  city: string,
  state: string
}

export const Location: FunctionComponent<LocationProps> = ({ city, state }) => {
  return (
    <View style={styles.locationContainer}>
      <Text style={styles.location}>{city} - {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '700',
  },
  locationContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});
