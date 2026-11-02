# tasirs.com

Statik geliştirici sitesi (GitHub Pages). Yeni uygulama eklemek: `zikr/` klasörünü kopyalayıp düzenleyin, `index.html`'e kart ekleyin.

- `/` ana sayfa, `/zikr/` uygulama sayfası, `/zikr/privacy/` gizlilik politikası (TR+EN)
- `/app-ads.txt`: AdMob satırını ekleyin (yayıncı kimliği, tek satır tüm uygulamalar için)
- `EPOSTA_BURAYA` yer tutucusunu gerçek e-posta ile değiştirin:
  `grep -rl EPOSTA_BURAYA . | xargs sed -i '' 's/EPOSTA_BURAYA/ADRESINIZ@ornek.com/g'`
