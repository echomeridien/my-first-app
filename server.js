const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

let visits = 0;

// Serve files from the "public" folder (our HTML page)
app.use(express.static('public'));

// An API route: returns data as JSON instead of a page
app.get('/api/hello', (req, res) => {
  visits++;
  res.json({
    message: 'Hello from the server 👋',
    serverTime: new Date().toISOString(),
    visits: visits,
  });
});

// Only accept connections from this machine (Caddy will sit in front)
app.listen(PORT, '127.0.0.1', () => {
  console.log(`App running at http://localhost:${PORT}`);
});