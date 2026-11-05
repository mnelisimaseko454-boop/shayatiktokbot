const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 10000;

// === TIKTOK VERIFICATION - DO NOT REMOVE ===
app.get('/tiktok-developers-site-verification', (req, res) => {
  res.type('text/plain').send('tiktok-developers-site-verification=nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k');
});

app.get('/tiktok-developers-site-verification.txt', (req, res) => {
  res.type('text/plain').send('tiktok-developers-site-verification=nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k');
});

app.get('/nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k.txt', (req, res) => {
  res.type('text/plain').send('tiktok-developers-site-verification=nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k');
});
// === END VERIFICATION ===

app.get('/', (req,res)=>{
  res.send('<h1>Shaya Watch Bot Live</h1><p><a href="/terms">Terms</a> | <a href="/privacy">Privacy</a> | <a href="/tiktok-developers-site-verification">TikTok Verify</a></p>');
});

app.get('/terms', (req,res)=>{
  res.send(`<h1>Terms - Shaya Bot</h1><p>Last updated: Nov 2026. By using you agree to watch ads for rewards. Must be 13+. Contact: @ShayaWatchMnelisibot on Telegram.</p><p>Website: ${req.protocol}://${req.get('host')}</p>`);
});

app.get('/privacy', (req,res)=>{
  res.send(`<h1>Privacy - Shaya Bot</h1><p>We collect Telegram ID, ad count, balance. Monetag SDK may collect device info for ads. No selling data. Deletion via Telegram.</p><p>Website: ${req.protocol}://${req.get('host')}</p>`);
});

app.get('/callback', (req,res)=>{
  res.send('<h1>TikTok Callback OK</h1><p>Close window, return to Telegram</p>');
});

// Your existing API routes keep below...
app.get('/api/balance', (req,res)=>{ res.json({balance:0}); });

app.listen(PORT, ()=> console.log('Live on '+PORT));
