import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import TelaInicial from './Menu_inicial/TelaInicial.js'; //Menu_inicial\TelaInicial.jsk
import TelaSobre from './Menu_inicial/TelaSobre';
import JogoTorre from './Jogo_da_Torre/jogo_torre.js';
import Menu from './Menu_inicial/Menu.js';


export default function App() {
  const [telaAtual, setTelaAtual] = useState('HOME');

  //baixando a fonte pixelada para a tela "sobre"
  const [fontsLoaded] = useFonts({
    PressStart2P: require('./assets/press-start-2p-latin-400-normal.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

 return (
  <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

    {telaAtual === 'HOME' && (
      <TelaInicial 
        aoIniciar={() => setTelaAtual('MENU')}
        aoClicarNoSobre={() => setTelaAtual('SOBRE')}
      />
    )}

    {telaAtual === 'SOBRE' && (
      <TelaSobre aoVoltar={() => setTelaAtual('HOME')} />
    )}

    {telaAtual === 'MENU' && (
      <Menu 
        aoVoltar={() => setTelaAtual('HOME')}
        abrirJogoTorre={() => setTelaAtual('JOGO_TORRE')}
        abrirJogoRei={() => setTelaAtual('JOGO_REI')}
      />
    )}
    {telaAtual === 'JOGO_TORRE' && (
  <JogoTorre
    aoVoltar={() => setTelaAtual('MENU')}
    modo="TORRE"
  />
)}

{telaAtual === 'JOGO_REI' && (
  <JogoTorre
    aoVoltar={() => setTelaAtual('MENU')}
    modo="REI"
  />
)}

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
});