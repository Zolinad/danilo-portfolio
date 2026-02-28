---
layout: post
title: "Detecção de anomalias sem fadiga de alerta: o que realmente funciona"
date: 2026-02-26 18:30:00
description: "Como usar modelos não supervisionados para risco sem inundar a operação com falsos positivos."
tags: [anomaly-detection, unsupervised-learning, risk-analytics, scikit-learn]
categories: insights
---

Quando eu trabalho com detecção de anomalias, o erro mais comum é tratar o projeto como um problema só de modelagem. Para mim, o ponto central é decisão operacional.

Treinar modelo, gerar score e enviar alerta parece simples. O fluxo quebra quando o time recebe alertas demais e deixa de confiar no sistema.

## Por que muitos projetos degradam

As causas recorrentes que observo:

- limiar de alerta definido sem custo de erro;
- ausência de priorização por risco;
- feedback humano não incorporado ao ciclo.

Sem isso, o modelo pode ir bem tecnicamente e ainda fracassar operacionalmente.

## Estrutura mínima para funcionar

1. **Score de anomalia**
   - modelo não supervisionado (ex.: Isolation Forest);
   - score contínuo por evento.
2. **Regras de priorização**
   - combinar score com contexto de negócio (valor, criticidade, histórico);
   - classificar em níveis de risco.
3. **Fila de investigação**
   - ordenar casos por risco esperado;
   - definir SLA por faixa.
4. **Ciclo de aprendizagem**
   - registrar decisão do analista;
   - recalibrar limiares e regras.

## Função de risco operacional

Para priorização, eu costumo combinar score técnico e impacto de negócio:

$$
Risco = Score_{anomalia} \times Impacto_{financeiro} \times Criticidade_{processo}
$$

Isso me ajuda a levar primeiro os casos com maior perda esperada, em vez dos casos apenas "mais estranhos" estatisticamente.

## Métricas certas

Evito avaliar só com métrica acadêmica isolada. Em produção, acompanho:

- precisão dos alertas críticos;
- taxa de investigação útil;
- tempo médio até triagem;
- redução de perda/risco estimado.

```python
df["risco"] = (
    df["score_anomalia"] * df["impacto_financeiro"] * df["criticidade"]
)
fila = df.sort_values("risco", ascending=False).head(100)
```

## Limitações que precisam ser explícitas

- anomalia estatística não é automaticamente fraude;
- drift de comportamento exige recalibração periódica;
- sem governança de dados, o modelo degrada silenciosamente.

## O que isso demonstra sobre minha atuação

- Eu conecto modelagem não supervisionada com priorização de investigação real.
- Eu desenho mecanismo de feedback para evolução contínua do sistema.
- Eu traduzo métrica técnica em impacto de risco para apoiar decisão executiva.

[INSERIR IMAGEM: matriz 2x2 de risco (probabilidade x impacto) com distribuição dos alertas.]
[SUGESTÃO DE INFOGRÁFICO: pipeline "dados -> score -> priorização -> investigação -> feedback".]

## Conclusão

Em detecção de anomalias, o ganho real vem de um pipeline de decisão bem desenhado, não apenas de um algoritmo mais sofisticado.

Modelos ajudam a priorizar. A operação decide. O sucesso está no acoplamento entre os dois.

## Referências

- [Isolation Forest (Liu, Ting, Zhou - 2008)](https://ieeexplore.ieee.org/document/4781136)
- [Scikit-learn - IsolationForest](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html)
- [NIST AI RMF 1.0](https://www.nist.gov/itl/ai-risk-management-framework)
- [Google SRE Book - Alerting on Symptoms](https://sre.google/sre-book/practical-alerting/)
