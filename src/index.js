import { Dimensions, PixelRatio } from 'react-native';

// Get window dimensions
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

// Orientation check
export const isPortrait = (_width, _height) => {
  if (!_width && !_height) {
    const { width, height } = Dimensions.get('window');
    return width < height;
  }
  return _width < _height;
};

// Standard mockup width (iPhone 11)
const STANDARD_WIDTH = 414;
const CURRENT_WIDTH = WINDOW_WIDTH;
const USE_FOR_BIGGER_SIZE = true;

// Dynamic size utility
export function dynamicSize(size) {
  const { width, height } = Dimensions.get('window');
  const WIDTH = isPortrait(width, height) ? width : height;
  const K = WIDTH / STANDARD_WIDTH;
  return K * size;
}

// Dynamic font size
export function getFontSize(size) {
  if (USE_FOR_BIGGER_SIZE || CURRENT_WIDTH < STANDARD_WIDTH) {
    return dynamicSize(size);
  }
  return size;
}

// Responsive percentage-based height/width
export const responsiveHeight = (h) => {
  const { height } = Dimensions.get('window');
  return height * (h / 100);
};

export const responsiveWidth = (w) => {
  const { width } = Dimensions.get('window');
  return width * (w / 100);
};
