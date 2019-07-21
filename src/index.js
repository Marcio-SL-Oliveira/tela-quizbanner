/*
.editorconfig
yarn add eslint -D
yarn eslint --init
remover package-lock.json
yarn
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
editar .eslintrc.js
incluir .prettierrc
Erros no emulador: react-native start --reset-cache ou react-native run-android
Debug: Debug Js Remotely, Abre o navegador, Botão Direito, Inspecionar, Console
Baixar reactotron
yarn add reactotron-react-native
  criar as pastas src e config
  configurar em .eslintrc.js para o reactotron  __DEV__: 'readonly'
C:\Users\Marcio\AppData\Local\Android\Sdk\platform-tools\adb reverse tcp:9090 tcp:9090

yarn add styled-components

  www.material.io

yarn add react-navigation react-native-gesture-handler
react-native link react-native-gesture-handler

yarn
*/
import React from 'react';
import { View } from 'react-native';

import './config/ReactotronConfig';
// import { Container } from './styles';
import Main from './pages/Main';

export default function app() {
  return (
    <View>
      <Main />
    </View>
  );
}
