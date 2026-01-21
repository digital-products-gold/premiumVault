# 🚀 GUIA PRÁTICO DE IMPLEMENTAÇÃO - Meta Ads Campaign

## PHASE 1: PREPARAÇÃO (Antes de ir ao ar)

### Passo 1: Exportar Componentes como Imagens
Os componentes React criados (`StoryAdV1.tsx`, `TimelineFeedAdV1.tsx`, etc.) precisam ser convertidos em imagens estáticas.

**Opção A: Via Browser (Fácil)**
1. Abra cada componente em route individual
2. Use Ctrl+Shift+P → "Take Screenshot"
3. Salve em `/public/ads/` com nome claro

**Opção B: Via Script Node.js (Automático)**
```bash
npm install --save-dev playwright
node export-ads.js  # Script para gerar todas as imagens
```

**Opção C: Ferramenta Online**
- Copie cada componente para Figma / Adobe XD
- Export como JPG 1080px
- Optimize com TinyPNG

### Passo 2: Otimizar Imagens
```bash
# Install optimization tool
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant

# Run optimization
npm run optimize-ads

# Result: Reduz tamanho de 5MB → ~200-300KB por imagem
```

### Passo 3: Preparar Account Meta
```
1. Go to facebook.com/ads/manager
2. Create NEW Campaign
   - Campaign Name: "PV_Landing_Jan2026_AW"
   - Objective: "Conversions" (checkout)
   - Budget: $1,000/month inicial

3. Create 2 Ad Sets:
   - "Cold_Audience_Mobile"
   - "Warm_Retargeting"

4. Create 6 Ads (3 Stories + 2 Feed + 1 Reels)
```

---

## PHASE 2: UPLOAD & CONFIGURATION

### Passo 4: Upload das Imagens

**Em Facebook Ads Manager:**
```
Campaign > Ad Set > Create Ad

1. Choose format:
   - Instagram Story = "Instagram Stories"
   - Facebook Feed = "Feed"
   - Instagram Reels = "Reels"

2. Upload image:
   - StoryAdV1.jpg → 1080x1920px
   - TimelineFeedAdV1.jpg → 1080x1080px
   - ReelsAdV1.jpg → 1080x1920px (static)

3. Set Primary Text:
   "Stop creating from scratch. Access 200 million 
    ready-to-resell digital products today. 
    Join 50,000+ creators. Just $19 (Was $150)."

4. Add CTA Button: "Learn More" ou "Get Offer"

5. Destination URL: https://www.premiumvault.com/#pricing
```

### Passo 5: Segmentação

**Audiência 1: Cold Audience (New)**
```
Location: Brazil, USA, UK, Canada, Australia
Age: 25-45
Languages: Portuguese, English
Interests: Passive Income, Entrepreneurship, Digital Marketing
Exclusions: People who already visited website (retarget separately)
Budget: $600/day
Bid strategy: Automatic (Meta optimizes)
```

**Audiência 2: Warm (Retargeting)**
```
Type: Website Visitors
Pixel: Visited landing page > 10 seconds
Time frame: Last 30 days
Exclusions: Purchasers
Budget: $300/day
Bid strategy: Lowest cost
Landing page: https://www.premiumvault.com/checkout
```

### Passo 6: Agendamento

**Best Time to Post (Baseado em comportamento):**
- **Morning**: 7-9 AM (commute, first check)
- **Lunch**: 12-1 PM (break time)
- **Evening**: 7-11 PM (entertainment time)
- **Avoid**: 2-4 AM, 1-3 PM (lowest engagement)

```
Meta Ads Manager > Schedule ads
✓ Run all day (let Meta optimize)
✓ OR target specific hours above
```

---

## PHASE 3: MONITORING & OPTIMIZATION

### Passo 7: Métricas para Monitorar (48H após launch)

**Red Flags (Pause immediately if <24h in):**
- [ ] CTR < 1.5%
- [ ] CPC > $0.80
- [ ] Relevance Score < 5/10
- [ ] Estimated Action Rate < 1%

**Green Lights (Scale if after 48h):**
- [ ] CTR > 3%
- [ ] CPC < $0.50
- [ ] Relevance Score > 7/10
- [ ] Estimated Action Rate > 3%

### Passo 8: Daily Checklist

**Dia 1-2 (Launch)**
```
□ Ads appearing in feed? (Check with test account)
□ No policy violations? (Check Meta notifications)
□ Landing page loads fast? (Test with 4G)
□ Desktop version also working?
□ Mobile checkout working?
□ Tracking pixel firing?
```

