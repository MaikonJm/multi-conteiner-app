# Multi-container App with Docker

Este é um projeto de exemplo demonstrando como configurar um aplicativo multi-contêiner utilizando Docker.

## Estrutura do Projeto

O projeto é composto por três contêineres:
- **Backend**: Servidor da aplicação (Spring Boot).
- **Frontend**: Interface do usuário (React).
- **Banco de Dados**: Postgres para persistência de dados.

## Como Rodar o Projeto

1. Certifique-se de ter o Docker e o Docker Compose instalados.
2. Navegue até a raiz do projeto e execute:
   ```bash
   docker-compose up --build
