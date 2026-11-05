const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// === TIKTOK VERIFICATION - 100% COVERAGE ===
const VERIFY_CODE = 'tiktok-developers-site-verification=nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k';
const VERIFY_TOKEN = 'nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k';

app.get('/tiktok-developers-site-verification', (req,res) => res.type('text/plain').send(VERIFY_CODE));
app.get('/tiktok-developers-site-verification.txt', (req,res) => res.type('text/plain').send(VERIFY_CODE));
app.get('/.well-known/tiktok-developers-site-verification', (req,res) => res.type('text/plain').send(VERIFY_CODE));
app.get('/.well-known/tiktok-developers-site-verification.txt', (req,res) => res.type('text/plain').send(VERIFY_CODE));

// TikTok also checks a file named with your token
app.get(`/${VERIFY_TOKEN}.txt`, (req,res) => res.type('text/plain').send(VERIFY_CODE));
app.get(`/${VERIFY_TOKEN}`, (req,res) => res.type('text/plain').send(VERIFY_CODE));

app.get('/', (req,res) => {
  res.send(`<html><head><meta name="tiktok-developers-site-verification" content="${VERIFY_TOKEN}" /></head><body>
  <h1>Shaya TikTok Bot Live</h1>
  <p>${VERIFY_CODE}</p>
  <p><a href="/terms">Terms</a> | <a href="/privacy">Privacy</a></p>
  </body></html>`);
});

app.get('/terms', (req,res) => res.send('<h1>Terms</h1><p>Shaya TikTok Bot Terms - Contact @ShayaWatchMnelisibot</p>'));
app.get('/privacy', (req,res) => res.send('<h1>Privacy</h1><p>We collect Telegram ID only. Contact @ShayaWatchMnelisibot</p>'));
app.get('/callback', (req,res) => res.send('Callback OK'));

app.listen(PORT, () => console.log('Live '+PORT));
