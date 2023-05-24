import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type DateTimeProps = {
  datetime: string
};

export const DateTime: FunctionComponent<DateTimeProps> = ({ datetime }) => {
  return (
    <View style={styles.datetimeContainer}>
      <Text style={styles.datetime}>{datetime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  datetime: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
  },
  datetimeContainer: {
    backgroundColor: '#030006',
    borderRadius: 40,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
});
