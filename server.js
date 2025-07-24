const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Telegram bot configuration
const BOT_TOKEN = '7009108012:AAGR5iZJ7tdEzBbuIZhFemwCrHfmZKp3XZc';
const OWNER_ID = '1958034986';

// Middleware
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', async (req, res) => {
    try {
        const update = req.body;
        
        // Log the update for debugging
        console.log('Received update:', update);
        
        // Check if it's a message update
        if (update.message) {
            const chatId = update.message.chat.id;
            const text = update.message.text || '';
            
            // Only respond to the owner
            if (chatId.toString() === OWNER_ID) {
                // You can add custom commands here
                if (text.startsWith('/start')) {
                    await sendTelegramMessage(chatId, '🤖 ربات آماده دریافت اطلاعات از سایت است.');
                }
            }
        }
        
        res.sendStatus(200);
    } catch (error) {
        console.error('Error in webhook:', error);
        res.sendStatus(500);
    }
});

// Function to send message via Telegram API
async function sendTelegramMessage(chatId, text) {
    try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: text
        });
    } catch (error) {
        console.error('Error sending Telegram message:', error);
    }
}

// Set up webhook
async function setupWebhook() {
    try {
        const webhookUrl = `https://your-glitch-project-name.glitch.me/webhook`;
        const response = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${webhookUrl}`);
        console.log('Webhook setup result:', response.data);
    } catch (error) {
        console.error('Error setting up webhook:', error);
    }
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    setupWebhook();
});
