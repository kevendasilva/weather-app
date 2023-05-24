import { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

type ContainerProps = {
  children: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />
      {children}
      <View style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F9F93B',
    flex: 1,
    gap: 30,
    justifyContent: 'center',
  },
});
