import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
const metrics = {
    horizontal: {
        small: width * 0.02,
        medium: width * 0.04,
        large: width * 0.06,
    },
    vertical: {
        small: height * 0.02,
        medium: height * 0.04,
        large: height * 0.06,
    },
    borderRadii: {
        small: width * 0.01,
        medium: width * 0.02,
        large: width * 0.04,
    },
};

export { horizontalScale, verticalScale, moderateScale, metrics };
