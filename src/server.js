require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const openaiRoutes = require('./routes/openaiRoutes');
const supabaseRoutes = require('./routes/supabaseRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const oauthRoutes = require('./routes/oauthRoutes');

const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', 
    credentials: true,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/openai', openaiRoutes);
app.use('/api/supabase', supabaseRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/oauth', oauthRoutes);

app.get('/', (req, res) => {
    res.send('Server is up and running! 😸');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
