import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TelaSobre({ aoVoltar }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.tituloSobre}>SOBRE O PROJETO</Text>

      <View style={styles.cardInfo}>
        <ScrollView contentContainerStyle={styles.scrollInterno}>
          <Text style={styles.textoCorpo}>
             Este aplicativo foi desenvolvido para o projeto de Programação de Dispositivos Android do curso de Ciência da Computação da Universidade Estácio de Sá de Niterói em parceria com o aluno Fábio Moura Machado do departamento de matemática da Universidade Estadual do Rio de Janeiro.
            {"\n\n"}
            Desenvolvido em React Native e C++ por:
            {"\n\n"}
            -Ailton Alves de Araujo Neto 
            {"\n"}
            -Fábio Moura Machado
            {"\n"}
            -Leonardo da Silva Dionízio
            {"\n"}
            -Letícia Simões Figueiras Machado 
            {"\n"}
            -Lucas Carvalho 
            {"\n"}
            -Pedro da Costa Cardoso 
          </Text>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={aoVoltar}>
        <Text style={styles.textoBotao}>VOLTAR AO INÍCIO</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloSobre: {
    fontSize: 19,
    color: '#FFD700',
    letterSpacing: 3,
    marginBottom: 30,
    textTransform: 'uppercase',
    fontFamily: 'PressStart2P', 
  },
  cardInfo: {
    width: '85%',
    maxHeight: 300, 
    padding: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
    borderRadius: 0,
    backgroundColor: '#1E1E1E',
  },
  scrollInterno: {
    paddingBottom: 20,
  },
  textoCorpo: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'PressStart2P', 
  },
  botaoVoltar: {
    marginTop: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#a422dc',
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#f2d101',
    fontSize: 12,
    letterSpacing: 1,
    textAlign: 'center',
    fontFamily: 'PressStart2P'
  },
});