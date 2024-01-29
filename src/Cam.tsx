import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';

function NoCameraDeviceError() {
  return <></>;
}

type Props = {
  onDismiss: () => void;
};

export default function Cam(props: Props) {
  const device = useCameraDevice('back', {
    physicalDevices: ['ultra-wide-angle-camera'],
  });

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    // Worklet does nothing. Still crashing sometimes
    console.log('Worklet');
    console.log(frame.toString());
  }, []);

  if (device == null) return <NoCameraDeviceError />;
  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
        pixelFormat="yuv"
      />
      <TouchableOpacity style={styles.button} onPress={props.onDismiss}>
        <Text style={styles.buttonText}>{'\u2715'}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
