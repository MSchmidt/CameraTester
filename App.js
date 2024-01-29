import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PreCam from './src/PreCam';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PreCam />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
