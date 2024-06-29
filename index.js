const TelegramBot = require('node-telegram-bot-api');

const token = '7220327046:AAFzNLeSW8sGILnt5S_cMjjhqoLvO8zN8pE';

const bot = new TelegramBot(token, {polling: true});

const webAppUrl = 'https://t.me/mybot/myapp' 

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  
    const opts = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Open Web App',
              web_app: { url: webAppUrl }
            }
          ]
        ]
      }
    };
  
    bot.sendMessage(chatId, 'Click the button below to open the web app:', opts);
  });
