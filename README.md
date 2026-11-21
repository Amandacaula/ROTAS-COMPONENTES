# Rotas e Componentes

Projeto React que simula um website com múltiplas páginas utilizando React Router.

## Funcionalidades

- Configuração do React Router com `BrowserRouter`
- Páginas Home, Sobre e Contato com links entre si
- Rotas definidas com `Routes` e `Route` e navegação com `Link` e `NavLink`
- Layout comum com `Header`, `Sidebar` e `Footer` exibidos em todas as páginas via `Outlet`
- Lazy loading das páginas com `React.lazy` e `React.Suspense`
- Página 404 para rotas inválidas
- Rota dinâmica `/user/:id` exibindo o perfil do usuário com `useParams`

## Estrutura

```
src/
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Loading.jsx
│   └── Sidebar.jsx
├── data/
│   └── users.js
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── UserProfile.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Rotas

| Rota         | Página            |
| ------------ | ----------------- |
| `/`          | Home              |
| `/about`     | Sobre             |
| `/contact`   | Contato           |
| `/user/:id`  | Perfil do usuário |
| `*`          | Página 404        |
