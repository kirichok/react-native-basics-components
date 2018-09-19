import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

/**
 * Device info
 * */

export const info = {
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',

    get isTablet() {
        return DeviceInfo.isTablet()
    },
    get isPhone() {
        return !DeviceInfo.isTablet()
    },
    get version() {
        return DeviceInfo.getVersion()
    }
};

/**
 * Window size
 * */
export const dimensions = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
};

