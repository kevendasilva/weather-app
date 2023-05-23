import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type LocationProps = {
  city: string,
  state: string
}

export const Location: FunctionComponent<LocationProps> = ({city, state}) => {
  return (
    <View>
      <Text style={styles.location}>{city} - {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 22,
    color: '#000000',
  },
});
