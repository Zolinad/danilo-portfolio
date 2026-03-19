---
layout: page
title: "Dashboard Estratégico de KPIs Hierárquicos"
date: 2026-03-12
description: "Arquitetura de indicadores para conectar operação, tática e estratégia em um único fluxo decisório."
img: assets/img/10.jpg
importance: -1
category: projects
categories: [projects]
tags: [dashboard, bi, visualização-de-dados, estratégia]
---

## Contexto

Quando atuo em ambientes com múltiplas frentes, a dor principal não é falta de dado, e sim desalinhamento entre indicador e decisão.

## Problema

Como eu estruturo um painel que atenda liderança e operação sem criar métricas conflitantes?

## Hipótese

Se eu organizar KPIs por camada decisória (estratégica, tática e operacional), consigo reduzir ruído e aumentar velocidade de resposta.

## Objetivo

Construir uma arquitetura de KPIs para:

- garantir leitura executiva clara;
- facilitar identificação de desvios táticos;
- permitir ação operacional rápida.

## Dados

- fontes operacionais (produção, qualidade, disponibilidade);
- dados de planejamento e metas;
- regras de consolidação por janela temporal.

## Feature Engineering

- normalização de granularidade temporal;
- criação de variação percentual por baseline;
- cálculo de indicadores compostos por camada;
- flags de criticidade por faixa de controle.

## Modelo

Neste projeto, o foco não é predição avançada; o "modelo" é a lógica de cálculo e governança dos KPIs por nível decisório.

## Estrutura da solução

### Nível estratégico

- indicadores agregados de resultado;
- foco em tendência e atingimento de meta.

### Nível tático

- decomposição por processo/área;
- identificação de gargalos e variabilidade.

### Nível operacional

- métricas acionáveis por turno/janela;
- gatilhos para intervenção rápida.

## Pipeline de dados

1. ETL de fontes operacionais
2. Padronização de definições de KPI
3. Cálculo de indicadores com versionamento
4. Publicação para camada analítica
5. Consumo em painel interativo

## Avaliação

- redução de tempo para diagnóstico de desvios;
- aumento de aderência a metas operacionais;
- melhora na consistência de decisão entre níveis.

Métrica de desvio que aplico com frequência:

$$
Desvio\_relativo = \frac{Valor\_atual - Meta}{Meta}
$$

## Código exemplo

```python
df["desvio_relativo"] = (df["valor_atual"] - df["meta"]) / df["meta"]
df["criticidade"] = pd.cut(
    df["desvio_relativo"],
    bins=[-1.0, -0.10, -0.03, 1.0],
    labels=["alta", "moderada", "controlada"],
)
```

## Governança

- definição de dono por indicador;
- revisão periódica de metas e regras;
- trilha de auditoria para mudanças de fórmula.

## Visualização sugerida

[INSERIR IMAGEM: dashboard com três camadas de KPI (estratégica, tática, operacional).]
[SUGESTÃO DE INFOGRÁFICO: cascata "meta estratégica -> desdobramento tático -> ação operacional".]

## Lições estratégicas

- KPI sem contexto gera ruído;
- hierarquia de indicadores reduz conflito entre áreas;
- qualidade de dado é pré-requisito para confiança no dashboard.

## Stack

`SQL`, `Python`, `Power BI`, `Streamlit`, `Excel`

## Próximos passos

- adicionar alertas orientados a criticidade;
- incluir previsões de curto prazo para indicadores-chave;
- ampliar camada de explicabilidade para liderança.
