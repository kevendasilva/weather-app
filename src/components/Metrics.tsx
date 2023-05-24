import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

type MetricsProps = {
  wind: string
  humidity: string
  visibility: string
};

export const Metrics: FunctionComponent<MetricsProps> = ({ wind, humidity, visibility }) => {
  return (
    <View style={styles.metricsContainer}>
      <View style={styles.metric}>
        <FontAwesome5 style={styles.icon} name="wind" size={48} color="#F9F93B" />
        <Text style={styles.data}>{wind}</Text>
        <Text style={styles.label}>vento</Text>
      </View>
      <View style={styles.metric}>
        <FontAwesome5 style={styles.icon} name="water" size={48} color="#F9F93B" />
        <Text style={styles.data}>{humidity}</Text>
        <Text style={styles.label}>humidade</Text>
      </View>
      <View style={styles.metric}>
        <FontAwesome5 style={styles.icon} name="eye" size={48} color="#F9F93B" />
        <Text style={styles.data}>{visibility}</Text>
        <Text style={styles.label}>visibilidade</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metric: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    minWidth: 80,
  },
  metricsContainer: {
    backgroundColor: '#010001',
    borderRadius: 10,
    flex: 2,
    flexDirection: 'row',
    gap: 30,
    margin: 30,
    padding: 30,
  },
  icon: {
    marginBottom: 12,
  },
  data: {
    color: '#F9F93B',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
  },
  label: {
    color: '#F9F93B',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '300',
  }
});
