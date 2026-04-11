# Antoni Kuran - Business Card Animation

Futurystyczna animacja wizytówki stworzona w React + Motion + Tailwind CSS.

## 🚀 Deployment na GitHub Pages

### Krok 1: Utwórz repozytorium
Utwórz nowe repozytorium GitHub o nazwie **test2**

### Krok 2: Push kodu
```bash
cd export-repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJA-NAZWA-UŻYTKOWNIKA/test2.git
git push -u origin main
```

### Krok 3: Włącz GitHub Pages
1. Przejdź do Settings → Pages w swoim repozytorium
2. W sekcji "Source" wybierz **GitHub Actions**
3. GitHub automatycznie wykryje workflow i rozpocznie deployment

### Krok 4: Gotowe!
Twoja animacja będzie dostępna pod adresem:
```
https://TWOJA-NAZWA-UŻYTKOWNIKA.github.io/test2/
```

## 💻 Lokalne uruchomienie

```bash
pnpm install
pnpm dev
```

## 📦 Build

```bash
pnpm build
```

Build zostanie utworzony w katalogu `dist/`.
