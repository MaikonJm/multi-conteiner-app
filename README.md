# Multi-container App with Docker

Este é um projeto de exemplo que demonstra como configurar e executar uma aplicação com **Docker** utilizando três contêineres: **Backend**, **Frontend** e **Banco de Dados**. O **Backend** é implementado com **Spring Boot**, o **Frontend** é construído com **React**, e o banco de dados utilizado é **PostgreSQL**.

Este projeto é ideal para quem deseja entender como orquestrar múltiplos contêineres com Docker e Docker Compose, além de integrar tecnologias populares como Spring Boot e React.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

multi-container-app/
│
├── backend/                # Código do backend em Spring Boot
│   ├── src/                # Código-fonte Java
│   ├── Dockerfile          # Dockerfile para o backend
│   └── pom.xml             # Dependências do Maven
│
├── frontend/               # Código do frontend em React
│   ├── src/                # Código-fonte React
│   ├── Dockerfile          # Dockerfile para o frontend
│   ├── package.json        # Dependências do npm
│   └── public/             # Arquivos públicos do React
│
├── db/                     # Configurações e scripts do banco de dados
│   ├── init.sql            # Script de inicialização do banco
│
├── docker-compose.yml      # Arquivo de configuração do Docker Compose
└── README.md               # Documentação do projeto



### Componentes do Projeto

- **Backend**: Um servidor de aplicação desenvolvido com **Spring Boot** que expõe uma API RESTful para manipulação de dados.
- **Frontend**: Uma aplicação **React** que interage com o backend para exibir dados ao usuário.
- **Banco de Dados**: **PostgreSQL**, configurado para armazenar os dados da aplicação.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de que você tenha os seguintes softwares instalados:

- [Docker](https://www.docker.com/get-started): Para criar e gerenciar os contêineres.
- [Docker Compose](https://docs.docker.com/compose/install/): Para orquestrar a execução de múltiplos contêineres.

## Como Rodar o Projeto

### Passo 1: Clonar o Repositório

Se você ainda não possui o projeto localmente, clone o repositório:

```bash
git clone https://github.com/MaikonJm/multi-container-app.git
cd multi-container-app


Execute o comando abaixo para construir as imagens e iniciar os contêineres:

docker-compose up --build
