import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;

export const scale = (size: number): number => (SCREEN_WIDTH / BASE_WIDTH) * size;

export const verticalScale = (size: number): number => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

export const moderateScale = (size: number, factor = 0.5): number => 
  size + (scale(size) - size) * factor;

export const fontScale = (size: number): number => size * PixelRatio.getFontScale();

export { SCREEN_WIDTH, SCREEN_HEIGHT }; 