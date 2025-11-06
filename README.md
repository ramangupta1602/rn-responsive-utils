# rn-responsive-utils

A lightweight React Native utility for responsive design — scale UI elements and font sizes across devices easily.

## 📦 Installation

```bash
npm install rn-responsive-utils

yarn add rn-responsive-utils

🚀 Usage

import {
  dynamicSize,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
  isPortrait,
} from 'rn-responsive-utils';

const styles = {
  container: {
    width: responsiveWidth(90),
    height: responsiveHeight(50),
  },
  text: {
    fontSize: getFontSize(16),
  },
};

