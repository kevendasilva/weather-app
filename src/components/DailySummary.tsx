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
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
  },
  dailySummaryContainer: {
    gap: 16,
    flex: 4,
    justifyContent: 'center',
  }
});
