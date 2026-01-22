import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { StoryAdV1 } from '../components/ads/StoryAdV1';
import { StoryAdV2 } from '../components/ads/StoryAdV2';
import { StoryAdV3 } from '../components/ads/StoryAdV3';
import { TimelineFeedAdV1 } from '../components/ads/TimelineFeedAdV1';
import { TimelineFeedAdV2 } from '../components/ads/TimelineFeedAdV2';
import { ReelsAdV1 } from '../components/ads/ReelsAdV1';
import { ReelsAdV2 } from '../components/ads/ReelsAdV2';

const ads = [
  { name: 'StoryAdV1', title: 'START EARNING TODAY', Component: StoryAdV1, width: 1080, height: 1920 },
  { name: 'StoryAdV2', title: 'CREATING FROM SCRATCH', Component: StoryAdV2, width: 1080, height: 1920 },
  { name: 'StoryAdV3', title: 'REAL PEOPLE REAL EARNINGS', Component: StoryAdV3, width: 1080, height: 1920 },
  { name: 'TimelineFeedAdV1', title: '$19 TO START', Component: TimelineFeedAdV1, width: 1080, height: 1080 },
  { name: 'TimelineFeedAdV2', title: 'MONTH 1-6 vs DAY 1', Component: TimelineFeedAdV2, width: 1080, height: 1080 },
  { name: 'ReelsAdV1', title: '$2.1M FROM 2 TEMPLATES', Component: ReelsAdV1, width: 1080, height: 1920 },
  { name: 'ReelsAdV2', title: 'STOP If You\'re Making $0', Component: ReelsAdV2, width: 1080, height: 1920 }
];

export default function ExportAds() {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const exportAd = async (ad: any) => {
    try {
      const element = refs.current[ad.name];
      if (!element) return;

      const canvas = await html2canvas(element, {
        width: ad.width,
        height: ad.height,
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#000'
      });

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${ad.name}.png`;
      link.click();

      console.log(`✅ ${ad.name} exportado com sucesso!`);
    } catch (error) {
      console.error(`❌ Erro ao exportar ${ad.name}:`, error);
    }
  };

  const exportAll = async () => {
    for (const ad of ads) {
      await exportAd(ad);
      await new Promise(resolve => setTimeout(resolve, 500)); // Aguardar 500ms entre exports
    }
    alert('✅ Todas as imagens foram exportadas! Verifique os Downloads.');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">📥 Exportar Anúncios como Imagens</h1>
        <p className="text-center text-gray-400 mb-8">Clique em "Exportar" para baixar cada anúncio como PNG</p>

        <div className="mb-8 flex gap-4 justify-center">
          <button
            onClick={exportAll}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold text-lg"
          >
            ⬇️ Exportar Todos (7 anúncios)
          </button>
        </div>

        <div className="space-y-12">
          {/* STORIES */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400">📱 Stories (1080x1920px)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ads.slice(0, 3).map(ad => (
                <div key={ad.name} className="bg-gray-800 rounded-lg p-4">
                  <div
                    ref={el => refs.current[ad.name] = el}
                    style={{ width: ad.width, height: ad.height }}
                    className="bg-black rounded-lg overflow-hidden mx-auto mb-4"
                  >
                    <ad.Component />
                  </div>
                  <p className="font-semibold text-sm mb-2">{ad.title}</p>
                  <button
                    onClick={() => exportAd(ad)}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold text-sm"
                  >
                    ⬇️ Exportar {ad.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FEED */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-purple-400">📷 Feed (1080x1080px)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ads.slice(3, 5).map(ad => (
                <div key={ad.name} className="bg-gray-800 rounded-lg p-4">
                  <div
                    ref={el => refs.current[ad.name] = el}
                    style={{ width: ad.width, height: ad.height }}
                    className="bg-black rounded-lg overflow-hidden mx-auto mb-4"
                  >
                    <ad.Component />
                  </div>
                  <p className="font-semibold text-sm mb-2">{ad.title}</p>
                  <button
                    onClick={() => exportAd(ad)}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold text-sm"
                  >
                    ⬇️ Exportar {ad.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* REELS */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-pink-400">🎬 Reels (1080x1920px)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ads.slice(5, 7).map(ad => (
                <div key={ad.name} className="bg-gray-800 rounded-lg p-4">
                  <div
                    ref={el => refs.current[ad.name] = el}
                    style={{ width: ad.width, height: ad.height }}
                    className="bg-black rounded-lg overflow-hidden mx-auto mb-4"
                  >
                    <ad.Component />
                  </div>
                  <p className="font-semibold text-sm mb-2">{ad.title}</p>
                  <button
                    onClick={() => exportAd(ad)}
                    className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded font-semibold text-sm"
                  >
                    ⬇️ Exportar {ad.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-bold mb-4">📋 Próximas Etapas:</h3>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>Clique em "Exportar Todos" para baixar as 7 imagens</li>
            <li>Acesse Meta Ads Manager (business.facebook.com)</li>
            <li>Crie uma nova campanha com objetivo "Conversão"</li>
            <li>Faça upload das imagens dos anúncios</li>
            <li>Use o copy de <code className="bg-gray-900 px-2 py-1 rounded">ads/COPY_READY_TO_USE.md</code></li>
            <li>Configure segmentação: 25-45 anos, interesse em negócios online</li>
            <li>Configure budget: $33/dia</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
