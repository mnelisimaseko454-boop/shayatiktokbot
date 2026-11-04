const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
  res.send('<h1>Shaya TikTok Bot is Live</h1><p><a href="/terms">Terms</a> | <a href="/privacy">Privacy</a></p>');
});

app.get('/terms', (req,res)=>{
  res.send(`<html><body style="font-family:Arial;padding:20px"><h1>Terms of Service - Shaya TikTok Bot</h1><p>Last updated: Nov 2026</p><p>Welcome to Shaya TikTok Bot. By using our service you agree to these terms:</p><ul><li>You must be 13 years or older</li><li>Service allows earning rewards by watching ads</li><li>Rewards are promotional and not guaranteed cash</li><li>We use Monetag advertising SDK</li><li>No spam, abuse, or automated cheating</li><li>We may update terms at any time</li></ul><p>Contact: Telegram @ShayaWatchMnelisibot</p><p>Website: ${req.protocol}://${req.get('host')}</p></body></html>`);
});

app.get('/privacy', (req,res)=>{
  res.send(`<html><body style="font-family:Arial;padding:20px"><h1>Privacy Policy - Shaya TikTok Bot</h1><p>Last updated: Nov 2026</p><p>We respect your privacy:</p><ul><li>We collect: Telegram user ID, username, ad count, balance</li><li>We use Monetag SDK (libtl.com) which may collect device info for ad delivery</li><li>We do not sell personal data</li><li>Data is stored securely on Render</li><li>You can request data deletion via Telegram @ShayaWatchMnelisibot</li><li>We use cookies for basic functionality</li></ul><p>Contact: Telegram @ShayaWatchMnelisibot</p><p>Website: ${req.protocol}://${req.get('host')}</p></body></html>`);
});

app.get('/callback', (req,res)=>{
  res.send('<h1>TikTok Auth Callback</h1><p>Authorization successful. You can close this window and return to Telegram bot.</p>');
});

// Keep your old API for earning if you want
app.get('/api/balance', (req,res)=>{ res.json({balance:0, adsWatched:0}) });

app.listen(PORT, ()=>{ console.log('Live on '+PORT) });
