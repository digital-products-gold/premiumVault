const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const ADS = [
  {
    name: 'StoryAdV1',
    title: 'START EARNING TODAY',
    width: 1080,
    height: 1920,
    url: 'http://localhost:5174/?ad=StoryAdV1'
  },
  {
    name: 'StoryAdV2',
    title: 'CREATING FROM SCRATCH',
    width: 1080,
    height: 1920,
    url: 'http://localhost:5174/?ad=StoryAdV2'
  },
  {
    name: 'StoryAdV3',
    title: 'REAL PEOPLE REAL EARNINGS',
    width: 1080,
    height: 1920,
    url: 'http://localhost:5174/?ad=StoryAdV3'
  },
  {
    name: 'TimelineFeedAdV1',
    title: '$19 TO START',
    width: 1080,
    height: 1080,
    url: 'http://localhost:5174/?ad=TimelineFeedAdV1'
  },
  {
    name: 'TimelineFeedAdV2',
    title: 'MONTH 1-6 vs DAY 1',
    width: 1080,
    height: 1080,
    url: 'http://localhost:5174/?ad=TimelineFeedAdV2'
  },
  {
    name: 'ReelsAdV1',
    title: '$2.1M FROM 2 TEMPLATES',
    width: 1080,
    height: 1920,
    url: 'http://localhost:5174/?ad=ReelsAdV1'
  },
  {
    name: 'ReelsAdV2',
    title: 'STOP If You\'re Making $0',
    width: 1080,
    height: 1920,
    url: 'http://localhost:5174/?ad=ReelsAdV2'
  }
];

async function exportAds() {
  const outputDir = path.join(__dirname, '../public/ads-exports');
  
  // Criar diretório se não existir
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch();
  
  console.log('🎬 Iniciando exportação de anúncios...\n');

  for (const ad of ADS) {
    try {
      const page = await browser.newPage();
      
      // Configurar tamanho da viewport
      await page.setViewport({
        width: ad.width,
        height: ad.height,
        deviceScaleFactor: 1
      });

      console.log(`⏳ Renderizando ${ad.name}...`);
      
      // Navegar para a página
      await page.goto(ad.url, { waitUntil: 'networkidle2' });
      
      // Aguardar um pouco para garantir que o componente carregou
      await page.waitForTimeout(2000);

      // Capturar a screenshot
      const filename = `${ad.name}.png`;
      const filepath = path.join(outputDir, filename);
      
      await page.screenshot({ path: filepath, fullPage: false });
      
      console.log(`✅ ${ad.name} exportado com sucesso!`);
      console.log(`   📁 ${filepath}`);
      console.log(`   📐 ${ad.width}x${ad.height}px\n`);
      
      await page.close();
    } catch (error) {
      console.error(`❌ Erro ao exportar ${ad.name}:`, error.message);
    }
  }

  await browser.close();
  
  console.log('\n🎉 Todas as imagens foram exportadas para:');
  console.log(`   ${outputDir}\n`);
  console.log('📋 Próximas etapas:');
  console.log('   1. Abra Meta Ads Manager');
  console.log('   2. Crie uma nova campanha');
  console.log('   3. Faça upload das imagens de public/ads-exports/');
  console.log('   4. Use as copy templates de ads/COPY_READY_TO_USE.md\n');
}

exportAds().catch(console.error);
