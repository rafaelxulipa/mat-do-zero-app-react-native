import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  const url = 'https://cursomatematicadozero.or.app.br/';

  return (
    <WebView
      source={{ uri: url }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}
