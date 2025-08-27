# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### `Propostas do projeto` 

1. Recursos essenciais
Estes são obrigatórios em qualquer CRM básico — ótimo para praticar CRUD, formulários e listagens:
Login simples com autenticação (pode usar apenas estado no front ou JWT se quiser realista).
Cadastro de clientes (nome, e-mail, telefone, empresa, status).
Lista de clientes com busca e filtro (por nome, status, cidade).
Editar e excluir clientes (CRUD completo).
Visualização detalhada do cliente (com histórico de interações em uma aba ou modal).
Notas rápidas (ex.: “Ligado dia 27/08, pediu proposta”).

2. Recursos intermediários (bom para subir o nível)
Aqui você começa a mexer com estado global, componentização mais séria e integrações:
Pipeline / Funil de vendas → arrastar cards com clientes entre etapas (prospect, contato, proposta, fechado).
Campos personalizados (permitir que o usuário crie um campo extra como “Produto de interesse”).
Tagging de clientes (ex.: VIP, Inadimplente, Novo lead).
Histórico automático → sempre que editar, salvar uma “linha do tempo” (ótimo pra aprender arrays de eventos).
Dashboard simples com gráficos (ex.: quantos clientes ativos por mês, total de vendas por etapa — pode usar Recharts ou Chart.js).

3. Recursos avançados (para aprender coisas do mercado)
Esses já te fazem tocar em temas que as empresas usam de verdade:
Autenticação real com JWT + backend ou Firebase Auth.
Integração com API externa (ex.: buscar CNPJ na Receita WS ou OpenCNPJ e preencher dados automaticamente).
Upload de arquivos no cliente (ex.: anexar contrato ou documento PDF).
Notificações ou lembretes automáticos (ex.: alerta “esse cliente não tem contato há 15 dias”).
Permissões de usuário (admin vê tudo, vendedor vê só seus clientes).
Exportar para Excel (gera CSV ou XLSX com lista de clientes).
Tema claro/escuro e personalização visual (aprende sobre contextos e CSS variables).

4. Recursos “wow” (se sobrar tempo e energia)
Pra deixar o projeto com cara de profissional e aprender muito:
Chat interno no cliente (simples, apenas mensagens associadas ao cliente).
Integração fake com e-mail (ex.: salvar no histórico “enviado email para X” ao clicar num botão).
Busca inteligente (usar debounce + filtragem dinâmica).
Deploy real (Vercel ou Netlify) e mock de API (com JSON-Server, MirageJS ou Supabase).