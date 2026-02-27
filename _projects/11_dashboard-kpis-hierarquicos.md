---
layout: page
title: "Dashboard Estratégico de KPIs Hierárquicos"
description: "Arquitetura de indicadores para conectar operação, tática e estratégia em um único fluxo decisório."
img: assets/img/10.jpg
importance: -1
category: work
---

## Contexto

Em operações com múltiplas frentes, a principal dor não é falta de dado, e sim falta de alinhamento entre indicadores e decisão.

## Problema

Como estruturar um painel que atenda liderança e operação sem criar métricas conflitantes?

## Objetivo

Construir uma arquitetura de KPIs em níveis hierárquicos para:

- garantir leitura executiva clara;
- facilitar identificação de desvios táticos;
- permitir ação operacional rápida.

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

## Governança

- definição de dono por indicador;
- revisão periódica de metas e regras;
- trilha de auditoria para mudanças de fórmula.

## Avaliação de impacto

- redução de tempo para diagnóstico de desvios;
- aumento de aderência a metas operacionais;
- melhora na consistência de decisão entre níveis.

## Stack

`SQL`, `Python`, `Power BI`, `Streamlit`, `Excel`

## Lições aprendidas

- KPI sem contexto gera ruído;
- hierarquia de indicadores reduz conflito entre áreas;
- qualidade de dado é pré-requisito para confiança no dashboard.

## Próximos passos

- adicionar alertas orientados a criticidade;
- incluir previsões de curto prazo para indicadores-chave;
- ampliar camada de explicabilidade para liderança.
