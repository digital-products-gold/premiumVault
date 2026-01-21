# 📐 ESPECIFICAÇÕES TÉCNICAS DE ANÚNCIOS - Meta Ads

## 1️⃣ STORY ADS (Instagram & Facebook Stories)

### Dimensões
- **Tamanho**: 1080 x 1920 pixels
- **Proporção**: 9:16 (vertical)
- **Formato**: JPG ou PNG
- **Peso máximo**: 5 MB
- **Duração**: 5 segundos (default)

### Recomendações Técnicas
- Safe zone: 80px margem de todas as bordas
- Texto na parte central (safetynet)
- Sem elementos muito perto das bordas (cortados em alguns devices)
- Resolução mínima: 1080px (altura) x 1920px (largura)

### Variações a Testar
- **StoryAdV1**: "START EARNING TODAY" (Urgência + Prova Social)
- **StoryAdV2**: "CREATING FROM SCRATCH?" (Pain Point)
- **StoryAdV3**: "REAL PEOPLE REAL EARNINGS" (Social Proof)

---

## 2️⃣ FEED ADS (Facebook & Instagram Feed)

### Dimensões
- **Tamanho**: 1080 x 1080 pixels (1:1 Square)
- **Proporção**: 1:1
- **Formato**: JPG ou PNG
- **Peso máximo**: 5 MB
- **Texto na imagem**: Máximo 20% da área total

### Layout Zones
```
┌─────────────────────────────┐
│   TOP 25% - Headline/Hook   │  (Máximo destaque)
├─────────────────────────────┤
│   MID 50% - Value Prop      │  (Informação principal)
├─────────────────────────────┤
│   BOT 25% - CTA/Price       │  (Ação)
└─────────────────────────────┘
```

### Recomendações
- Imagem central (não muito para bordas)
- Texto grande e legível em mobile
- Fundo contrastante (40% das conversões vem de contraste)
- CTA como botão visual (não só texto)

### Variações a Testar
- **TimelineFeedAdV1**: "$19 TO START" (Direto)
- **TimelineFeedAdV2**: "MONTH 1-6 vs DAY 1" (Contraste)

---

## 3️⃣ REELS ADS (Instagram Reels & Facebook Reels)

### Dimensões
- **Tamanho**: 1080 x 1920 pixels
- **Proporção**: 9:16 (vertical)
- **Formato**: MP4 ou MOV (video) / JPG ou PNG (static)
- **Peso máximo**: 4 GB (video), 5 MB (static)
- **Duração**: 15 segundos recomendado (máx 60s)
- **Frame rate**: 30 FPS (ideal)
- **Bitrate**: 5-10 Mbps

### Para STATIC IMAGE REELS (versão simples)
- Use as mesmas imagens dos Stories
- Duração sugerida: 3-5 segundos loop

### Recomendações
- Primeira frame deve ser chamativa (para sem som, ou com legenda)
- Sem textos muito pequenos
- Ação visual clara (zoom, transição, aparição)
- CTA no final (3 últimos segundos)

### Variações a Testar
- **ReelsAdV1**: "$2.1M FROM 2 TEMPLATES" (Shocking Stat)
- **ReelsAdV2**: "STOP If You're Making $0" (Transformation)

---

## 🎨 DESIGN GUIDELINES - Paleta de Cores

