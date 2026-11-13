# Portfólio Daniel · atualização de 11/11/2026

O portfólio foi atualizado no projeto original, em HTML, CSS e JavaScript, usando o pacote `portfolio_daniel_para_cortex.zip` como referência. Abra `index.html` no navegador para visualizar. Não há instalação, compilação ou credenciais necessárias.

## Arquivos alterados

- `index.html`: informações pessoais, ensino médio integral, formação, Liga STEAM, música/viola, experiência com impressão 3D, medalhas do interclasse, conceitos escolares e contatos. EduRank continua em destaque e em desenvolvimento; suas funcionalidades são propostas. Os conceitos originais e os detalhes expansíveis foram preservados.
- `style.css`: adaptação dos novos cartões e contatos ao tema preto/roxo; contato em uma coluna no tablet/celular; quebra dos botões e organização do cartão de impressão 3D. A tipografia, a ilustração de código e os estilos originais continuam na base.
- `script.js`: cópia de e-mail e telefone a partir dos textos dos links, com mensagem acessível e seleção manual quando o navegador bloqueia a área de transferência. Preserva menu, Escape, clique externo, foco, destaque da navegação e ano automático.

Criados: este `LEIA-ME.md`, `.gitignore` (exclui backup e evidências locais do Git) e os diretórios de backup/QA descritos abaixo. Não foi feita publicação em hospedagem.

## Preservação e backup

O backup anterior às edições está em `backups/original-2026-11-11/`. Ele contém o HTML, CSS, JavaScript, `.gitattributes`, a imagem original da raiz e a pasta `assets`.

As imagens não foram alteradas: `assets/daniel.jpg`, `assets/edurank-logo.jpg`, `assets/cdl-curvelo.png` e `IMG-20260602-WA0000.jpg`. A identidade desses arquivos foi conferida por SHA-256 contra o backup. O ZIP recebido também não foi alterado.

## Contatos e configuração

- E-mail: `perigoso248@gmail.com`.
- Telefone exibido: `(38) 99947-0366`.
- Ligação: `tel:+5538999470366`.
- WhatsApp: `https://wa.me/5538999470366`.
- Localidade: Curvelo, Minas Gerais, Brasil.

Para ocultar telefone, ligação e WhatsApp, adicione o atributo `hidden` à seção `id="phone-contact"` no `index.html`. Isso funciona também sem JavaScript. O bloco tem um comentário indicando o local.

Ocultar a seção retira o número da interface, mas ele continua no código HTML. Para retirar o número do código público, remova o bloco inteiro de `phone-contact` antes de publicar; o restante do site funciona sem ele. Os botões de cópia usam o texto do contato, sem outra cópia do número no JavaScript.

E-mail, ligação e WhatsApp abrem os aplicativos correspondentes. Não existe formulário de envio simulado. Se a cópia automática for bloqueada, o site seleciona o contato e orienta a cópia manual.

## Verificação

O projeto original e o atualizado foram abertos no Chrome local em 360, 768 e 1440 px. Foram conferidos menu móvel, Escape, foco após navegação, âncoras abaixo do cabeçalho, detalhes expansíveis, cópia de e-mail, alternativa manual, imagens e ausência de rolagem horizontal. Os seis detalhes também foram verificados abertos.

Na versão final, também passaram as verificações em 320 px e em paisagem (667 × 375), navegação pelo teclado, clique fora do menu, mudança entre celular e desktop e funcionamento sem JavaScript. A cópia real de e-mail e telefone foi confirmada por leitura da área de transferência; a alternativa manual foi testada com permissão negada. Ocultar ou remover o bloco do telefone antes da execução do script preservou o restante do site. O destaque da seção ativa foi conferido após rolagem em celular, tablet e desktop.

O JavaScript passou em `node --check script.js`. Também foram conferidos os destinos de ligação/WhatsApp, arquivos locais, IDs únicos, âncoras e textos alternativos. Os links de contato foram verificados sem efetuar ligações ou enviar mensagens.

Capturas e relatórios das verificações ficam em `.qa/`. São arquivos locais de apoio e não fazem parte do site a publicar. Para hospedar, bastam `index.html`, `style.css`, `script.js` e `assets/`.

## Imagem da impressora · 12/11/2026

A imagem adicionada em `image(20261111-182002).png` foi copiada, sem alterações, para `assets/impressora-3d.png` e integrada ao cartão “Medalhas para o interclasse”. Ela aparece inteira, com tamanho responsivo, texto alternativo e legenda de imagem de referência do equipamento. O arquivo original foi preservado.

Clique na imagem ou em “Ampliar imagem” para abrir a visualização ampliada. Para voltar, use “Fechar”, a tecla Escape ou clique no fundo escuro. Sem JavaScript ou suporte à janela de visualização, o link abre o arquivo da imagem em outra aba.

## O que ainda pode ser complementado

1. **Fotos próprias da Ender-3 V2 em uso e das medalhas.** O cartão já exibe a imagem de referência da impressora adicionada ao projeto; registros da atividade e das peças ainda podem complementar a apresentação.
2. **Links reais de demonstração e repositório do EduRank**, quando disponíveis. O site informa que a demonstração pública ainda não está disponível.
3. **Nome da escola, datas de formação e certificados**, se desejar divulgá-los. Esses dados não estavam confirmados no material, por isso não foram inventados.

A idade e os três anos de estudos refletem os dados fornecidos e devem ser revisados com o tempo. Não foi inventado emprego, cargo, resultado quantitativo ou nível de proficiência. Painel do refeitório, saída de turmas e prévias de interface estão identificados como conceitos, sem implantação.
