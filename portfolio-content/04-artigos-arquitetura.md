# Arquitetura Editorial de Artigos

## Objetivo

Publicar artigos técnico-didáticos de base (fundamentos, ferramentas e workflows) com foco em clareza, aplicabilidade e progressão de maturidade técnica.

## Diferença entre Artigos e Insights

### Artigos

- foco em ensino estruturado;
- abordagem técnica-universal predominante;
- construção em formato guia (do conceito à execução);
- linguagem didática para quem está iniciando ou consolidando fundamentos.

### Insights

- foco em tomada de decisão e contexto aplicado;
- pode ser experiencial ou técnica-universal (conforme `00-content-positioning-mode.md`);
- ênfase em trade-offs, impacto e visão estratégica.

## Evidências da estrutura atual (Docker e Git)

Padrões observados nos dois últimos artigos:

- abertura por dor real de quem está começando;
- bloco de valor: "por que aprender isso";
- definição de conceitos fundamentais;
- sequência prática com comandos e exemplos;
- seção de erros comuns e boas práticas;
- fechamento com direcionamento de evolução;
- referências externas no final.

## Estrutura padrão recomendada para Artigos

1. Contexto inicial (dor comum)
2. Por que o tema importa para carreira técnica
3. Conceitos fundamentais
4. Setup inicial / primeiros comandos
5. Aplicação prática guiada
6. Erros comuns
7. Boas práticas
8. Próximo nível de maturidade
9. Referências

## Formato de conteúdo (padrão de escrita)

- títulos e subtítulos curtos;
- blocos de comandos em código cercado por contexto;
- listas objetivas para conceitos e erros;
- progressão linear (iniciante -> intermediário).

## Requisitos técnicos mínimos

Cada artigo deve incluir:

- ao menos 2 blocos de comandos executáveis;
- ao menos 1 bloco de configuração ou estrutura (ex.: Dockerfile, `.gitignore`, árvore de diretórios);
- ao menos 1 métrica ou regra prática em formato objetivo;
- seção final de referências (3 a 6 fontes).

## Categorias e tags sugeridas para Artigos

Categorias sugeridas:

- `artigos-tecnicos`
- `fundamentos`
- `ferramentas`

Tags base sugeridas:

- para Docker: `docker`, `containers`, `reprodutibilidade`, `mlops`
- para Git: `git`, `github`, `versionamento`, `colaboracao`
- transversais: `data-science`, `produtividade-tecnica`, `workflow`

## Critérios de qualidade

Antes de publicar um artigo, validar:

- clareza para leitor júnior/intermediário;
- sequência lógica sem saltos;
- exemplos reproduzíveis;
- ausência de jargão sem explicação;
- utilidade prática imediata.

## Backlog de Artigos (próxima fase)

1. GitHub Actions básico para projetos de dados
2. Ambientes Python: `venv`, `pip-tools`, `poetry` (quando usar cada)
3. SQL para ciência de dados: consultas essenciais para análise
4. FastAPI introdutório para servir modelos
5. Observabilidade mínima para pipelines (logs, métricas e alertas)

## Regra operacional

Para novos conteúdos de tipo Artigo:

- usar esta arquitetura como padrão principal;
- manter distinção clara em relação a `Insights`;
- quando houver dúvida de posicionamento, priorizar objetivo didático e aplicabilidade.
