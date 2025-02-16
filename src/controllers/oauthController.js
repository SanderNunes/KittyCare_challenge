const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyGoogleToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        return ticket.getPayload();
    } catch (error) {
        console.error("Google token verification failed:", error);
        return null;
    }
};

const googleAuth = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: "Token is required" });
    }

    const payload = await verifyGoogleToken(token);

    if (!payload) {
        return res.status(400).json({ error: "Invalid token" });
    }

    const { name, email, picture } = payload;
    const userJwt = jwt.sign(
        { userId: email, email, full_name: name },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    return res.status(200).json({
        token: userJwt,
        user: { userId: email, email, full_name: name, picture }
    });
};

module.exports = { googleAuth };
