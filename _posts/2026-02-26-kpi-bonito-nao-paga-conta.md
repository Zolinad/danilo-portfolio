---
layout: post
title: "KPI bonito não paga conta: como escolher indicadores que movem resultado"
date: 2026-02-26 18:10:00
description: "Um guia prático para transformar dashboards em decisões operacionais melhores."
tags: [kpi, analytics-strategy, industrial-operations, six-sigma]
categories: insights
---

Na minha experiência em operações, um dashboard pode ser visualmente excelente e, ainda assim, não ajudar ninguém a decidir melhor.

O ponto central para mim é simples: um KPI só é útil quando reduz incerteza em uma decisão concreta.

## O erro mais comum

Eu vejo com frequência indicadores escolhidos por disponibilidade de dados, e não por relevância de negócio. O resultado é um painel com métricas descritivas, mas com baixa utilidade decisória.

Exemplos típicos:

- indicadores sem meta explícita;
- métricas sem responsável por ação;
- sinais que chegam tarde demais para corrigir rota.

## Um critério prático para avaliar KPI

Antes de publicar um indicador, faço quatro perguntas:

1. **Qual decisão esse KPI influencia?**
2. **Qual ação é tomada quando ele sai da faixa esperada?**
3. **Em qual janela de tempo essa ação ainda gera impacto?**
4. **Qual trade-off ele representa?** (ex.: produtividade vs. qualidade)

Se não houver resposta clara para as quatro perguntas, o KPI ainda não está maduro.

## Um modelo simples para priorização

Quando preciso priorizar KPIs, uso uma função de utilidade com pesos explícitos:

$$
U(KPI) = w_1 \cdot Impacto + w_2 \cdot Acionabilidade - w_3 \cdot Latencia
$$

Com isso, a conversa deixa de ser "qual gráfico ficou mais bonito" e vira "qual indicador melhora decisão com menor atraso".

## Enquadramento Lean/Six Sigma

Uma abordagem útil é conectar KPI a:

- **VOC (Voice of Customer):** o que é valor para quem recebe o resultado;
- **CTQ (Critical to Quality):** quais variáveis realmente afetam esse valor;
- **DMAIC:** melhoria contínua com governança, não apenas visualização.

Isso evita o ciclo de "medir tudo" e ajuda a medir o que realmente importa.

## Caso aplicado (contexto industrial)

Em projetos que conduzi, indicadores em níveis hierárquicos (estratégico, tático, operacional) funcionaram melhor porque cada camada responde a uma pergunta diferente:

- **Estratégico:** estamos evoluindo na direção correta?
- **Tático:** onde estão os maiores desvios?
- **Operacional:** qual ajuste fazemos hoje para corrigir?

Essa arquitetura reduz ruído e acelera resposta.

```python
# Exemplo simples de monitoramento de desvio em Python
desvio = (valor_atual - meta) / meta
if desvio < -0.05:
    acao = "intervencao_imediata"
elif desvio < -0.02:
    acao = "plano_tatico"
else:
    acao = "manter_roteiro"
```

## Limitações e cuidados

- KPI sem qualidade de dado vira ruído com aparência de precisão;
- KPI sem rito de revisão tende a envelhecer rápido;
- KPI isolado pode incentivar otimização local e piorar o sistema como um todo.

## Lições práticas para times de dados

- Conectar modelagem de indicadores com decisão de negócio, não com estética de dashboard.
- Explicitar trade-offs para evitar otimização local.
- Estruturar governança (meta, dono, frequência e ação) para sustentar resultado no tempo.

[INSERIR IMAGEM: exemplo de dashboard hierárquico com níveis estratégico, tático e operacional.]
[SUGESTÃO DE INFOGRÁFICO: fluxo "KPI -> decisão -> ação -> resultado -> revisão".]

## Próximos passos para seu portfólio

Se você quer mostrar maturidade em analytics, documente para cada KPI:

- objetivo de negócio;
- fórmula e fonte de dados;
- frequência de atualização;
- responsável pela ação;
- exemplo de decisão tomada com base nele.

Esse nível de clareza é o que diferencia painel decorativo de painel de gestão.

## Referências

- [NIST/SEMATECH e-Handbook - What are control charts?](https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc3.htm)
- [ASQ - What is Six Sigma?](https://asq.org/quality-resources/six-sigma)
- [Google SRE Book - Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)
- [Power BI guidance - KPI visuals](https://learn.microsoft.com/power-bi/visuals/power-bi-visualization-kpi)
