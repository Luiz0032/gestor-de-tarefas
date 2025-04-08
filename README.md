# Gerenciador de Tarefas - Vue 3 + TypeScript + Tailwind

Aplicação simples de gerenciamento de tarefas construída com Vue 3, TypeScript e TailwindCSS. Permite adicionar, visualizar, filtrar, editar e concluir tarefas.

## Funcionalidades

✅ Cadastro de tarefas com título, descrição e data de vencimento  
✅ Listagem de tarefas em formato de cards  
✅ Filtro por status: todas, pendentes, concluídas  
✅ Busca textual de tarefas por título  
✅ Marcar tarefa como concluída  
✅ Modal para edição de tarefa  
✅ Gerenciamento de estado com `ref` e `computed`  
✅ Persistência de dados no `localStorage`

## Tecnologias Utilizadas

- [Vue 3 + Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Instalação

```bash
# Clone o repositório
https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale as dependências
npm install

# Rode a aplicação em modo de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

## Estrutura do Projeto

- `App.vue` — Componente principal
- `components/` — Componentes reutilizáveis: Formulário, Lista, Card, Modal
- `store.ts` — Estado global simples com `ref` e `watch`
- `types/Task.ts` — Interface tipada para tarefas

## Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.