**Dia 3-7 (Early optimization)**
```
□ Get learning phase completed (50+ conversions)
□ Pause underperforming ads (CTR < 2%)
□ Increase budget on top 2 performers (+20%)
□ Check conversion rate on landing page
□ Verify all users reaching checkout
□ Look for fraud/invalid clicks
□ Test different audience demographics
```

**Week 2+ (Scale & refinement)**
```
□ Identify winning combination (creative + audience)
□ Scale budget for winners (+50%/day)
□ Test new creative variations (Story V4, etc)
□ Analyze user path in GA
□ Calculate payback period (should be <1 day)
□ Plan retargeting for cold traffic
```

---

## PHASE 4: TESTING & A/B TESTING

### Passo 9: A/B Testing Matrix

**Test 1: Creative Variations**
```
Control: Story_V1_Urgency (Baseline)

Test 1: Story_V2_PainPoint
- Hypothesis: Pain point messaging converts 10% better
- Duration: 7 days
- Sample: 10,000 impressions each
- Success metric: >10% better CTR

Test 2: Story_V3_SocialProof
- Hypothesis: Social proof ($2.1M case) stops scroll 15% more
- Duration: 7 days
- Success metric: >15% better stop-scroll rate (via Reels Ads)
```

**Test 2: Copy Variations**
```
Headline A: "START EARNING TODAY"
Headline B: "STOP IF YOU'RE MAKING $0"
Headline C: "$19 TO START YOUR BUSINESS"

Run each with same image, measure CTR gap
Expected gap: 5-15%
```

**Test 3: Audience Segments**
```
Audience A: 25-35 Entrepreneurs (Control)
Audience B: 35-50 Side-hustlers
Audience C: 18-25 Students/Recent grads

Expected: Audience A wins (highest intent)
```

### Passo 10: Scaling Strategy

**When to scale (after 7 days):**
```
IF CTR > 4% AND CPC < $0.40 AND Relevance > 7
  → Increase daily budget +30-50%
  → Monitor for 2 days
  
IF CPC increases >20% after scaling
  → Reduce frequency
  → Expand audience by 20%
  → Pause audiences with high CPC

IF all metrics stay good
  → Scale another +50%
  → Test new creative variations
  → Expand to new audiences
```

---

## PHASE 5: BUDGET ALLOCATION

### Recommended Budget Breakdown

**Option 1: Starting Budget ($1,000/month)**
```
Cold Traffic Stories:      $400/month (40%)
Cold Traffic Feed:         $300/month (30%)
Warm Retargeting:         $250/month (25%)
Testing/New variations:    $50/month (5%)

Daily: ~$33
```

**Option 2: Growth Budget ($5,000/month)**
```
Cold Traffic Stories:      $1,500 (30%)
Cold Traffic Feed:         $1,200 (24%)
Cold Traffic Reels:        $800 (16%)
Warm Retargeting:         $1,000 (20%)
Testing/New creatives:     $500 (10%)

Daily: ~$165
```

**Option 3: Scale Budget ($10,000+/month)**
```
Multiple ad sets running in parallel
Testing across regions (PT, EN, ES)
Video ads + static ads mix
Carousel ads testing
Lookalike audiences expanding
Bid aggressively on top performers
```

---

## PHASE 6: COMPLIANCE & SAFETY

### Passo 11: Meta Policy Checklist

Before going live, verify:

```
□ No false earnings claims
  ✓ Using real testimonials with disclaimers
  ✓ All numbers verifiable from public sources
  
□ No misleading CTAs
  ✓ "Get Offer" not "CLICK HERE NOW NOW NOW"
  ✓ CTA matches landing page
  
□ No personal data violations
  ✓ Not using audience data in targeting
  ✓ Privacy policy visible on landing page
  
□ Disclaimer visible
  ✓ "Results may vary" on landing page
  ✓ Earnings disclaimer in footer
  
□ Secure checkout
  ✓ HTTPS enabled
  ✓ SSL certificate valid
  ✓ Payment processor certified
  
□ No discrimination
  ✓ Targeting age 18+
  ✓ No gender/ethnicity targeting
  ✓ No exclusionary audience building
```

### Passo 12: Financial Tracking

