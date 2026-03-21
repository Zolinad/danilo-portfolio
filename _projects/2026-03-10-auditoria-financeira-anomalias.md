---
layout: page
title: "Auditoria Financeira com Detecção de Anomalias"
date: 2026-03-10
permalink: /projects/auditoria-financeira-anomalias/
description: "Pipeline de risco para priorizar transações suspeitas e reduzir ruído de investigação."
img: assets/img/9.jpg
importance: -2
categories: [projects]
tags: [auditoria, anomalia, risk-scoring, python]
---

## Contexto

Em operações com grande volume transacional, eu não consigo escalar revisão manual sem perder velocidade de resposta. Neste estudo aplicado que desenvolvi para fins educacionais, simulei um cenário de auditoria com priorização por risco.

## Problema

Como eu identifico transações potencialmente anômalas sem gerar excesso de alertas e sem travar o time de análise?

## Hipótese

Se eu combinar score de anomalia com variáveis de impacto e criticidade, consigo reduzir ruído e aumentar a taxa de investigação útil.

## Objetivo

Construir um fluxo end-to-end para:

- priorizar investigação;
- reduzir esforço com falsos positivos;
- aumentar velocidade de resposta para eventos críticos.

## Dados

- dados transacionais estruturados;
- atributos operacionais e financeiros;
- variáveis de contexto para priorização de risco.

## Feature Engineering

As features principais que uso nesse tipo de problema:

- frequência e recorrência por entidade;
- desvio de ticket médio por janela temporal;
- variação de horário/canal/comportamento;
- histórico de eventos críticos.

## Modelo

- algoritmo base: `IsolationForest`;
- saída: score contínuo por transação;
- pós-processamento: score ajustado por impacto e criticidade.

## Pipeline

1. **Ingestão e padronização** (SQL/Python)
2. **Qualidade de dados** (completude, consistência, outliers extremos)
3. **Feature engineering**
4. **Modelagem não supervisionada**
5. **Score + regras de priorização**
6. **Saída para análise** (fila de investigação em dashboard)

## Avaliação

Métricas orientadas a negócio:

- taxa de alertas úteis;
- precisão em faixas críticas;
- tempo médio até triagem;
- redução de volume investigado sem perda de cobertura.

Equação de priorização aplicada:

$$
Risco = Score_{anomalia} \times Impacto_{financeiro} \times Criticidade_{processo}
$$

## Código exemplo

```python
from sklearn.ensemble import IsolationForest

model = IsolationForest(n_estimators=300, contamination=0.02, random_state=42)
df["score_anomalia"] = -model.fit_predict(X) * model.decision_function(X)
df["risco"] = (
    df["score_anomalia"] * df["impacto_financeiro"] * df["criticidade"]
)
fila_priorizada = df.sort_values("risco", ascending=False)
```

## Visualização sugerida

[INSERIR IMAGEM: distribuição do score de anomalia por faixa de impacto financeiro.]
[SUGESTÃO DE INFOGRÁFICO: fluxo "dados -> features -> score -> priorização -> investigação".]

## Lições estratégicas

- limiar mais sensível aumenta cobertura, mas também ruído;
- limiar mais restritivo reduz esforço, mas pode perder sinais fracos;
- feedback de analistas é essencial para estabilizar o sistema ao longo do tempo.

## Stack

`Python`, `SQL`, `Pandas`, `Scikit-learn`, `Streamlit/Power BI`

## Próximos passos

- incorporar feedback de analistas para recalibragem contínua;
- adicionar monitoramento de drift;
- evoluir para abordagem híbrida (regras + modelo supervisionado com labels consolidados).
