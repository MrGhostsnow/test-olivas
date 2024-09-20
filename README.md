# Blog Últimas Notícias

Este projeto é uma aplicação desenvolvida com **Next.js** que consome um endpoint para exibir as últimas notícias em um carrossel estilizado utilizando **Swiper** e **styled-components**. A aplicação também implementa práticas de **SEO** e é **responsiva**, garantindo uma boa experiência em dispositivos móveis e desktops.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Componentes](#componentes)
- [API Utilizada](#api-utilizada)
- [Funcionalidades](#funcionalidades)
- [Responsividade](#responsividade)
- [Boas Práticas de SEO](#boas-práticas-de-seo)
- [Licença](#licença)

## Sobre o Projeto

O projeto consiste em uma página de blog que exibe as últimas notícias de um endpoint fornecido. As notícias são exibidas em um carrossel, permitindo ao usuário navegar entre os diferentes posts. O design é minimalista e responsivo, seguindo o layout fornecido com uma grid de 1260px centralizada.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para desenvolvimento de aplicações web com renderização no lado do servidor (SSR) e otimizações.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática opcional ao código.
- **Styled-components**: Biblioteca para estilização de componentes usando JavaScript.
- **Swiper**: Biblioteca para criar carrosséis e sliders.
- **Fetch API**: Para realizar requisições HTTP e buscar dados da API.
- **SEO**: Boas práticas de otimização para motores de busca.

## 🚀 Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone este repositório:

   ```bash
   git clone https://github.com/MrGhostsnow/test-olivas.git

2.Instale as dependências:
  npm install

3.Inicie o servidor de desenvolvimento:
  npm run dev

📜 Scripts Disponíveis
No diretório do projeto, você pode executar:

npm run dev: Roda a aplicação em modo de desenvolvimento.
npm run build: Compila o projeto para produção.
npm start: Inicia a aplicação em modo de produção após a compilação.

🧩 Componentes
A aplicação é estruturada em componentes reutilizáveis, facilitando a manutenção e expansão do código.

BlogSection
Componente principal que exibe a seção "Últimas do Blog". Ele realiza uma chamada à API para buscar as postagens e renderiza os componentes CardNews dentro do carrossel Swiper.

CardNews
Renderiza o conteúdo de cada postagem de blog, exibindo imagem, título, descrição e um link para ler mais.

styles.ts
Arquivo que utiliza styled-components para aplicar estilos customizados aos componentes.

🌐 API Utilizada
A aplicação faz requisições para o seguinte endpoint da API:

Endpoint: https://www.olivas.digital/wp-json/wp/v2/posts?categories=373
A resposta da API contém as últimas postagens de um blog em formato JSON, que são usadas para exibir as notícias no carrossel.

⚙️ Funcionalidades
Carrossel: Utiliza a biblioteca Swiper para exibir as postagens em um carrossel, com navegação e paginação.
Chamada de API: Faz uma requisição à API do WordPress para buscar as postagens do blog.
Responsividade: O layout é totalmente responsivo, adaptando-se para diferentes tamanhos de tela.
📱 Responsividade
A aplicação foi construída com foco em uma boa experiência de usuário em dispositivos móveis. O layout utiliza uma grid centralizada de 1260px, sendo ajustado em telas menores, e o carrossel exibe uma quantidade variável de slides dependendo da largura da tela.

Mobile: 1 slide por vez.
Tablets: 2 slides por vez.
Desktops: 3 slides por vez.

🧠 Boas Práticas de SEO
A aplicação inclui as seguintes práticas de SEO:

Meta Tags dinâmicas: O título da página e as meta descrições são gerados dinamicamente com base no conteúdo.
Performance: O código é otimizado para minimizar o tempo de carregamento da página.
Acessibilidade: Uso adequado de alt nas imagens e tags semânticas HTML5.



