const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const { supabase } = require('../services/supabaseConnection');

const authenticateToken = async (req, res, next) => {
    // First, try to get the token from the httpOnly cookie
    const token = req.cookies.auth_token || (req.headers['authorization']?.split(' ')[1]);

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }

    try {
        // First, try to verify if it's a Supabase session token
        const { data, error } = await supabase.auth.getUser(token);

        if (data?.user) {
            req.user = {
                userId: data.user.id,
                email: data.user.email,
                full_name: `${data.user.user_metadata?.first_name || ''} ${data.user.user_metadata?.last_name || ''}`.trim()
            };
            return next();
        }

        // If it's not a Supabase token, try JWT verification
        const { userId, email, full_name } = jwt.verify(token, JWT_SECRET);
        req.user = { userId, email, full_name };

        next();
    } catch (error) {
        console.error('Auth error:', error);
        return res.status(401).json({ message: 'Invalid token. User not authenticated.' });
    }
};

module.exports = authenticateToken;
