---
layout: page
title: "Auditoria Financeira com Detecção de Anomalias"
description: "Pipeline de risco para priorizar transações suspeitas e reduzir ruído de investigação."
img: assets/img/9.jpg
importance: -2
category: work
---

## Contexto

Em cenários corporativos com grande volume transacional, revisar manualmente cada evento é inviável. O objetivo deste projeto é apoiar auditoria com priorização de casos por risco.

## Problema

Como identificar transações potencialmente anômalas sem gerar excesso de alertas e sem travar o time de análise?

## Objetivo

Construir um fluxo end-to-end de detecção de anomalias para:

- priorizar investigação;
- reduzir esforço em falsos positivos;
- aumentar velocidade de resposta para eventos críticos.

## Dados (escopo)

- dados transacionais estruturados;
- atributos operacionais e financeiros;
- variáveis de contexto para priorização de risco.

> Observação: estrutura representa um caso aplicado inspirado na experiência profissional do autor.

## Pipeline

1. **Ingestão e padronização** (SQL/Python)
2. **Qualidade de dados** (completude, consistência, outliers extremos)
3. **Feature engineering** (frequência, ticket, padrões de comportamento)
4. **Modelagem não supervisionada** (Isolation Forest)
5. **Score + regras de priorização**
6. **Saída para análise** (fila de investigação em dashboard)

## Avaliação

Métricas orientadas a negócio:

- taxa de alertas úteis;
- precisão em faixas críticas;
- tempo médio até triagem;
- redução de volume investigado sem perda de cobertura.

## Trade-offs

- limiar mais sensível aumenta cobertura, mas também ruído;
- limiar mais restritivo reduz esforço, mas pode perder sinais fracos.

A calibragem deve considerar custo de falso positivo vs. custo de falso negativo.

## Entregáveis

- notebook de exploração e modelagem;
- pipeline reprodutível de transformação;
- painel de priorização para investigação;
- documentação de regras e limitações.

## Stack

`Python`, `SQL`, `Pandas`, `Scikit-learn`, `Streamlit/Power BI`

## Próximos passos

- incorporar feedback de analistas para recalibragem contínua;
- adicionar monitoramento de drift;
- evoluir para abordagem híbrida (regras + modelo supervisionado com labels consolidados).
