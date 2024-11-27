const jwt = require('jsonwebtoken');

const authMiddleware = (request, h) => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return h.response({ error: 'Unauthorized' }).code(401).takeover();
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;
        return h.continue;
    } catch (error) {
        return h.response({ error: 'Unauthorized' }).code(401).takeover();
    }
};

module.exports = authMiddleware;