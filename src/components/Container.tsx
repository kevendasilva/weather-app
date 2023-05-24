import { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ContainerProps = {
  children: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      { children }
      <View style={{flex: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F93B',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});
