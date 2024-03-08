import React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  const url = 'https://cursomatematicadozero.or.app.br/';

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
