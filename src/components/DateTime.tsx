import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type DateTimeProps = {
  datetime: string
};

export const DateTime: FunctionComponent<DateTimeProps> = ({ datetime }) => {
  return (
    <View style={ styles.datetimeContainer }>
      <Text style={ styles.datetime }>{ datetime }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  datetime: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF'
  },
  datetimeContainer: {
    flex: 1,
    backgroundColor: '#030006',
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center'
  }
});
