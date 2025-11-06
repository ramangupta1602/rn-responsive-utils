# rn-responsive-utils

A lightweight React Native utility for responsive design — scale UI elements and font sizes across devices easily.

## 📦 Installation

```bash
npm install rn-responsive-utils

yarn add rn-responsive-utils

🚀 Usage

import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
  dynamicSize,
  getFontSize,
  isPortrait,
  responsiveHeight,
  responsiveWidth,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from 'rn-responsive-utils';

const App = () => {
  const [orientation, setOrientation] = useState(isPortrait());

  useEffect(() => {
    // Listen for orientation changes
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setOrientation(isPortrait(window.width, window.height));
    });

    return () => subscription?.remove?.();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responsive Utils Demo</Text>

      <Text style={styles.text}>
        Orientation: {orientation ? 'Portrait' : 'Landscape'}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Window Width: {WINDOW_WIDTH.toFixed(0)} px
        </Text>
        <Text style={styles.cardText}>
          Window Height: {WINDOW_HEIGHT.toFixed(0)} px
        </Text>
      </View>

      <Text style={styles.dynamicSizeText}>
        This text scales dynamically!
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveWidth(5),
  },
  title: {
    fontSize: getFontSize(22),
    fontWeight: '700',
    color: '#333',
    marginBottom: responsiveHeight(2),
  },
  text: {
    fontSize: getFontSize(16),
    color: '#555',
    marginBottom: responsiveHeight(3),
  },
  card: {
    width: responsiveWidth(95),
    height: responsiveHeight(20),
    backgroundColor: '#fff',
    borderRadius: dynamicSize(12),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: dynamicSize(8),
    elevation: 3,
    marginBottom: responsiveHeight(3),
  },
  cardText: {
    fontSize: getFontSize(25),
    color: '#444',
    marginVertical: dynamicSize(10),
  },
  dynamicSizeText: {
    fontSize: getFontSize(20),
    color: '#007bff',
  },
});


