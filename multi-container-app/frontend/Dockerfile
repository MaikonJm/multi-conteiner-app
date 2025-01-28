# Use uma imagem base do Node.js
FROM node:18 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências
COPY package.json . 
COPY package-lock.json . 

# Instale as dependências
RUN npm install

# Copie o código da aplicação
COPY . .

# Compile a aplicação (ajuste conforme necessário)
RUN npm run build

# Use o Nginx para servir a aplicação
FROM nginx:alpine

# Copie os arquivos compilados para o diretório de saída do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
