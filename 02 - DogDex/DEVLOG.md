# 🐶 DogDex - DevLog

## 📅 28/07/2026 - Início do Projeto

Hoje comecei oficialmente o projeto DogDex.

Criei a pasta:

```text
02 - DogDex
```

dentro do repositório:

```text
Do-Zero-ao-Desenvolvimento
```

Depois abri o terminal dentro da pasta e executei:

```bash
npm create vite@latest . -- --template react
```

Ainda não entendi exatamente tudo o que esse comando fez.

Mas percebi que ele gerou praticamente toda a estrutura inicial do React para mim.

Depois disso apareceram arquivos como:

```text
src/
public/
package.json
vite.config.js
node_modules/
```

Também criei este DEVLOG para registrar minha evolução durante o desenvolvimento do projeto.

Hoje foi mais um dia de preparação do ambiente.

Ainda não escrevi nenhum código React.

Próximo passo:

Criar as pastas:

```text
components/
services/
```

e começar a entender como funcionam os componentes no React.

## 📅 29/07/2026 - Primeira tela React

Hoje foi o primeiro dia de desenvolvimento do DogDex.

Criei a estrutura inicial do projeto utilizando React + Vite e comecei a entender melhor como um projeto React é organizado.

Aprendi a função de cada pasta principal:

- pages
- components
- services
- assets

Também entendi como funciona a comunicação entre arquivos no React:

main.jsx → App.jsx → Home.jsx

Criei meu primeiro componente React chamado Home e aprendi que um componente é basicamente uma função que retorna JSX.

Montei a primeira versão da tela contendo:

- Título do projeto
- Subtítulo
- Campo de busca
- Botão

Durante o processo aprendi:

- O que é JSX
- O motivo de usar um elemento pai (div)
- Como funciona o export default
- Como importar componentes em outros arquivos
- A diferença entre uma função JavaScript comum e um componente React

Ao final do dia consegui renderizar a página Home dentro do App e visualizar o resultado no navegador através do Vite.

Primeira versão da interface funcionando ✅

## 📅 30/07/2026 - Primeiro contato com State e Eventos

Hoje avancei no desenvolvimento do DogDex e tive meu primeiro contato prático com o React de forma mais dinâmica.

Aprendi o conceito de State utilizando o hook `useState`.

Principais aprendizados:

- Como importar e utilizar o `useState`
- Diferença entre `raca` (estado atual) e `setRaca` (função que atualiza o estado)
- Como definir um valor inicial para um estado
- Como exibir uma variável dentro do JSX utilizando `{}`

Também aprendi sobre eventos no React, especialmente o `onChange`.

Durante os testes entendi o fluxo:

Input → Evento → e.target.value → setRaca → Atualização do estado → Atualização da tela

Implementei um campo de busca capaz de capturar o texto digitado pelo usuário em tempo real e exibi-lo na interface.

Ao final do estudo a Home do DogDex passou a:

✅ Capturar dados digitados pelo usuário

✅ Atualizar o estado da aplicação

✅ Exibir o valor atualizado na tela sem recarregar a página

Também personalizei a interface inicial do projeto, adicionando um subtítulo mais alinhado à proposta do DogDex.

### Código mais importante aprendido hoje
