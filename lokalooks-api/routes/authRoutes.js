const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: authController.home
    },
    {
        method: 'POST',
        path: '/register',
        handler: authController.register
    },
    {
        method: 'POST',
        path: '/login',
        handler: authController.login
    },
    {
        method: 'POST',
        path: '/send-reset-password-email',
        handler: authController.sendResetPasswordEmail,
        options: {
            pre: [authMiddleware]
        }
    },
    {
        method: 'POST',
        path: '/reset-password',
        handler: authController.resetPassword,
        options: {
            pre: [authMiddleware]
        }
    },
    {
        method: 'POST',
        path: '/generate-token',
        handler: authController.generateToken
    },
    {
        method: 'POST',
        path: '/logout',
        handler: authController.logout,
        options: {
            pre: [authMiddleware]
        }
    }
];