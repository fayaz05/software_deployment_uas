# Fayaz Node API

Fayaz Node API adalah aplikasi backend berbasis **Node.js (Express)** yang berjalan pada **VPS Linux** menggunakan **systemd service** dan mendukung proses **CI/CD via GitHub Actions**.

---

## 🚀 Fitur Utama
- REST API berbasis Node.js
- Endpoint Health Check
- Konfigurasi environment menggunakan `.env`
- Deployment otomatis via GitHub Actions
- Manajemen service menggunakan `systemd`
- Siap digunakan di server VPS (Ubuntu)

---

## 📁 Struktur Project
├── src/
│ └── app.js
├── .env.example
├── package.json
├── package-lock.json
├── README.md


---

## ⚙️ Requirement
- Node.js v20+
- npm
- VPS Ubuntu 20.04 / 22.04
- Git
- systemd