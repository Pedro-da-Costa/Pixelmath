import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default function Loader() {
  // Controle da animação (inicia em 0)
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Cria um loop infinito semelhante ao 'infinite' do CSS
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1, // Vai de 0 até 1
        duration: 2000, // 2s de duração
        easing: Easing.linear, // Movimento constante
        useNativeDriver: false, // Obrigatório false para animar 'width'
      })
    ).start();
  }, [animatedValue]);

  // Interpolação: converte o valor de 0-1 para 0%-100% da largura
  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.loaderContainer}>
      <View style={styles.textWrapper}>
        {/* Texto de Fundo (Apagado / Desligado) */}
        <Text style={[styles.text, styles.textBackground]}>Loading...</Text>

        {/* Máscara Animada (Desliza da esquerda pra direita) */}
        <Animated.View
          style={[styles.animatedMask, { width: widthInterpolated }]}>
          {/* Texto de Frente (Aceso / Amarelo Neon) */}
          <Text style={[styles.text, styles.textForeground]}>Loading...</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: '#000000', // Fundo preto
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    position: 'relative',
  },
  text: {
    fontFamily: 'PressStart2P',
    fontSize: 30,
  },
  textBackground: {
    color: '#333333', // Cinza escuro simulando uma lâmpada apagada
  },
  animatedMask: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  textForeground: {
    color: '#FFFF00', // Amarelo
    width: 300,
    // Efeito de brilho Neon nativo do React Native
    textShadowColor: '#FFFF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
