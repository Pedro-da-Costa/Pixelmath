# 👾 Pixelmath 👾

> Um aplicativo de jogos educativos com temática de xadrez e estilo pixel art, desenvolvido em React Native.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📜 Sobre o Projeto

Pixelmath é um projeto acadêmico que visa criar uma experiência de aprendizado divertida através de minigames baseados em lógica de xadrez. O aplicativo foi construído utilizando React Native e Expo, com uma estética visual retrô em pixel art.

### ✨ Funcionalidades

-   [x] **Menu Principal:** Navegação intuitiva entre as telas do aplicativo.
-   [x] **Tela Sobre:** Informações sobre o desenvolvimento e o propósito do jogo.
-   [x] **Jogo da Torre:** Um minigame desafiador que ensina os movimentos da peça de Torre no xadrez.
-   [ ] **Jogo do Rei:** (Em desenvolvimento) Um minigame focado nos movimentos do Rei.

---

## 📸 Telas do Aplicativo

*(Substitua os links abaixo pelos screenshots do seu aplicativo para exibi-los aqui)*

| Tela Inicial | Menu de Jogos | Jogo da Torre |
| :----------: | :-----------: | :-----------: |
| ![Tela Inicial](https://via.placeholder.com/300x600.png/000000/FFFFFF?text=Tela+Inicial) | ![Menu de Jogos](https://via.placeholder.com/300x600.png/121212/FFFFFF?text=Menu) | ![Jogo da Torre](https://via.placeholder.com/300x600.png/000000/FFFFFF?text=Jogo+da+Torre) |

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:
*   **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
*   **Expo:** Plataforma e conjunto de ferramentas para construir aplicativos React Native.
*   **JavaScript:** Linguagem de programação principal.
*   **Expo AV:** Para manipulação de áudio e vídeo (usado no background animado).
*   **Expo Font:** Para o carregamento de fontes personalizadas como a `PressStart2P`.
*   **Expo Status Bar:** Para controlar a aparência da barra de status do dispositivo.

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar o Pixelmath em seu ambiente de desenvolvimento.

### Pré-requisitos

Você precisará ter o [Node.js](https://nodejs.org/en/) (versão LTS) e o aplicativo [Expo Go](https://expo.dev/go) instalado em seu smartphone.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/pixelmath.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd pixelmath
    ```
3.  Instale as dependências:
    > **Nota:** O comando `npm install` instalará as dependências listadas no `package.json`. Para garantir que as bibliotecas do Expo tenham versões compatíveis, execute o comando abaixo.
    ```bash
    npm install
    npx expo install expo-av expo-font expo-status-bar
    ```

### Executando o Aplicativo

1.  Inicie o servidor de desenvolvimento do Expo:
    ```bash
    npx expo start
    ```
2.  Abra o aplicativo **Expo Go** no seu smartphone e escaneie o QR Code exibido no terminal.

---

## 📂 Estrutura do Projeto

A estrutura de arquivos principal do projeto é a seguinte:

```
Pixelmath/
├── assets/               # Imagens, fontes e vídeos
├── Jogo da Torre/
│   └── jogo_torre.js     # Lógica e UI do Jogo da Torre
├── Menu_inicial/
│   ├── Menu.js           # Tela do menu de jogos
│   ├── TelaInicial.js    # Tela de início do app
│   └── TelaSobre.js      # Tela de informações
├── App.js                # Componente raiz e controle de navegação
├── Loader.js             # Componente de tela de carregamento
└── package.json          # Dependências e scripts
```

---

## 🤝 Contribuição

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1.  Faça um *Fork* do projeto
2.  Crie uma *Branch* para sua feature (`git checkout -b feature/AmazingFeature`)
3.  Faça o *Commit* de suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4.  Faça o *Push* para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra um *Pull Request*