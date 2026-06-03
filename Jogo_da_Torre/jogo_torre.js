import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

// Importa o componente de tela de carregamento.
import Loader from '../Loader';

// Obtém a largura da tela para criar um tabuleiro responsivo.
const { width } = Dimensions.get('window');
// Define o tamanho do tabuleiro, com um pequeno recuo das bordas da tela.
const BOARD_SIZE = width - 6;

// Componente principal da tela do Jogo.
export default function JogoTorre({ aoVoltar, modo }) {
  // Estado que controla se os preparativos do app foram concluídos.
  const [isAppReady, setIsAppReady] = useState(false);
  // Estado para controlar o jogador atual. Começa com o jogador 1.
  const [currentPlayer, setCurrentPlayer] = useState(1);
  // Estado para armazenar a posição da peça. Posição inicial em 'A1'.
  const [rookPosition, setRookPosition] = useState({ col: 'A', row: 1 });

  useEffect(() => {
    async function prepareApp() {
      try {
        const minimumTimePromise = new Promise(resolve => setTimeout(resolve, 3000));
        const loadAssetsPromise = new Promise(resolve => setTimeout(resolve, 1000)); 
        await Promise.all([minimumTimePromise, loadAssetsPromise]);
      } catch (e) {
        console.warn('Erro ao carregar o aplicativo:', e);
      } finally {
        setIsAppReady(true);
      }
    }
    prepareApp();
  }, []);

  if (!isAppReady) {
    return <Loader />;
  }

  // Define as linhas e colunas do tabuleiro de xadrez.
  const rows = [8, 7, 6, 5, 4, 3, 2, 1]; 
  const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; 

  const colToNumber = (col) => {
    return col.charCodeAt(0);
  };

  const isValidMove = (targetCol, targetRow) => {
    const colDiff = colToNumber(targetCol) - colToNumber(rookPosition.col);
    const rowDiff = targetRow - rookPosition.row;

    // Movimento vertical (apenas para cima)
    const verticalMove = targetCol === rookPosition.col && rowDiff > 0;

    // Movimento horizontal (apenas para a direita)
    const horizontalMove = targetRow === rookPosition.row && colDiff > 0;

    // Movimento diagonal (apenas para cima e direita)
    const diagonalMove = colDiff === rowDiff && colDiff > 0;

    // LÓGICA DO MODO TORRE: Anda quantas casas quiser (para cima ou direita)
    if (modo === 'TORRE') {
      return verticalMove || horizontalMove;
    }

    // LÓGICA DO MODO REI: Só anda de 1 em 1 casa (cima, direita ou diagonal)
    if (modo === 'REI') {
      const maxUmaCasa = colDiff <= 1 && rowDiff <= 1;
      return maxUmaCasa && (verticalMove || horizontalMove || diagonalMove);
    }

    return false;
  };

  // Carrega as texturas e imagens das peças
  const imgYellowTexture = require('../assets/textura_amarela.png');
  const imgPurpleTexture = require('../assets/textura_roxa.png');
  const imgGreenTexture = require('../assets/textura_verde.png');
  const imgRedTexture = require('../assets/textura_vermelha.png');
  
  // SELEÇÃO DINÂMICA DO ÍCONE DA PEÇA:
  const imgRook = require('../assets/Peca_de_torre.png');
  const imgKing = require('../assets/chess_king_transparent.png');
  const pieceImage = modo === 'REI' ? imgKing : imgRook;
  
  // Função chamada quando uma casa clicável (vermelha) é pressionada.
  const handleCellPress = (col, row) => {
    // 1. Atualiza a posição da peça para a casa clicada.
    setRookPosition({ col, row });

    // 2. Verifica se a peça chegou na casa final H8
    if (col === 'H' && row === 8) {
      Alert.alert(
        '🏆 FIM DE JOGO!',
        `Parabéns! O Jogador ${currentPlayer} levou o ${modo === 'REI' ? 'Rei' : 'Torre'} até H8 e venceu!`,
        [
          {
            text: 'Jogar Novamente',
            onPress: () => {
              setRookPosition({ col: 'A', row: 1 });
              setCurrentPlayer(1);
            },
          },
        ]
      );
      return; // Interrompe o código aqui para não passar o turno após a vitória
    }

    // 3. Altera a vez do jogador se ninguém ganhou ainda
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handleBackToMenu = () => {
    aoVoltar && aoVoltar();
  };

  return (
    <View style={styles.container}>
      {/* INDICADOR DE VEZ DO JOGADOR */}
      <View style={styles.turnIndicator}>
        <Text style={styles.turnIndicatorText}>VEZ DO JOGADOR {currentPlayer}</Text>
      </View>

      {/* Tabuleiro */}
      <View style={styles.boardWrapper}>
        <View style={styles.yellowBorder}>
          <View style={styles.board}>
            {rows.map((rowValue, rowIndex) => (
              <View key={`row-${rowIndex}`} style={styles.row}>
                {cols.map((colValue, colIndex) => {
                  let textureSource; 
                  let isClickable = false; 
                  let isPieceCell = false;

                  if (colValue === rookPosition.col && rowValue === rookPosition.row) {
                    isPieceCell = true;
                    textureSource = imgGreenTexture;
                  } else if (isValidMove(colValue, rowValue)) {
                    textureSource = imgRedTexture;
                    isClickable = true;
                  } else {
                    const isYellow = (rowIndex + colIndex) % 2 === 0;
                    textureSource = isYellow ? imgYellowTexture : imgPurpleTexture;
                  }

                  const CellContent = (
                    <ImageBackground
                      source={textureSource}
                      style={styles.cellBackground}
                      resizeMode="cover"
                    >
                      {colIndex === 0 && (
                        <View style={styles.badgeRow}>
                          <Text style={styles.badgeText}>{rowValue}</Text>
                        </View>
                      )}
                      {/* Renderiza a peça correta (Rei ou Torre) */}
                      {isPieceCell && (
                        <Image source={pieceImage} style={styles.rookImage} />
                      )}
                    </ImageBackground>
                  );

                  if (isClickable) {
                    return (
                      <TouchableOpacity
                        key={`col-${colIndex}`}
                        style={styles.square}
                        activeOpacity={0.7}
                        onPress={() => handleCellPress(colValue, rowValue)}
                      >
                        {CellContent}
                      </TouchableOpacity>
                    );
                  }

                  return (
                    <View key={`col-${colIndex}`} style={styles.square}>
                      {CellContent}
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        </View>

        {/* Legendas das colunas */}
        <View style={styles.bottomLabelsContainer}>
          {cols.map((col) => (
            <View key={`bottom-${col}`} style={styles.letterWrapper}>
              <Text style={styles.bottomLabelText}>{col}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* BOTÃO DE VOLTAR PARA O MENU */}
      <TouchableOpacity 
        style={styles.backButton} 
        activeOpacity={0.7}
        onPress={handleBackToMenu}
      >
        <Text style={styles.backButtonText}>VOLTAR PARA O MENU</Text>
      </TouchableOpacity>
    </View>
  );
}

// ... Seus estilos permanecem exatamente os mesmos lá embaixo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boardWrapper: {
    alignItems: 'center',
  },
  yellowBorder: {
    borderWidth: 3,
    borderColor: '#f2d101', 
  },
  board: {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
    flexDirection: 'column', 
    gap: 2, 
    backgroundColor: '#000000',
  },
  row: {
    flex: 1, 
    flexDirection: 'row', 
    gap: 2, 
  },
  square: {
    flex: 1, 
  },
  cellBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeRow: {
    position: 'absolute',
    top: 2,
    left: 2,
    backgroundColor: '#000000',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'PressStart2P',
    paddingTop: 3,
  },
  rookImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomLabelsContainer: {
    flexDirection: 'row',
    width: BOARD_SIZE,
    marginTop: 6,
  },
  letterWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  bottomLabelText: {
    color: '#FFFFFF',
    fontSize: 14,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontFamily: 'PressStart2P',
  },
  turnIndicator: {
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    borderWidth: 2,
    borderColor: '#a422dc', 
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  turnIndicatorText: {
    color: '#f2d101',
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
    fontFamily: 'PressStart2P',
  },
  backButton: {
    marginTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    borderWidth: 2,
    borderColor: '#a422dc', 
    borderRadius: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#f2d101',
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
    fontFamily: 'PressStart2P',
  },
});