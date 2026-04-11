export default function AESpecification() {
  const timeline = [
    {
      time: '0:00 - 0:02',
      layer: 'Background Grid',
      animation: 'Opacity: 0 → 10%',
      easing: 'Ease Out',
      notes: 'Grid size: 50x50px, Color: White 10%'
    },
    {
      time: '0:00 - 0:02',
      layer: 'Circle Gradient 1 (Purple/Blue)',
      animation: 'Scale: 0 → 100%, Position: center → (-200, -100), Rotation: 0 → 360°',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Size: 384px, Blur: 96px, Continue rotation for full 13s'
    },
    {
      time: '0:00.3 - 0:02.3',
      layer: 'Circle Gradient 2 (Pink/Orange)',
      animation: 'Scale: 0 → 100%, Position: center → (200, 100), Rotation: 0 → -360°',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Size: 320px, Blur: 96px, Continue rotation for full 13s'
    },
    {
      time: '0:00.8 - 0:02.3',
      layer: 'Square 1 (Top Left)',
      animation: 'Scale: 0 → 100%, Rotation: 0 → 45°',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Size: 128px, Border: 2px white 20%, Position: 10% from top, 15% from left'
    },
    {
      time: '0:01 - 0:02.5',
      layer: 'Square 2 (Bottom Right)',
      animation: 'Scale: 0 → 100%, Rotation: 0 → -45°',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Size: 96px, Border: 2px white 15%, Position: 15% from bottom, 20% from right'
    },
    {
      time: '0:01.5 - 0:02.28',
      layer: 'Text: "ANTONI" - Each letter (6 letters)',
      animation: 'Position Y: 100 → 0, Opacity: 0 → 100%, Rotation X: -90° → 0°',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Delay each letter by 0.08s (stagger), Font size: 84px, Color: White, 3D rotation'
    },
    {
      time: '0:03.5 - 0:04.1',
      layer: 'Text: "KURAN" - Each letter (5 letters)',
      animation: 'Position Y: -100 → 0, Opacity: 0 → 100%, Rotation X: 90° → 0°',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Delay each letter by 0.08s (stagger), Font size: 96px, Gradient: Purple → Pink → Orange'
    },
    {
      time: '0:05.5 - 0:06.5',
      layer: 'Framework Studio Label - Container',
      animation: 'Position Y: 50 → 0, Opacity: 0 → 100%',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Border: 1px white 30%, Border radius: 24px, Padding: 12px 32px'
    },
    {
      time: '0:06 - 0:07',
      layer: 'Framework Studio Label - Text',
      animation: 'Letter Spacing: 0em → 0.25em',
      easing: 'Linear',
      notes: 'Text: "FRAMEWORK STUDIO", Font size: 28px, Color: White 80%'
    },
    {
      time: '0:07.5 - 0:08.5',
      layer: 'Contact Email',
      animation: 'Position Y: 30 → 0, Opacity: 0 → 100%',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Text: "info@frameworkstudio.pl", Font size: 24px, Color: White 70%, with divider lines'
    },
    {
      time: '0:07.5 - 0:08.5',
      layer: 'Email Divider Lines (Left & Right)',
      animation: 'Scale X: 0 → 100%, Opacity: 0 → 100%',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Width: 48px each, Height: 1px, Gradient: Transparent → White 40%'
    },
    {
      time: '0:07.5 - 0:08.5',
      layer: 'Phone Number',
      animation: 'Opacity: 0 → 100%',
      easing: 'Cubic Bezier (0.6, 0.01, 0.05, 0.95)',
      notes: 'Text: "+48 728 289 2934", Font size: 20px, Color: White 60%, Letter spacing: wider'
    },
    {
      time: '0:09.5 - 0:11',
      layer: 'Accent Line Top',
      animation: 'Scale X: 0 → 100%, Opacity: 0 → 100%',
      easing: 'Ease In Out',
      notes: 'Full width, Height: 4px, Gradient: Transparent → Purple → Transparent'
    },
    {
      time: '0:09.7 - 0:11.2',
      layer: 'Accent Line Bottom',
      animation: 'Scale X: 0 → 100%, Opacity: 0 → 100%',
      easing: 'Ease In Out',
      notes: 'Full width, Height: 4px, Gradient: Transparent → Pink → Transparent'
    },
    {
      time: '0:12 - 0:13',
      layer: 'Fade Out Overlay',
      animation: 'Opacity: 0 → 100%',
      easing: 'Linear',
      notes: 'Black solid color, covers entire composition'
    }
  ];

  const colorPalette = [
    { name: 'Background', value: '#0a0a0a' },
    { name: 'Text White', value: '#ffffff' },
    { name: 'Purple Gradient Start', value: '#a855f7' },
    { name: 'Blue Gradient End', value: '#3b82f6' },
    { name: 'Pink Gradient Start', value: '#ec4899' },
    { name: 'Orange Gradient End', value: '#f97316' },
  ];

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 overflow-auto p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl mb-8 text-white">Specyfikacja After Effects</h1>

        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-2xl mb-4 text-white">Podstawowe Informacje</h2>
          <div className="grid grid-cols-2 gap-4 text-white/80">
            <div>
              <strong>Czas trwania:</strong> 13 sekund
            </div>
            <div>
              <strong>Frame rate:</strong> 30 fps (lub 60 fps dla płynniejszych animacji)
            </div>
            <div>
              <strong>Rozdzielczość:</strong> 1920x1080 (Full HD) lub wyższa
            </div>
            <div>
              <strong>Tło:</strong> #0a0a0a (czarne)
            </div>
          </div>
        </div>

        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-2xl mb-4 text-white">Paleta Kolorów</h2>
          <div className="grid grid-cols-3 gap-4">
            {colorPalette.map((color, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg border border-white/20"
                  style={{ backgroundColor: color.value }}
                />
                <div>
                  <div className="text-white text-sm">{color.name}</div>
                  <div className="text-white/60 text-xs font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-2xl mb-6 text-white">Timeline Animacji</h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-white font-mono text-sm bg-purple-500/20 px-3 py-1 rounded">
                    {item.time}
                  </div>
                  <div className="text-white/60 text-sm">Warstwa #{i + 1}</div>
                </div>
                <h3 className="text-white mb-2">{item.layer}</h3>
                <div className="text-white/80 text-sm mb-2">
                  <strong>Animacja:</strong> {item.animation}
                </div>
                <div className="text-white/80 text-sm mb-2">
                  <strong>Easing:</strong> {item.easing}
                </div>
                <div className="text-white/60 text-sm italic">
                  {item.notes}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-white/10">
          <h2 className="text-2xl mb-4 text-white">Wskazówki do After Effects</h2>
          <ul className="space-y-2 text-white/80">
            <li>• Użyj <strong>Shape Layers</strong> dla kwadratów i linii</li>
            <li>• Użyj <strong>Text Layers</strong> z <strong>Animator</strong> dla animacji tekstu litera po literze</li>
            <li>• Gradienty można stworzyć używając <strong>Gradient Ramp</strong> effect</li>
            <li>• Rozmycie (blur): użyj <strong>Fast Box Blur</strong> lub <strong>Gaussian Blur</strong></li>
            <li>• 3D rotacja tekstu: włącz <strong>3D Layer</strong> i animuj <strong>X Rotation</strong></li>
            <li>• Easing: użyj <strong>Graph Editor</strong> do precyzyjnego ustawienia krzywych Béziera</li>
            <li>• Stagger delay: użyj <strong>expressions</strong> lub ręcznie ustaw delay dla każdej litery</li>
            <li>• Zapisz jako <strong>H.264</strong> (MP4) lub <strong>ProRes</strong> dla najlepszej jakości</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
