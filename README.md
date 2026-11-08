# Cursos Online

Atividade acadêmica com seis componentes: navbar, carrossel, cards, tabela, formulário e modal. Os cursos e as turmas são fictícios.

## Arquivos e tecnologias

- `index.html` e `script.js`: Bootstrap 5.3.8 via CDN e JavaScript nativo.
- `tailwind/index.html` e `tailwind/script.js`: Tailwind CSS Browser 4.3.0 via CDN e JavaScript nativo, independentes da versão Bootstrap.
- `README.md`: instruções e verificações.

Sem instalação de dependências, build, CSS personalizado ou backend. As CDNs exigem acesso à internet; o Browser CDN do Tailwind é destinado a desenvolvimento. O formulário usa validação HTML5 e apenas apresenta uma mensagem local: nenhum dado é enviado ou armazenado.

## Executar no GitHub Codespaces

1. Abra o repositório no GitHub e selecione **Code → Codespaces → Create codespace on main**, ou use [Abrir no Codespaces](https://codespaces.new/whsmumu/atvd-bootstrap).
2. No terminal, na raiz do projeto, execute:

   ```sh
   python3 -m http.server 8000
   ```

3. Na aba **Ports**, abra a porta 8000 no navegador. Mantenha a visibilidade da porta privada.
4. O caminho `/` abre Bootstrap; `/tailwind/` abre Tailwind. Também há links entre as páginas.
5. Encerre o servidor com `Ctrl+C`.

O mesmo comando funciona localmente com Python 3, em `http://localhost:8000`.

## Verificações realizadas

Testes automatizados em Chromium, via Playwright externo ao repositório, nas larguras 375, 768 e 1280 pixels, em ambas as versões:

- Estrutura semântica e menu móvel abrindo e fechando.
- Três slides, indicadores clicáveis e navegação circular anterior/próximo.
- Três cards em uma, duas e três colunas, conforme a largura.
- Tabela com cinco linhas, cabeçalho, legenda e cores alternadas.
- Formulário com quatro campos, rejeição de campos vazios e e-mail inválido, e mensagem após envio válido.
- Modal abrindo e fechando pelo botão e por Escape; foco sem alcançar conteúdo de fundo e retorno ao acionador.
- Ausência de rolagem horizontal na página, erros JavaScript e respostas HTTP de erro nos recursos carregados.

Sintaxe dos dois arquivos JavaScript verificada com `node --check`. Layouts também inspecionados em capturas de tela.

## Pendências do enunciado

- A implementação e os testes desta entrega ocorreram localmente. O acesso disponível ao GitHub não tem o escopo `codespace`; o desenvolvimento no Codespaces não foi realizado. Abra, revise e valide o projeto nesse ambiente antes da apresentação.
- Ainda são necessários testes nos aplicativos Chrome, Firefox, Safari e Edge. O teste em Chromium não substitui esses quatro testes.
- Os dois vídeos devem ser gravados pelo aluno, explicando o código e demonstrando as interações. A atividade é individual.
