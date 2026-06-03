import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';

export default function TelaInicial({ aoIniciar, aoClicarNoSobre }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/pixelmath.png')} //pixelmath.png
        style={styles.background}
        resizeMode="stretch"
      >
        {/* Área de botões */}
        <View style={styles.menuContainer}>
          
          {/* botão iniciar */}
          <TouchableOpacity 
            style={[styles.botaoInvisivel, { top: '64%' }]} 
            onPress={aoIniciar}
          />

          {/* botão sobre */}
          <TouchableOpacity 
            style={[styles.botaoInvisivel, { top: '76%' }]} 
            onPress={aoClicarNoSobre}
          />

          {/* botão sair */}
          <TouchableOpacity 
            style={[styles.botaoInvisivel, { top: '87%' }]} 
            onPress={() => BackHandler.exitApp()} 
          />

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    flex: 1,
    position: 'relative',
  },
  botaoInvisivel: {
    position: 'absolute',
    left: '22%',
    width: '56%',
    height: '9%',
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // botão invisível  
    borderRadius: 10,
  },
});