// TikTok Site Verification - DO NOT REMOVE
app.get('/tiktok-developers-site-verification', (req, res) => {
  res.type('text/plain').send('tiktok-developers-site-verification=nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k');
});

// Also support the .txt version TikTok sometimes checks
app.get('/tiktok-developers-site-verification.txt', (req, res) => {
  res.type('text/plain').send('tiktok-developers-site-verification=nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k');
});

// Alternative - serve at root as text file
app.get('/nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k.txt', (req, res) => {
  res.type('text/plain').send('tiktok-developers-site-verification=nhiUP3zTOtgqUGHaI8D2iDGjxn67xe9k');
});
