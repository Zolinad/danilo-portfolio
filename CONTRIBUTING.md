# Contribuindo com o al-folio

## GitHub Copilot Agents

Este repositório inclui agentes e arquivos especializados do GitHub Copilot para auxiliar no desenvolvimento e na documentação.

### CLAUDE.md

O arquivo `CLAUDE.md` funciona como ponto de entrada para o Claude (assistente de IA da Anthropic).
Ele utiliza a sintaxe `@path/to/import` para importar dinamicamente o arquivo `AGENTS.md`, mantendo a documentação centralizada.

Conteúdo do arquivo:

```
@AGENTS.md
```

---

## Customization Agent

Arquivo: `.github/agents/customize.agent.md`

Ajuda os usuários a personalizar o site al-folio:

- Orienta na modificação de arquivos de configuração e conteúdo
- Explica conceitos técnicos em linguagem simples
- Aplica mudanças diretamente nos arquivos do repositório
- Fornece instruções passo a passo para tarefas comuns

Exemplos de uso:

- Alterar informações do site
- Atualizar CV
- Adicionar publicações
- Criar posts de blog
- Personalizar cores e tema

Requer GitHub Copilot ativado no repositório.

---

## Documentation Agent

Arquivo: `.github/agents/docs.agent.md`

Responsável por manter a documentação atualizada:

- Atualiza arquivos como `README.md`, `INSTALL.md`, `CUSTOMIZE.md`, `FAQ.md`, `CONTRIBUTING.md`
- Mantém documentação sincronizada com o código
- Escreve textos claros e objetivos
- Segue boas práticas de documentação

Destinado principalmente a mantenedores e contribuidores do projeto.

---

## Arquivos de Instruções Personalizadas

Localizados em `.github/instructions/`, ajudam o Copilot a entender padrões do projeto:

- `.github/copilot-instructions.md` – Visão geral do repositório, build, stack, estrutura e CI/CD
- `liquid-templates.instructions.md` – Orientação para arquivos `.liquid`
- `yaml-configuration.instructions.md` – Orientação para `_config.yml` e `_data/**/*.yml`
- `bibtex-bibliography.instructions.md` – Orientação para arquivos `.bib` e `_bibliography/`
- `markdown-content.instructions.md` – Orientação para conteúdo em `_books/`, `_news/`, `_pages/`, `_posts/`, `_projects/`, `_teachings/`
- `javascript-scripts.instructions.md` – Orientação para arquivos em `_scripts/`

Esses arquivos evitam que o agente precise explorar todo o código para entender convenções do projeto.

---

## Configuração do Ambiente do Copilot

Workflow: `.github/workflows/copilot-setup-steps.yml`

Configura automaticamente dependências necessárias antes da execução dos agentes:

- Ruby 3.3.5
- Python 3.13
- Node.js
- ImageMagick
- nbconvert

---

## Importante: Verifique o Resultado dos Agentes

Os agentes podem cometer erros. Sempre revise antes de aplicar alterações:

- Revise código e configurações sugeridas
- Teste mudanças localmente (Docker ou setup nativo)
- Verifique sintaxe de YAML, Markdown e configurações
- Revise documentação gerada
- Entenda o que está sendo alterado
- Execute o site localmente após as mudanças

Exemplo: ao gerar uma entrada BibTeX ou alterar configurações, confirme que a sintaxe está correta e consistente com o padrão do repositório.

---

## Como Ativar os Agentes

Disponível para usuários com assinatura GitHub Copilot.

Para utilizar:

1. Ative o GitHub Copilot na sua conta
2. Abra o repositório em um editor compatível (ex.: VS Code com extensão Copilot)
3. Os agentes serão carregados automaticamente com base nos arquivos em `.github/agents/`

Consulte a documentação do GitHub Copilot para mais detalhes.

---

## Issues

Utilizamos GitHub Issues para bugs e solicitações de funcionalidades.

Antes de abrir uma issue:

- Verifique a seção FAQ no README
- Confirme que não é duplicada
- Certifique-se de que é um bug ou feature request
- Use o template adequado

Se for apenas uma dúvida, utilize o fórum Discussions.

---

## Licença

Ao contribuir com o al-folio, você concorda que suas contribuições serão licenciadas conforme o arquivo `LICENSE` na raiz do repositório.
