import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Menu({ aoVoltar, abrirJogoTorre, abrirJogoRei }) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>MENU</Text>

            <View style={styles.containerBotoesTopo}>

                <TouchableOpacity 
                    style={styles.botaoImagem} 
                    onPress={() => abrirJogoTorre && abrirJogoTorre()}
                >
                    <Image 
                        source={require('../assets/iconeTorre.png')}
                        style={styles.imagemBotao}
                    />
                    <Text style={styles.textoBotao}>JOGO DA TORRE</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.botaoImagem} 
                    onPress={() => abrirJogoRei && abrirJogoRei()}
                >
                    <Image 
                        source={require('../assets/iconeRei.png')}
                        style={styles.imagemBotao}
                    />
                    <Text style={styles.textoBotao}>JOGO DO REI</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity 
                style={styles.botaoVoltar} 
                onPress={() => aoVoltar && aoVoltar()}
            >
                 <Text style={styles.textoBotaoVoltar}>VOLTAR</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    titulo: {
        color: '#f2d101',
        fontSize: 24,
        fontFamily: 'PressStart2P',
        marginTop: 50,
        marginBottom: 30, 
    },

    containerBotoesTopo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        width: '100%',
        marginTop: 20, 
        paddingHorizontal: 10, 
    },

    botaoImagem: {
        alignItems: 'center',
    },

    imagemBotao: {
        width: 130, 
        height: 130,
        resizeMode: 'contain',
        borderRadius: 15,
    },

    botaoVoltar: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo preto semitransparente
        borderWidth: 2,
        borderColor: '#a422dc',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBotao: {
        color: '#f2d101',
        fontSize: 10, 
        textAlign: 'center', 
        textTransform: 'uppercase',
        fontFamily: 'PressStart2P',
        marginTop: 10,
    },

    textoBotaoVoltar: {
        color: '#f2d101',
        fontSize: 12,
        textTransform: 'uppercase',
        fontFamily: 'PressStart2P',
    },
});