import { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ContainerProps = {
  children: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      { children }
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
