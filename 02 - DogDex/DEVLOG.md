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


## 📅 31/07/2026

### 🚨 Meu primeiro erro no DogDex

Hoje recebi um novo `desafio` do `Gui`: adicionar componentes da biblioteca `Shadcn/UI` ao projeto utilizando a documentação oficial.

No começo foi bem complicado entender o que eu deveria fazer, porque nunca tinha utilizado uma documentação dessa forma. Além disso, o Gui pediu para que eu não utilizasse IA para receber respostas prontas. Como eu estava completamente perdido, usei a IA apenas para me orientar e entender o caminho, deixando claro que não queria a solução.

Durante a configuração surgiu meu primeiro `erro` real no projeto:

`Could not find valid path aliases or package imports for init.`

Foi nesse momento que fiz uma descoberta importante.

O Shadcn utiliza exemplos em `TypeScript` na documentação, enquanto o DogDex foi criado utilizando `JavaScript`. Por causa disso, a documentação fazia referência ao arquivo `tsconfig.json`, que não existia no meu projeto.

Depois de investigar o problema, descobri que o equivalente para projetos JavaScript é o `jsconfig.json`. Criei esse arquivo e configurei os aliases necessários para que o Shadcn reconhecesse a estrutura do projeto.

Além disso, durante o processo:

- Instalei e configurei o Tailwind CSS
- Ajustei as configurações do Vite
- Configurei os aliases de importação
- Entendi a diferença entre `tsconfig.json` e `jsconfig.json`

No final tudo deu certo.

O primeiro componente criado pelo Shadcn foi o `button.jsx`.

Na página Home eu apenas substituí:

`<button>Pesquisar</button>`

por:

`<Button>Pesquisar</Button>`

E, mesmo sem personalizar nada, o visual do botão já mudou completamente.

Foi interessante perceber que, algumas vezes, uma única linha de código pode mudar bastante a aparência da aplicação quando estamos utilizando bibliotecas de componentes.

### Aprendizados de hoje

- Como ler e interpretar uma documentação técnica
- Diferença entre TypeScript e JavaScript na configuração do projeto
- O que são aliases de importação
- Configuração inicial do Shadcn/UI
- Configuração do Tailwind CSS com Vite

Hoje foi o primeiro dia em que precisei investigar e entender um erro por conta própria para conseguir avançar no projeto.

### Continuação do desafio

Depois de conseguir configurar o Shadcn e adicionar o primeiro botão, continuei explorando a documentação para entender melhor como funcionam os componentes da biblioteca.

Durante esse processo adicionei outros componentes à aplicação:

- Input
- Field
- FieldLabel
- ButtonGroup

Foi nesse momento que comecei a perceber um padrão. Não basta apenas importar um componente na página. Primeiro é necessário adicioná-lo ao projeto através da CLI do Shadcn, depois importá-lo e só então utilizá-lo no código.

Além disso, comecei a estudar a documentação do Tailwind CSS para melhorar o layout da Home.

Os primeiros conceitos que aprendi foram:

- flex
- flex-col
- justify-center
- items-center
- max-width
- margin

Utilizando essas classes consegui centralizar os componentes da tela e controlar a largura do campo de pesquisa.

A Home, que inicialmente possuía apenas elementos HTML simples, passou a utilizar componentes do Shadcn e um layout mais organizado.

Estado atual da Home:

- DogDex centralizado
- Campo de pesquisa estilizado
- Botão integrado ao campo de pesquisa
- Layout controlado com Tailwind CSS

O que mais chamou minha atenção foi perceber que não preciso decorar tudo. O mais importante é saber identificar o problema e encontrar a seção correta da documentação para procurar a solução.

Hoje terminei o dia com a sensação de que estou começando a entender como navegar por documentações reais e utilizar bibliotecas externas sem depender exclusivamente de tutoriais.


## 📅 03/08/2026

### 🐶 Organizando a Home do DogDex

Depois de dois dias de descanso, voltei a mexer no DogDex.

Meu objetivo inicial era melhorar a estrutura da Home antes de partir para funcionalidades mais complexas.

Logo no começo percebi que os elementos da página estavam muito "soltos", então decidi reorganizar o componente.

Separei a Home em áreas independentes:

- Página
- Título
- Pesquisa
- Resultado
- Controles

A ideia foi deixar a estrutura mais organizada e facilitar futuras modificações.

---

### 🎨 Trabalhando no layout

Depois de estruturar a página, comecei a estudar melhor o comportamento de algumas classes do Tailwind.

Durante os testes aprendi melhor a função de:

- `flex`
- `flex-col`
- `justify-center`
- `items-center`
- `min-h-screen`
- `margin`
- `border`
- `padding`
- `max-width`

