import { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type DailySummaryProps = {
  content: string
}

export const DailySummary: FunctionComponent<DailySummaryProps> = ({ content }) => {
  return (
    <View style={styles.dailySummaryContainer}>
      <Text style={styles.dailySummary}>Resumo diário</Text>
      <Text style={styles.dailySummary}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dailySummary: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
  },
  dailySummaryContainer: {
    flex: 4,
    gap: 16,
    justifyContent: 'center',
    marginHorizontal: 30,
  }
});
