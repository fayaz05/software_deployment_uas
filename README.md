# Personal Website

Website personal yang modern dan responsif dengan desain yang menarik, siap untuk di-deploy ke server menggunakan Express.js.

## Fitur

- ✨ Desain modern dan responsif
- 📱 Mobile-friendly
- 🎨 Animasi yang smooth
- 📧 Form kontak yang fungsional dengan API endpoint
- 🚀 Performa yang optimal
- ♿ Aksesibilitas yang baik
- 🌐 Server Express.js untuk deployment

## Struktur File

```
src/
│
├── app.js          # Server Express.js
├── package.json    # Dependencies dan scripts
├── README.md       # Dokumentasi
└── public/         # Static files
    ├── index.html  # File HTML utama
    ├── styles.css  # File CSS untuk styling
    └── script.js   # File JavaScript untuk interaktivitas
```

## Instalasi

1. **Masuk ke folder src:**
   ```bash
   cd src
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan server development:**
   ```bash
   npm run dev
   ```
   Server akan berjalan di `http://localhost:3000`

4. **Jalankan server production:**
   ```bash
   npm start
   ```

## Deployment

### Heroku

1. Install Heroku CLI dan login:
   ```bash
   heroku login
   ```

2. Buat aplikasi Heroku:
   ```bash
   heroku create nama-aplikasi-anda
   ```

3. Deploy:
   ```bash
   git push heroku main
   ```

### Railway

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Login dan deploy:
   ```bash
   railway login
   railway init
   railway up
   ```

### Vercel / Netlify

Untuk platform yang mendukung Node.js:
1. Connect repository ke platform
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Set PORT environment variable (biasanya otomatis)

### Server VPS / Cloud

1. Clone repository ke server
2. Install Node.js dan npm
3. Masuk ke folder src dan install dependencies: `npm install`
4. Install PM2 untuk process management:
   ```bash
   npm install -g pm2
   ```
5. Jalankan dengan PM2:
   ```bash
   cd src
   pm2 start app.js --name personal-website
   pm2 save
   pm2 startup
   ```
6. Setup reverse proxy dengan Nginx (opsional)

## API Endpoints

- `GET /` - Homepage
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

## Kustomisasi

### Mengubah Informasi Personal

1. **Nama dan Profil** - Edit di section Hero (`public/index.html`):
   ```html
   <span class="name">Nama Anda</span>
   <p class="hero-subtitle">Web Developer & Designer</p>
   ```

2. **Tentang Saya** - Edit di section About

3. **Keahlian** - Edit di section Skills

4. **Proyek** - Edit di section Projects

5. **Kontak** - Edit di section Contact

6. **Link Sosial Media** - Edit di section Hero

### Mengubah Warna

Edit variabel CSS di `public/styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Warna utama */
    --primary-dark: #4f46e5;     /* Warna utama gelap */
    --secondary-color: #8b5cf6;  /* Warna sekunder */
    /* ... */
}
```

## Teknologi yang Digunakan

- **Backend:**
  - Node.js
  - Express.js

- **Frontend:**
  - HTML5
  - CSS3 (dengan CSS Variables)
  - JavaScript (Vanilla JS)
  - Font Awesome Icons
  - Google Fonts (Poppins)

## Environment Variables

Anda dapat mengatur port server dengan environment variable:
```bash
PORT=3000 node app.js
```

Atau buat file `.env`:
```
PORT=3000
NODE_ENV=production
```

---

Dibuat dengan ❤️ untuk portfolio personal Anda