Um aprendizado interessante aconteceu quando tentei melhorar a borda da área de pesquisa.

Inicialmente achei que o problema estava na borda em si, mas depois percebi que o verdadeiro problema era a largura da div.

Foi a primeira vez que vi claramente que muitas vezes o erro visual não está exatamente na propriedade que estamos modificando.

---

### 🔍 Criando a área de pesquisa

Transformei a seção de pesquisa em um card.

Utilizei:

- Border
- Padding
- Rounded
- Background

para criar uma área visualmente separada da página.

Também personalizei o visual do botão e continuei ajustando a identidade visual da aplicação.

---

### 🌎 Adicionando controles

Achei que seria interessante já deixar preparados os controles que pretendo utilizar futuramente.

Pesquisei na documentação do Shadcn qual componente seria adequado para criar menus de seleção e encontrei o `Dropdown Menu`.

Instalei o componente e estudei sua estrutura.

Durante o processo aprendi a função de:

- DropdownMenu
- DropdownMenuTrigger
- DropdownMenuContent
- DropdownMenuItem

Depois disso criei dois menus:

**Tema**

- Claro
- Escuro

**Idioma**

- Português
- Inglês

Ambos ainda sem funcionalidade, servindo apenas como preparação para etapas futuras.

---

### ⚛️ Meu principal aprendizado de React hoje

Até então eu tinha apenas um estado:

```jsx
const [raca, setRaca] = useState("")

O problema é que o resultado mudava enquanto eu digitava.

Por exemplo:
H
Hu
Hus
Husk
Husky

Isso acontecia porque o mesmo estado estava sendo usado tanto para armazenar o texto digitado quanto para exibir o resultado.

Para resolver isso, criei um segundo estado:

const [resultado, setResultado] = useState("")

A partir daí passei a trabalhar com responsabilidades diferentes:

raca
↓
O que está sendo digitado

resultado
↓
O que foi pesquisado

Quando o usuário clica no botão "Pesquisar", o valor de raca é enviado para resultado.

Com isso o DogDex passou a ter seu primeiro comportamento real de aplicação.

Fluxo atual:

Usuário digita
↓
Valor fica em raca
↓
Usuário clica em Pesquisar
↓
resultado recebe raca
↓
Resultado aparece na tela

Foi provavelmente o aprendizado mais importante do dia.

📚 Aprendizados de hoje
Organização de layout
Estruturação de componentes
Flexbox no Tailwind
Width, Border, Padding e Rounded
Dropdown Menu do Shadcn
Eventos onChange e onClick
Uso de múltiplos useState
Separação de responsabilidades entre estados
Pensar primeiro na estrutura e depois no visual

Hoje o DogDex deixou de ser apenas uma interface e passou a possuir seus primeiros comportamentos reais em React.

### ⌨️ Melhorando a experiência da busca

Após implementar a pesquisa pelo botão, percebi que a experiência ainda poderia ser melhor.

Pesquisei sobre eventos de teclado no React e aprendi a utilizar o `onKeyDown`.

Criei uma função chamada `pesquisar()` para concentrar a lógica da busca:

function pesquisar() {
    setResultado(raca)
}

Depois reutilizei essa mesma função em dois lugares:

- Clique no botão Pesquisar
- Pressionamento da tecla Enter dentro do Input

Com isso a busca passou a funcionar de duas formas diferentes sem duplicar código.

Foi meu primeiro contato com reutilização de funções para controlar múltiplos eventos no React.

Fluxo atual:

Usuário digita
↓
Pressiona Enter

ou

Usuário digita
↓
Clica em Pesquisar

↓

Resultado é atualizado

---

Atualização dos aprendizados do dia:

- Organização de layout
- Estruturação de componentes
- Flexbox no Tailwind
- Width, Border, Padding e Rounded
- Dropdown Menu do Shadcn
- Eventos onChange, onClick e onKeyDown
- Uso de múltiplos useState
- Separação de responsabilidades entre estados
- Reutilização de funções
- Pensar primeiro na estrutura e depois no visual

---

Reflexão do dia:

Hoje o DogDex deixou de ser apenas uma interface estática e passou a possuir seus primeiros comportamentos reais em React.

Além do layout da aplicação, consegui implementar uma busca funcional através do botão e também pela tecla Enter, reutilizando a mesma função para ambos os eventos.

Também comecei a estudar a documentação da The Dog API para entender quais informações serão utilizadas futuramente no projeto.

Depois de analisar as respostas da API, identifiquei que ela já fornece informações suficientes para a próxima etapa do DogDex, como:

- Nome da raça
- Origem
- Temperamento
- Peso
- Altura
- Expectativa de vida
- Imagem

O próximo grande passo do projeto será aprender a consumir esses dados e exibi-los na interface.