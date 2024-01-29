import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCameraPermission} from 'react-native-vision-camera';
import Cam from './Cam';

export default function PreCam() {
  const [showCamera, setShowCamera] = useState(false);
  const {hasPermission, requestPermission} = useCameraPermission();

  if (hasPermission === false) {
    requestPermission();
  }

  return (
    <View style={styles.container}>
      {showCamera === true && hasPermission ? (
        <Cam onDismiss={() => setShowCamera(false)} />
      ) : (
        <TouchableOpacity
          onPress={() => setShowCamera(true)}
          style={styles.button}>
          <Text style={styles.buttonText}>Cam</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 80,
    width: 90,
    height: 60,
    borderRadius: 12,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 32,
  },
});
