export default function DetailedTutorial() {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 overflow-auto p-8">
      <div className="max-w-6xl mx-auto pb-20">
        <h1 className="text-4xl mb-4 text-white">Szczegółowa Instrukcja - Adobe After Effects</h1>
        <p className="text-white/60 mb-8">Przewodnik krok po kroku do odtworzenia animacji wizytówki</p>

        {/* SETUP */}
        <div className="mb-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20">
          <h2 className="text-3xl mb-4 text-white">📋 KROK 1: Setup Projektu</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>1.1.</strong> Otwórz Adobe After Effects</p>
            <p><strong>1.2.</strong> Utwórz nową kompozycję:</p>
            <ul className="ml-6 space-y-1">
              <li>• Composition → New Composition (Ctrl+N / Cmd+N)</li>
              <li>• Nazwa: <code className="bg-white/10 px-2 py-1 rounded">Antoni_Kuran_Wizytowka</code></li>
              <li>• Preset: <code className="bg-white/10 px-2 py-1 rounded">HDTV 1080 29.97</code></li>
              <li>• Width: <code className="bg-white/10 px-2 py-1 rounded">1920px</code></li>
              <li>• Height: <code className="bg-white/10 px-2 py-1 rounded">1080px</code></li>
              <li>• Frame Rate: <code className="bg-white/10 px-2 py-1 rounded">30 fps</code> (lub 60 fps dla płynniejszej animacji)</li>
              <li>• Duration: <code className="bg-white/10 px-2 py-1 rounded">13 sekund (0:00:13:00)</code></li>
            </ul>
            <p><strong>1.3.</strong> Ustaw kolor tła:</p>
            <ul className="ml-6 space-y-1">
              <li>• Composition → Background Color</li>
              <li>• Hex: <code className="bg-white/10 px-2 py-1 rounded">#0a0a0a</code> (prawie czarny)</li>
            </ul>
          </div>
        </div>

        {/* BACKGROUND GRID */}
        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl mb-4 text-white">🔲 KROK 2: Siatka w Tle (Background Grid)</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>2.1.</strong> Layer → New → Solid (Ctrl+Y / Cmd+Y)</p>
            <ul className="ml-6 space-y-1">
              <li>• Nazwa: <code className="bg-white/10 px-2 py-1 rounded">BG_Grid</code></li>
              <li>• Kolor: dowolny (zostanie nadpisany)</li>
              <li>• Ustaw na pełny rozmiar kompozycji</li>
            </ul>
            <p><strong>2.2.</strong> Effect → Generate → Vegas</p>
            <ul className="ml-6 space-y-1">
              <li>• LUB użyj <strong>CC Grid</strong>: Effect → Generate → CC Grid</li>
              <li>• Segments: Horizontal <code className="bg-white/10 px-2 py-1 rounded">38</code>, Vertical <code className="bg-white/10 px-2 py-1 rounded">21</code> (dla siatki 50x50px)</li>
              <li>• Color: <code className="bg-white/10 px-2 py-1 rounded">Biały #FFFFFF</code></li>
              <li>• Blending Mode: ustaw na <code className="bg-white/10 px-2 py-1 rounded">Add</code></li>
            </ul>
            <p><strong>2.3.</strong> Animacja Opacity:</p>
            <ul className="ml-6 space-y-1">
              <li>• Kliknij <strong>T</strong> (skrót do Opacity)</li>
              <li>• Frame 0:00:00:00 → Opacity: <code className="bg-white/10 px-2 py-1 rounded">0%</code> (dodaj keyframe)</li>
              <li>• Frame 0:00:01:00 → Opacity: <code className="bg-white/10 px-2 py-1 rounded">10%</code> (dodaj keyframe)</li>
              <li>• Zaznacz keyframe'y → prawy klik → Keyframe Assistant → Easy Ease Out</li>
            </ul>
          </div>
        </div>

        {/* GRADIENT CIRCLES */}
        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl mb-4 text-white">🌀 KROK 3: Koła z Gradientami</h2>

          <div className="mb-6">
            <h3 className="text-xl mb-3 text-purple-300">3A. Koło 1 (Purple/Blue)</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p><strong>3A.1.</strong> Layer → New → Shape Layer</p>
              <p><strong>3A.2.</strong> Nazwa: <code className="bg-white/10 px-2 py-1 rounded">Circle_Purple_Blue</code></p>
              <p><strong>3A.3.</strong> Narzędzie Ellipse (Q) → trzymaj Shift + rysuj koło 384x384px</p>
              <p><strong>3A.4.</strong> Usuń Stroke, zostaw tylko Fill</p>
              <p><strong>3A.5.</strong> Fill → Gradient → Radial Gradient:</p>
              <ul className="ml-6 space-y-1">
                <li>• Start Color: <code className="bg-white/10 px-2 py-1 rounded">#a855f7</code> (Purple), Opacity 20%</li>
                <li>• End Color: <code className="bg-white/10 px-2 py-1 rounded">#3b82f6</code> (Blue), Opacity 20%</li>
              </ul>
              <p><strong>3A.6.</strong> Effect → Blur & Sharpen → Fast Box Blur</p>
              <ul className="ml-6 space-y-1">
                <li>• Blur Radius: <code className="bg-white/10 px-2 py-1 rounded">96px</code></li>
              </ul>
              <p><strong>3A.7.</strong> Animacja Position i Scale:</p>
              <ul className="ml-6 space-y-1">
                <li>• Frame 0:00:00:00:</li>
                <li className="ml-4">→ Position: <code className="bg-white/10 px-2 py-1 rounded">960, 540</code> (center)</li>
                <li className="ml-4">→ Scale: <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
                <li className="ml-4">→ Rotation: <code className="bg-white/10 px-2 py-1 rounded">0°</code></li>
                <li>• Frame 0:00:02:00:</li>
                <li className="ml-4">→ Position: <code className="bg-white/10 px-2 py-1 rounded">760, 440</code> (x: -200px, y: -100px od centrum)</li>
                <li className="ml-4">→ Scale: <code className="bg-white/10 px-2 py-1 rounded">100%</code></li>
                <li>• Frame 0:00:13:00:</li>
                <li className="ml-4">→ Rotation: <code className="bg-white/10 px-2 py-1 rounded">360°</code></li>
              </ul>
              <p><strong>3A.8.</strong> Easing:</p>
              <ul className="ml-6 space-y-1">
                <li>• Position & Scale keyframes → Easy Ease (F9)</li>
                <li>• W Graph Editor ustaw Bezier: (0.6, 0.01, 0.05, 0.95)</li>
                <li>• Rotation → Linear (bez easingu)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-pink-300">3B. Koło 2 (Pink/Orange)</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p><strong>3B.1.</strong> Zduplikuj Circle_Purple_Blue (Ctrl+D)</p>
              <p><strong>3B.2.</strong> Nazwa: <code className="bg-white/10 px-2 py-1 rounded">Circle_Pink_Orange</code></p>
              <p><strong>3B.3.</strong> Zmień rozmiar na 320x320px</p>
              <p><strong>3B.4.</strong> Gradient colors:</p>
              <ul className="ml-6 space-y-1">
                <li>• Start: <code className="bg-white/10 px-2 py-1 rounded">#ec4899</code> (Pink), Opacity 20%</li>
                <li>• End: <code className="bg-white/10 px-2 py-1 rounded">#f97316</code> (Orange), Opacity 20%</li>
              </ul>
              <p><strong>3B.5.</strong> Position animation:</p>
              <ul className="ml-6 space-y-1">
                <li>• Frame 0:00:00:09 (delay 0.3s od pierwszego koła):</li>
                <li className="ml-4">→ Position: <code className="bg-white/10 px-2 py-1 rounded">960, 540</code>, Scale: <code className="bg-white/10 px-2 py-1 rounded">0%</code>, Rotation: <code className="bg-white/10 px-2 py-1 rounded">0°</code></li>
                <li>• Frame 0:00:02:09:</li>
                <li className="ml-4">→ Position: <code className="bg-white/10 px-2 py-1 rounded">1160, 640</code> (x: +200px, y: +100px), Scale: <code className="bg-white/10 px-2 py-1 rounded">100%</code></li>
                <li>• Frame 0:00:13:00:</li>
                <li className="ml-4">→ Rotation: <code className="bg-white/10 px-2 py-1 rounded">-360°</code> (w przeciwną stronę!)</li>
              </ul>
              <p><strong>3B.6.</strong> Ten sam easing co koło 1</p>
            </div>
          </div>
        </div>

        {/* SQUARES */}
        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl mb-4 text-white">⬜ KROK 4: Kwadraty</h2>

          <div className="mb-6">
            <h3 className="text-xl mb-3 text-white/90">4A. Kwadrat 1 (Top Left)</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p><strong>4A.1.</strong> Layer → New → Shape Layer</p>
              <p><strong>4A.2.</strong> Narzędzie Rectangle (Q) → rysuj kwadrat 128x128px</p>
              <p><strong>4A.3.</strong> Usuń Fill, zostaw tylko Stroke:</p>
              <ul className="ml-6 space-y-1">
                <li>• Stroke Width: <code className="bg-white/10 px-2 py-1 rounded">2px</code></li>
                <li>• Color: <code className="bg-white/10 px-2 py-1 rounded">Biały #FFFFFF</code>, Opacity 20%</li>
              </ul>
              <p><strong>4A.4.</strong> Position: góra 10%, lewa strona 15% kompozycji</p>
              <ul className="ml-6 space-y-1">
                <li>• Dla 1920x1080: Position około <code className="bg-white/10 px-2 py-1 rounded">288, 108</code></li>
              </ul>
              <p><strong>4A.5.</strong> Animacja:</p>
              <ul className="ml-6 space-y-1">
                <li>• Frame 0:00:00:24 (0.8s): Scale <code className="bg-white/10 px-2 py-1 rounded">0%</code>, Rotation <code className="bg-white/10 px-2 py-1 rounded">0°</code></li>
                <li>• Frame 0:00:02:09 (2.3s): Scale <code className="bg-white/10 px-2 py-1 rounded">100%</code>, Rotation <code className="bg-white/10 px-2 py-1 rounded">45°</code></li>
                <li>• Easing: Easy Ease + Bezier (0.6, 0.01, 0.05, 0.95)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-white/90">4B. Kwadrat 2 (Bottom Right)</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p><strong>4B.1.</strong> Zduplikuj Square_1</p>
              <p><strong>4B.2.</strong> Zmień rozmiar na 96x96px</p>
              <p><strong>4B.3.</strong> Stroke Opacity: 15%</p>
              <p><strong>4B.4.</strong> Position: dół 15%, prawa strona 20%</p>
              <ul className="ml-6 space-y-1">
                <li>• Dla 1920x1080: Position około <code className="bg-white/10 px-2 py-1 rounded">1536, 918</code></li>
              </ul>
              <p><strong>4B.5.</strong> Przesuń animację o 6 klatek (0.2s później):</p>
              <ul className="ml-6 space-y-1">
                <li>• Frame 0:00:01:00 (1.0s): Scale <code className="bg-white/10 px-2 py-1 rounded">0%</code>, Rotation <code className="bg-white/10 px-2 py-1 rounded">0°</code></li>
                <li>• Frame 0:00:02:15 (2.5s): Scale <code className="bg-white/10 px-2 py-1 rounded">100%</code>, Rotation <code className="bg-white/10 px-2 py-1 rounded">-45°</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* TEXT ANTONI */}
        <div className="mb-8 bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
          <h2 className="text-3xl mb-4 text-white">✍️ KROK 5: Tekst "ANTONI"</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>5.1.</strong> Kliknij narzędzie Text (Ctrl+T)</p>
            <p><strong>5.2.</strong> Wpisz: <code className="bg-white/10 px-2 py-1 rounded">ANTONI</code></p>
            <p><strong>5.3.</strong> Ustawienia czcionki:</p>
            <ul className="ml-6 space-y-1">
              <li>• Font: <strong>Bold</strong> (np. Helvetica Bold, Arial Bold)</li>
              <li>• Size: <code className="bg-white/10 px-2 py-1 rounded">84px</code></li>
              <li>• Color: <code className="bg-white/10 px-2 py-1 rounded">Biały #FFFFFF</code></li>
              <li>• Tracking: <code className="bg-white/10 px-2 py-1 rounded">+50</code> (rozstaw liter)</li>
            </ul>
            <p><strong>5.4.</strong> Włącz 3D Layer:</p>
            <ul className="ml-6 space-y-1">
              <li>• Zaznacz layer → kliknij ikonę sześcianu obok nazwy warstwy</li>
            </ul>
            <p><strong>5.5.</strong> Dodaj Animator dla animacji litera po literze:</p>
            <ul className="ml-6 space-y-1">
              <li>• Rozwiń warstwę tekstową → Animate → Position</li>
              <li>• Dodaj również: Animate → Opacity</li>
              <li>• Dodaj również: Animate → X Rotation</li>
            </ul>
            <p><strong>5.6.</strong> Ustaw Range Selector:</p>
            <ul className="ml-6 space-y-1">
              <li>• Range Selector 1 → Start: <code className="bg-white/10 px-2 py-1 rounded">0%</code>, End: <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
            </ul>
            <p><strong>5.7.</strong> Ustaw wartości Animatora:</p>
            <ul className="ml-6 space-y-1">
              <li>• Position: Y <code className="bg-white/10 px-2 py-1 rounded">+100</code></li>
              <li>• Opacity: <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
              <li>• X Rotation: <code className="bg-white/10 px-2 py-1 rounded">-90°</code></li>
            </ul>
            <p><strong>5.8.</strong> Animacja End:</p>
            <ul className="ml-6 space-y-1">
              <li>• Frame 0:00:01:15 (1.5s): End <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
              <li>• Frame 0:00:02:08 (2.28s): End <code className="bg-white/10 px-2 py-1 rounded">100%</code></li>
              <li>• Keyframes → Easy Ease + Bezier (0.6, 0.01, 0.05, 0.95)</li>
            </ul>
            <p className="text-yellow-400/80"><strong>💡 Wskazówka:</strong> To stworzy efekt staggered (litera po literze) z 3D rotacją!</p>
          </div>
        </div>

        {/* TEXT KURAN */}
        <div className="mb-8 bg-gradient-to-r from-orange-500/10 to-pink-500/10 p-6 rounded-xl border border-orange-500/20">
          <h2 className="text-3xl mb-4 text-white">✍️ KROK 6: Tekst "KURAN" z Gradientem</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>6.1.</strong> Utwórz nowy tekst: <code className="bg-white/10 px-2 py-1 rounded">KURAN</code></p>
            <p><strong>6.2.</strong> Ustawienia:</p>
            <ul className="ml-6 space-y-1">
              <li>• Font: <strong>Bold</strong></li>
              <li>• Size: <code className="bg-white/10 px-2 py-1 rounded">96px</code></li>
              <li>• Tracking: <code className="bg-white/10 px-2 py-1 rounded">+50</code></li>
            </ul>
            <p><strong>6.3.</strong> Gradient Fill (to jest trudniejsze w AE!):</p>
            <p className="ml-4 text-sm text-yellow-400/80">⚠️ Metoda 1 - Prostsza (solidny kolor):</p>
            <ul className="ml-10 space-y-1 text-sm">
              <li>• Użyj jednego koloru: <code className="bg-white/10 px-2 py-1 rounded">#ec4899</code> (Pink)</li>
            </ul>
            <p className="ml-4 text-sm text-green-400/80">✨ Metoda 2 - Gradient (zaawansowana):</p>
            <ul className="ml-10 space-y-1 text-sm">
              <li>• Effect → Generate → 4-Color Gradient</li>
              <li>• LUB Effect → Generate → Gradient Ramp</li>
              <li>• Kolory: Purple (#a855f7) → Pink (#ec4899) → Orange (#f97316)</li>
              <li>• Set Matte → używając tekstu jako maski</li>
            </ul>
            <p><strong>6.4.</strong> Włącz 3D Layer</p>
            <p><strong>6.5.</strong> Animator (tak jak w "ANTONI"):</p>
            <ul className="ml-6 space-y-1">
              <li>• Position Y: <code className="bg-white/10 px-2 py-1 rounded">-100</code> (przeciwnie niż ANTONI)</li>
              <li>• Opacity: <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
              <li>• X Rotation: <code className="bg-white/10 px-2 py-1 rounded">+90°</code> (przeciwnie)</li>
            </ul>
            <p><strong>6.6.</strong> Timing animacji:</p>
            <ul className="ml-6 space-y-1">
              <li>• Frame 0:00:03:15 (3.5s): End <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
              <li>• Frame 0:00:04:03 (4.1s): End <code className="bg-white/10 px-2 py-1 rounded">100%</code></li>
            </ul>
          </div>
        </div>

        {/* FRAMEWORK STUDIO */}
        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl mb-4 text-white">🏢 KROK 7: "FRAMEWORK STUDIO"</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>7.1.</strong> Utwórz rounded rectangle (ramka):</p>
            <ul className="ml-6 space-y-1">
              <li>• Layer → New → Shape Layer</li>
              <li>• Rounded Rectangle Tool</li>
              <li>• Szerokość: ~500px, Wysokość: ~60px</li>
              <li>• Border Radius: <code className="bg-white/10 px-2 py-1 rounded">30px</code></li>
              <li>• Stroke: 1px, Color biały, Opacity 30%</li>
              <li>• Brak Fill</li>
            </ul>
            <p><strong>7.2.</strong> Utwórz tekst wewnątrz:</p>
            <ul className="ml-6 space-y-1">
              <li>• Text: <code className="bg-white/10 px-2 py-1 rounded">FRAMEWORK STUDIO</code></li>
              <li>• Size: <code className="bg-white/10 px-2 py-1 rounded">28px</code></li>
              <li>• Color: Biały, Opacity 80%</li>
              <li>• Wyśrodkuj w ramce</li>
            </ul>
            <p><strong>7.3.</strong> Animacja ramki:</p>
            <ul className="ml-6 space-y-1">
              <li>• Frame 0:00:05:15 (5.5s): Position Y <code className="bg-white/10 px-2 py-1 rounded">+50</code>, Opacity <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
              <li>• Frame 0:00:06:15 (6.5s): Position Y <code className="bg-white/10 px-2 py-1 rounded">0</code>, Opacity <code className="bg-white/10 px-2 py-1 rounded">100%</code></li>
            </ul>
            <p><strong>7.4.</strong> Animacja Letter Spacing tekstu:</p>
            <ul className="ml-6 space-y-1">
              <li>• Frame 0:00:06:00 (6.0s): Tracking <code className="bg-white/10 px-2 py-1 rounded">0</code></li>
              <li>• Frame 0:00:07:00 (7.0s): Tracking <code className="bg-white/10 px-2 py-1 rounded">+200</code></li>
              <li>• Linear easing</li>
            </ul>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl mb-4 text-white">📧 KROK 8: Informacje Kontaktowe</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>8.1.</strong> Email z liniami:</p>
            <ul className="ml-6 space-y-1">
              <li>• Utwórz 2 linie Shape Layer (48px każda, 1px wysokości)</li>
              <li>• Gradient: transparent → white 40% → transparent</li>
              <li>• Tekst: <code className="bg-white/10 px-2 py-1 rounded">info@frameworkstudio.pl</code></li>
              <li>• Size: <code className="bg-white/10 px-2 py-1 rounded">24px</code>, Color: Biały 70%</li>
            </ul>
            <p><strong>8.2.</strong> Telefon:</p>
            <ul className="ml-6 space-y-1">
              <li>• Tekst: <code className="bg-white/10 px-2 py-1 rounded">+48 728 289 2934</code></li>
              <li>• Size: <code className="bg-white/10 px-2 py-1 rounded">20px</code></li>
              <li>• Color: Biały 60%</li>
              <li>• Tracking: <code className="bg-white/10 px-2 py-1 rounded">+100</code></li>
            </ul>
            <p><strong>8.3.</strong> Pre-compose wszystkie elementy kontaktu:</p>
            <ul className="ml-6 space-y-1">
              <li>• Zaznacz wszystkie warstwy kontaktu → prawy klik → Pre-compose</li>
              <li>• Nazwa: <code className="bg-white/10 px-2 py-1 rounded">Contact_Info</code></li>
            </ul>
            <p><strong>8.4.</strong> Animacja:</p>
            <ul className="ml-6 space-y-1">
              <li>• Frame 0:00:07:15 (7.5s): Position Y <code className="bg-white/10 px-2 py-1 rounded">+30</code>, Opacity <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
              <li>• Frame 0:00:08:15 (8.5s): Position Y <code className="bg-white/10 px-2 py-1 rounded">0</code>, Opacity <code className="bg-white/10 px-2 py-1 rounded">100%</code></li>
            </ul>
          </div>
        </div>

        {/* ACCENT LINES */}
        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl mb-4 text-white">━ KROK 9: Linie Akcentujące</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>9.1.</strong> Górna linia (fioletowa):</p>
            <ul className="ml-6 space-y-1">
              <li>• Shape Layer → Rectangle: szerokość 1920px, wysokość 4px</li>
              <li>• Position Y: <code className="bg-white/10 px-2 py-1 rounded">0</code> (góra kompozycji)</li>
              <li>• Effect → Generate → Gradient Ramp</li>
              <li>• Gradient: Transparent → Purple (#a855f7) → Transparent</li>
            </ul>
            <p><strong>9.2.</strong> Animacja Scale X:</p>
            <ul className="ml-6 space-y-1">
              <li>• Frame 0:00:09:15 (9.5s): Scale X <code className="bg-white/10 px-2 py-1 rounded">0%</code>, Opacity <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
              <li>• Frame 0:00:11:00 (11.0s): Scale X <code className="bg-white/10 px-2 py-1 rounded">100%</code>, Opacity <code className="bg-white/10 px-2 py-1 rounded">100%</code></li>
              <li>• Easing: Ease In Out</li>
            </ul>
            <p><strong>9.3.</strong> Dolna linia (różowa):</p>
            <ul className="ml-6 space-y-1">
              <li>• Zduplikuj górną linię</li>
              <li>• Position Y: <code className="bg-white/10 px-2 py-1 rounded">1080</code> (dół)</li>
              <li>• Gradient color: Pink (#ec4899)</li>
              <li>• Przesuń timing o 6 klatek (0.2s później)</li>
            </ul>
          </div>
        </div>

        {/* FADE OUT */}
        <div className="mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-3xl mb-4 text-white">🌑 KROK 10: Fade Out</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>10.1.</strong> Layer → New → Solid</p>
            <ul className="ml-6 space-y-1">
              <li>• Color: <code className="bg-white/10 px-2 py-1 rounded">#0a0a0a</code> (czarny)</li>
              <li>• Pełny rozmiar kompozycji</li>
            </ul>
            <p><strong>10.2.</strong> Przenieś na samą górę Timeline</p>
            <p><strong>10.3.</strong> Animacja:</p>
            <ul className="ml-6 space-y-1">
              <li>• Frame 0:00:12:00 (12.0s): Opacity <code className="bg-white/10 px-2 py-1 rounded">0%</code></li>
              <li>• Frame 0:00:13:00 (13.0s): Opacity <code className="bg-white/10 px-2 py-1 rounded">100%</code></li>
              <li>• Linear easing</li>
            </ul>
          </div>
        </div>

        {/* RENDER */}
        <div className="mb-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
          <h2 className="text-3xl mb-4 text-white">🎬 KROK 11: Renderowanie</h2>
          <div className="space-y-3 text-white/80">
            <p><strong>11.1.</strong> Composition → Add to Render Queue (Ctrl+M / Cmd+M)</p>
            <p><strong>11.2.</strong> Output Module → H.264:</p>
            <ul className="ml-6 space-y-1">
              <li>• Format: <code className="bg-white/10 px-2 py-1 rounded">H.264</code> (MP4)</li>
              <li>• Quality: <code className="bg-white/10 px-2 py-1 rounded">High</code></li>
              <li>• Bitrate: <code className="bg-white/10 px-2 py-1 rounded">10-20 Mbps</code></li>
            </ul>
            <p><strong>11.3.</strong> LUB dla najwyższej jakości:</p>
            <ul className="ml-6 space-y-1">
              <li>• Format: <code className="bg-white/10 px-2 py-1 rounded">QuickTime (ProRes 422)</code></li>
            </ul>
            <p><strong>11.4.</strong> Kliknij Render!</p>
          </div>
        </div>

        {/* TIPS */}
        <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/20">
          <h2 className="text-2xl mb-4 text-yellow-300">💡 Dodatkowe Wskazówki</h2>
          <ul className="space-y-2 text-white/80">
            <li>• Użyj Motion Blur dla płynniejszych animacji (włącz dla każdej warstwy i kompozycji)</li>
            <li>• Graph Editor (przycisk w Timeline) pozwala precyzyjnie dostosować krzywe Béziera</li>
            <li>• Pre-compose (Ctrl+Shift+C) grupuje warstwy - ułatwia zarządzanie</li>
            <li>• Używaj kolorów Label (prawy klik na layer) do organizacji warstw</li>
            <li>• Zapisuj regularnie! (Ctrl+S / Cmd+S)</li>
            <li>• RAM Preview (0 na numerycznej klawiaturze) - podgląd z pełną prędkością</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
