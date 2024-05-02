import { Dimensions, NativeModules, Platform } from 'react-native';
import reactotron from 'reactotron-react-native';
import { getBrand, getDeviceName } from 'react-native-device-info';

const { scriptURL } = NativeModules.SourceCode;
const hostName = scriptURL.split('://')[1].split(':')[0];

reactotron.configure({ host: hostName }).useReactNative();

reactotron.onCustomCommand({
  command: 'teste main',
  handler: () => {
    const { height, width } = Dimensions.get('window');
    reactotron.display({
      name: 'Get device info',
      value: {
        width: width,
        height: height,
        OS: Platform.OS,
        OSVersion: Platform.Version,
        Brand: getBrand,
        DeviceName: getDeviceName,
      },
      important: true,
    });
  },
});

export default reactotron;
