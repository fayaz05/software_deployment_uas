const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Route untuk homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// API endpoint untuk contact form
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validasi
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'Mohon lengkapi semua field!'
        });
    }

    // Di sini Anda bisa menambahkan logika untuk mengirim email
    // atau menyimpan ke database
    console.log('Contact Form Submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
    });

    // Simulasi pengiriman email (ganti dengan service email yang sebenarnya)
    // Contoh: menggunakan nodemailer, sendgrid, dll

    res.json({
        success: true,
        message: 'Terima kasih! Pesan Anda telah dikirim. Saya akan menghubungi Anda segera.'
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Terjadi kesalahan pada server'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;

