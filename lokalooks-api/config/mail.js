require('dotenv').config();

module.exports = {
    mailers: {
        smtp: {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            encryption: process.env.MAIL_ENCRYPTION,
            username: process.env.MAIL_USERNAME,
            password: process.env.MAIL_PASSWORD,
        }
    },
    from: {
        address: process.env.MAIL_FROM_ADDRESS,
        name: process.env.MAIL_FROM_NAME,
    },
    tls: {
        // Tambahkan konfigurasi TLS
        rejectUnauthorized: false
    }
};