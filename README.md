
# Captura de Tela de URL

Este projeto permite capturar screenshots de páginas da web a partir de uma URL fornecida pelo usuário. Ele utiliza **React** no frontend e **Node.js** com **Puppeteer** no backend para realizar a captura de tela.

---

## 🚀 Funcionalidades

- Captura de tela de páginas da web.
- Validação de URL em tempo real.
- Exibição da imagem capturada diretamente na interface.
- Botão para baixar a imagem em formato PNG.
- Feedback visual com ícones de validação e mensagens de erro.

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Passos para Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/captura-de-tela.git
   cd captura-de-tela
Instale as dependências:

No diretório frontend:


cd frontend

npm install
No diretório backend:


cd backend
npm install

Execute o backend:

No diretório backend, execute:
npm start
O backend estará rodando em http://localhost:3001.

Execute o frontend:

No diretório frontend, execute:

npm run dev
O frontend estará rodando em http://localhost:5173.

Acesse a aplicação:

Abra o navegador e acesse http://localhost:5173.

🖥️ Tecnologias Utilizadas
Frontend:

React

Tailwind CSS (para estilização)

Vite (para build e desenvolvimento)

Backend:

Node.js

Express (para criar o servidor)

Puppeteer (para captura de tela)

📂 Estrutura do Projeto
Copy
captura-de-tela/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   └── index.js (arquivo principal do backend)
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx (componente principal do frontend)
│   │   └── main.jsx (ponto de entrada do frontend)
│   ├── package.json
│   └── README.md
└── README.md (este arquivo)

🧑‍💻 Como Usar
Insira uma URL válida no campo de texto.

Clique em "Capturar Screenshot".

Aguarde o processamento e visualize a imagem capturada.

Clique em "Baixar Imagem" para salvar a captura de tela no seu dispositivo.

🐛 Problemas Conhecidos
URLs muito complexas ou com redirecionamentos podem falhar na captura.

O Puppeteer pode não funcionar corretamente em alguns ambientes sem configurações adicionais.

🤝 Como Contribuir
Faça um fork do repositório.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas alterações (git commit -m 'Adiciona nova feature').

Faça push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

📄 Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

🙏 Agradecimentos
Puppeteer por fornecer uma API poderosa para captura de tela.

Vite por tornar o desenvolvimento frontend mais rápido e eficiente.

Tailwind CSS por simplificar a estilização do projeto.



---
