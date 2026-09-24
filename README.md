# İz Çiçek Home · Butik Çiçek ve Kalıcı Aranjman Kataloğu

Bu proje, **İz Çiçek Home** markası ([@izcicekhomee](https://www.instagram.com/izcicekhomee/)) için geliştirilmiş; zarif, ferah, butik ve fotoğraf odaklı Türkçe bir tanıtım ve katalog web sitesidir.

Ziyaretçiler koleksiyonları ve ürün detaylarını inceleyebilir, WhatsApp üzerinden tek tıkla ürün adı ve sayfa bağlantısını içeren hazır mesajla veya doğrudan Instagram DM aracılığıyla atölye ile iletişime geçebilir.

---

## 🌸 Kullanılan Teknolojiler

- **Next.js (App Router)** & **React**
- **TypeScript** (Katı tip güvenliği)
- **Tailwind CSS v4** & Modern CSS Değişkenleri
- **Google Fonts** (`Cormorant Garamond` serif başlıklar + `Plus Jakarta Sans` sans-serif gövde metinleri, Türkçe karakter / `latin-ext` destekli)
- **Statik Çıktı (Static HTML Export)**: `output: "export"`, `images: { unoptimized: true }`
- **Tamamen Yerel JSON Veri Mimarisi**: Kod içine gömülü metin olmadan kolay içerik yönetimi

---

## 📁 Proje Dizin Yapısı

```text
izcicek-web/
├── public/
│   ├── images/              # Yüksek çözünürlüklü vitrin ve ürün fotoğrafları (.jpg)
│   └── robots.txt           # Arama motoru robot direktifleri
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Kök şablon, SEO meta, fontlar, lang="tr"
│   │   ├── page.tsx         # Ana sayfa (Hero, Koleksiyonlar, Seçki, Hikaye, Süreç, SSS, Instagram)
│   │   ├── koleksiyonlar/   # Filtrelenebilir ürün kataloğu
│   │   ├── urunler/[slug]/  # Ürün detay sayfası (generateStaticParams ile statik derleme)
│   │   ├── hakkimizda/      # Marka hikayesi ve atölye felsefesi
│   │   ├── iletisim/        # İletişim bilgileri, WhatsApp ve Instagram yönlendirmesi
│   │   ├── not-found.tsx    # Markaya özel 404 sayfası
│   │   ├── sitemap.ts       # Otomatik statik sitemap (sitemap.xml)
│   │   └── globals.css      # Tailwind v4 importları ve renk değişkenleri
│   ├── components/
│   │   ├── Header.tsx       # Yapışkan (sticky) zarif üst menü & erişilebilir mobil menü
│   │   ├── Footer.tsx       # Atölye manifestosu, linkler ve sosyal medya
│   │   ├── ProductCard.tsx  # Tıklanabilir, görsel oranlı ürün kartı
│   │   ├── ProductGrid.tsx  # Responsive (1-2-3 sütun) ürün ızgarası
│   │   ├── ProductGallery.tsx # Önizlemeli ürün fotoğraf galerisi
│   │   ├── CategoryFilter.tsx # İstemci taraflı anlık kategori filtreleme
│   │   ├── WhatsAppButton.tsx # Ürün adı ve URL kodlayan dinamik danışma butonu
│   │   ├── FaqAccordion.tsx # Sıkça sorulan sorular akordeon bileşeni
│   │   └── SectionHeading.tsx # Bölüm başlığı bileşeni
│   ├── data/
│   │   ├── site.json        # Marka adı, iletişim bilgileri, hero metinleri, SSS ve Instagram
│   │   ├── categories.json  # Kategori tanımları ve görselleri
│   │   └── products.json    # Ürün listesi, ölçü, malzeme, bakım ve görseller
│   ├── lib/
│   │   └── content.ts       # Tip güvenli veri okuma ve WhatsApp URL oluşturucu
│   └── types/
│       └── content.ts       # TypeScript veri modelleri
├── next.config.ts           # Statik export ve unoptimized görsel ayarları
└── package.json
```

---

## 🚀 Kurulum ve Çalıştırma

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek siteyi görüntüleyin.

### 3. Statik Üretim (Build) Alın
```bash
npm run build
```
Bu komut, tüm sayfaları ve ürün detay yollarını `out/` klasörüne statik HTML, CSS ve JavaScript olarak derler.

---

## 🛠️ İçerik Yönetimi ve Güncelleme Rehberi

Kodlama bilmeye gerek kalmadan tüm içerikler `src/data/` klasöründeki JSON dosyalarından yönetilir:

### 1. WhatsApp Numarasını ve Site Bilgilerini Güncelleme
Dosya: `src/data/site.json`
- `phone`: Müşterinin resmi WhatsApp numarasını buraya yazın (örnek: `"+905XXXXXXXXX"`). Numara girildiğinde tüm ürün detaylarındaki ve iletişim sayfasındaki WhatsApp butonları otomatik olarak aktifleşir ve hazır mesajla çalışır. Numara boş bırakılırsa Instagram DM alternatifi devrededir.
- `domain`: Yayına alınacak gerçek alan adını yazın (örnek: `"https://izcicekhome.com"`).
- `hero`, `story`, `faqs`: Ana sayfa açılış metinlerini, marka hikayesini ve soru-cevapları buradan değiştirebilirsiniz.

### 2. Yeni Ürün Ekleme veya Düzenleme
Dosya: `src/data/products.json`
Aşağıdaki şablona göre yeni bir ürün objesi ekleyin:
```json
{
  "id": "p9",
  "slug": "yeni-tasarim-adi",
  "name": "Yeni Tasarım Adı",
  "category": "aranjmanlar",
  "description": "Kısa tanıtım açıklaması.",
  "details": "Detaylı açıklama ve kullanım önerisi.",
  "images": ["/images/yeni-fotograf.jpg"],
  "featured": true,
  "dimensions": "Yükseklik 35 cm, çap 25 cm",
  "material": "Fitilli seramik saksı, kalıcı güller",
  "care": "Su gerektirmez, doğrudan güneşten koruyunuz.",
  "isSample": false
}
```
*Not: `isSample: false` yapıldığında "Örnek Tasarım" rozeti kalkar.*

### 3. Fotoğraf Değiştirme
- Yeni fotoğrafları `public/images/` klasörüne kopyalayın (örneğin `public/images/gelin-1.jpg`).
- İlgili ürün veya kategoride görsel yolunu `"/images/gelin-1.jpg"` olarak tanımlayın.

---

## 🌐 Vercel veya Statik Sunucuya Dağıtım (Deploy)

Proje `output: "export"` kullandığı için **Vercel**, **Cloudflare Pages**, **Netlify** veya herhangi bir hosting üzerinde sıfır sunucu maliyetiyle yayınlanabilir.

### Vercel'e Dağıtım:
1. Projeyi GitHub reponuza push edin.
2. Vercel dashboard üzerinden **Add New Project** diyerek reponuzu seçin.
3. Framework Preset: **Next.js** olarak otomatik algılanacaktır.
4. **Deploy** butonuna tıklayın.

---

## 📋 Canlıya Geçiş Öncesi Müşteriden Alınması Gereken Bilgiler

Sitenin gerçek yayına hazır hale gelmesi için işletme sahibinden temin edilecek bilgiler:
1. **Resmi WhatsApp Numarası:** Sipariş hattı için kullanılacak cep telefonu numarası (`site.json` içine eklenecek).
2. **Gerçek Alan Adı (Domain):** Sitenin barındırılacağı www adresi (`site.json` ve `sitemap.xml` için).
3. **Doğrulanmış Marka Hikayesi:** Kurucu mesajı ve atölye geçmişi (`site.json` -> `story` alanı).
4. **Gerçek Ürün Fotoğrafları ve Ölçüleri:** Örnek içeriklerin yerine müşterinin kendi atölyesinden çekilmiş fotoğraflar.
