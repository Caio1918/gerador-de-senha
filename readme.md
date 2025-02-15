# 🔑 Gerador de Senhas - API

## 📌 Descrição

Esta API gera uma senha aleatória com base na quantidade de caracteres minúsculos, maiúsculos e números especificados pelo usuário. O front-end envia esses parâmetros para a API, que retorna uma senha gerada dinamicamente.

## 🎨 Demonstração

A interface do usuário permite inserir a quantidade desejada de caracteres de cada tipo e gerar uma senha com um clique. Veja abaixo um exemplo da interface:

![Gerador de Senhas](assets/interface.png)

## 🚀 Tecnologias Utilizadas

- **🖥️ Back-end:** Node.js com Express
- **🎨 Front-end:** JavaScript, HTML, Bootstrap
- **🔐 Autenticação:** N/A (a API é pública neste momento)
- **🛡️ Segurança:** Rate limiting, CORS

## ⚙️ Como Executar a API

1. 🛠️ Clone este repositório:

   ```sh
   git clone https://github.com/Caio1918/gerador-de-senha.git
   ```

2. 📦 Instale as dependências:

   ```sh
   npm init -y
   npm install express
   npm install --dev-save nodemon
   npm install cors
   ```

3. ▶️ Inicie o servidor:

   ```sh
   nodemon backend.js
   ```

4. 🌍 A API estará rodando em: `http://localhost:3000`

## 🔗 Endpoints

### `GET /senha`

**📌 Descrição:** Gera uma senha aleatória com base nos parâmetros fornecidos.

**📩 Requisição:**

```json
{
  "minusculas": 3,
  "maiusculas": 3,
  "numeros": 3
}
```

**📤 Resposta:**

```json
{
  "senha": "6DnG9j3Bj"
}
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## 📜 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE.