**Setup Google Analytics/Facebook Pixel:**
```
1. Install Meta Pixel on checkout page
2. Track events:
   - ViewContent (landing page visit)
   - AddToCart (if using cart)
   - Purchase (successful order)
   - CompleteRegistration (email capture)

3. Setup Facebook Analytics:
   Ads > Results > Conversion value
   (should show revenue)

4. Calculate metrics:
   ROAS = Revenue / Ad spend
   Payback period = Ad cost / Revenue per customer
   
   Example:
   Spend: $1,000 | Revenue: $380 (20 sales × $19)
   ROAS: 0.38 (negative - not good yet)
   BUT: With follow-up products: ROAS 1.5-2.0
```

---

## PHASE 7: TROUBLESHOOTING

### Common Issues & Fixes

**Issue 1: Ads not appearing**
```
❌ Problem: Ad learning phase, poor relevance
✓ Fix: 
  - Check pixel is firing (browser console)
  - Verify audience size > 1,000
  - Increase daily budget to $10+ (Meta needs data)
  - Wait 24-48 hours for learning phase
```

**Issue 2: CTR too low (<1%)**
```
❌ Problem: Image/copy not compelling enough
✓ Fix:
  - Test different variation immediately
  - Increase headline boldness
  - Better contrast/colors
  - Test different audience segment
  - Add urgency element if missing
```

**Issue 3: High CPC ($1+)**
```
❌ Problem: Wrong audience or poor relevance
✓ Fix:
  - Narrow audience specificity
  - Test new audience demo
  - Refresh creative (new image)
  - Check competitor pricing
  - Reduce bid strategy (lowest cost → manual)
```

**Issue 4: Ads getting rejected**
```
Common reason: Earnings claims or misleading CTA
✓ Fix:
  - Add disclaimer: "Results not guaranteed"
  - Remove % symbols from graphics
  - Make CTA less aggressive
  - Check text overlay is < 20%
  - Resubmit with Meta guidance
```

---

## PHASE 8: SCALING BEYOND META

### Expansion Channels (After Meta profitable)

**After achieving positive ROAS on Meta (Week 3-4):**

| Channel | Budget | Format | Est. CTR |
|---------|--------|--------|----------|
| Google Ads (Responsive) | +$500/mo | Dynamic display | 2-3% |
| TikTok Ads | +$300/mo | Video reels | 4-6% |
| Pinterest Ads | +$200/mo | Static pins | 1-2% |
| YouTube Ads | +$300/mo | Skippable video | 3-5% |

**Recommended sequence:**
1. Master Meta first (7-14 days)
2. Scale Meta to $100/day+ profitably
3. Expand to Google Ads (same creative)
4. Test TikTok for younger audience
5. Add YouTube for longer format testimonials

---

## 📞 SUPPORT & RESOURCES

### Meta Resources
- **Ads Manager Help**: facebook.com/ads/manager/help
- **Policies**: facebook.com/policies/ads
- **Learning**: Meta Blueprint (free certification)

### Tools Recommended
- **Analytics**: Google Analytics 4
- **Pixel tracking**: Facebook Pixel Helper (Chrome ext)
- **Design**: Figma, Canva Pro
- **Image optimization**: TinyPNG, ImageOptim
- **Reporting**: Data Studio, Tableau

### KPI Dashboard (Setup for tracking)
```
Daily metrics to track:
- Impressions
- Clicks
- CTR (should trend up)
- CPC (should trend down)
- Conversions
- ROAS
- Relevance Score
```

---

## 🎯 SUCCESS CRITERIA

### Week 1 Success Metrics
- ✅ Zero policy violations
- ✅ Ads reaching learning phase (50+ actions)
- ✅ CTR > 2%
- ✅ CPC < $0.50
- ✅ At least 1 variant with Relevance > 6

### Week 2 Success Metrics
- ✅ CTR trending up (>3%)
- ✅ Established winning creative
- ✅ Clear audience winner identified
- ✅ Ready to scale top performers

### Week 4 Success Metrics
- ✅ Positive ROAS (if targeting purchase conversion)
- ✅ Stable CPC within target range
- ✅ Payback period < 7 days
- ✅ Scalable budget (profitable at $100/day+)

---

## 📅 TIMELINE OVERVIEW

```
DAY 0:      Setup + Upload
DAYS 1-2:   Monitor + Early optimization
DAYS 3-7:   A/B Testing begins
WEEKS 2-3:  Scale winners
WEEKS 4+:   Expand channels
MONTH 2:    International/Regional targeting
```

---

**Document Version**: 1.0  
**Date**: January 20, 2026  
**Status**: Ready for implementation