### Core Colors (Neuro Marketing)
| Cor | Uso | Psicologia |
|-----|-----|-----------|
| 🟠 Laranja (#FF8C00) | CTA Principal | Urgência, ação, energia |
| 🔴 Vermelho (#DC143C) | Urgência, FOMO | Perigo, urgência, descontar |
| 🟢 Verde (#10B981) | Solução, sucesso | Crescimento, positivo, esperança |
| 🟡 Amarelo (#FCD34D) | Destaque | Felicidade, otimismo, atenção |
| 🔵 Azul (#3B82F6) | Confiança, background | Confiança, profissionalismo |
| 🟣 Roxo (#A855F7) | Premium, aspiração | Luxo, exclusividade, mistério |

### Color Psychology por Audience
- **Age 18-35**: Vibrante (laranja, vermelho, rosa)
- **Age 35-55**: Sofisticado (azul, verde, roxo)
- **High intent**: Alto contraste (preto/branco + cor neon)

### Gradientes Recomendados
```
Background 1: Azul escuro → Roxo
  from-[#1a1a2e] to-[#16213e]

Urgency: Laranja → Vermelho
  from-orange-500 to-red-600

Success: Verde → Esmeralda
  from-green-500 to-emerald-600

Premium: Roxo → Rosa
  from-purple-600 to-pink-600
```

---

## 📝 TEXT HIERARCHY - Tamanhos Recomendados

### Para Imagens 1080px de altura

| Elemento | Tamanho | Peso | Observações |
|----------|---------|------|------------|
| Headline Principais | 48-72px | 900 (black) | Apenas 2-4 palavras |
| Headline Secundária | 36-48px | 700 (bold) | 5-8 palavras max |
| Subheadline | 24-32px | 600 (semibold) | Suporte ao headline |
| Body Text | 16-20px | 500 (medium) | Features/benefits |
| Small Text | 12-16px | 400 (regular) | Guarantee, disclaimer |

### Legibilidade em Mobile
- Mínimo de 14px para body text (Meta recomenda)
- Máximo 5 cores por anúncio
- Contraste mínimo 4.5:1 (accessibility)

---

## 🎬 ANIMATION & MOTION SPECS

### Para Video Ads (Future version)
- **Intro**: 0-3 segundos (hook visual, sem som)
- **Body**: 3-12 segundos (mensagem principal)
- **CTA**: 12-15 segundos (call-to-action)
- **Transições**: 0.3-0.5s (não muito rápido)
- **Música**: Royalty-free, motivadora (60-90 bpm)

---

## ✅ CHECKLIST DE ENTREGA

### Pré-upload
- [ ] Imagens em 1080px de altura
- [ ] Proporção correta (9:16 ou 1:1)
- [ ] Peso < 5MB
- [ ] Formato JPG ou PNG
- [ ] Cores em RGB (não CMYK)
- [ ] Sem text overlay > 20%
- [ ] Sem logos de competidores
- [ ] Sem marca d'água de stocks

### Accessibility
- [ ] Texto legível em mobile
- [ ] Contraste suficiente
- [ ] Sem piscar (seizure risk)
- [ ] Sem dependência de cor (color-blind friendly)

### Brand Compliance
- [ ] Logo Premium Vault presente
- [ ] Cores brand guidelines
- [ ] Tone of voice consistente
- [ ] Disclaimer de earnings presente

### Meta Policy Compliance
- [ ] Sem clickbait excessivo
- [ ] Sem falsas garantias
- [ ] Sem discriminação
- [ ] Sem conteúdo enganoso
- [ ] CTA clara
- [ ] Landing page alinhada com ad

---

## 📊 METADATA & CAMPAIGN STRUCTURE

### Campaign Setup Recomendado
```
Campaign Name: PV_Landing_Jan2026_AW
├── Ad Set 1: Cold_Audience_Stories
│   └── Ad 1: Story_V1_Urgency
│   └── Ad 2: Story_V2_PainPoint
│   └── Ad 3: Story_V3_SocialProof
├── Ad Set 2: Cold_Audience_Feed
│   └── Ad 4: Feed_V1_Direct
│   └── Ad 5: Feed_V2_Contrast
├── Ad Set 3: Cold_Audience_Reels
│   └── Ad 6: Reels_V1_ShockingStat
│   └── Ad 7: Reels_V2_Transformation
├── Ad Set 4: Warm_Retargeting_Engaged
│   └── Ad 8: Video_Testimonial_1
│   └── Ad 9: Video_Testimonial_2
└── Ad Set 5: Hot_Retargeting_CartAbandon
    └── Ad 10: CartRecovery_Video
```

### Ad Description (Facebook/Instagram)
```
Copy curto (125 chars max):
"Start your digital business with 200M products. 
No creation needed. Just $19 lifetime access."
```

### Primary Text (Longer version, 2000 chars)
```
Hook line (stop scroll)
Benefit statement
Social proof number
CTA + urgency

Example:
"Stop creating from scratch. Access 200 million 
ready-to-resell digital products today. Join 
50,000+ creators earning with Premium Vault. 
Just $19 lifetime access. 87% OFF (24H only)."
```

---

## 🚨 COMMON MISTAKES TO AVOID

❌ **Texto muito pequeno** - Não legível em mobile  
❌ **Sem contraste** - Difícil ler sobre background  
❌ **CTA genérica** - "Learn More" converte menos que "Claim Deal $19"  
❌ **Muitas cores** - Confunde o olho, reduz foco  
❌ **Sem social proof** - Trustworthiness ↓ 60%  
❌ **Muito texto** - Meta penaliza, reduz reach  
❌ **Imagem de baixa qualidade** - Relevance score ↓  
❌ **CTA abaixo do fold em mobile** - Nunca visto pelo usuário  

---

## 📱 DEVICE-SPECIFIC RECOMMENDATIONS

### Mobile (85% do tráfego)
- ✅ Texto MUITO grande
- ✅ CTA claro e maior
- ✅ Contraste extremo
- ✅ Sem elementos pequenos
- ✅ Vertical layout (9:16)

### Desktop (15% do tráfego)
- ✅ Posso usar 1:1 (feed desktop)
- ✅ Mais detalhes visuais possíveis
- ✅ Texto pode ser menor
- ✅ Landscape layout ok

### Tablet (5% do tráfego)
- ✅ Meio termo entre mobile e desktop
- ✅ Testar em iPad-size
- ✅ Responsivo ambos os sentidos

---

## 🔄 VERSIONING & UPDATES

### Current Version
- **Date**: January 20, 2026
- **Version**: 1.0
- **Status**: Ready for upload

### Version History
- v1.0 - Initial creation (6 ad variations)
- v1.1 (planned) - Video versions
- v1.2 (planned) - Carousel ads
- v2.0 (planned) - Regional variations (PT, EN, ES)

---

**Last updated**: January 20, 2026  
**Next review**: February 2026  
**Designer**: AI Marketing Team
