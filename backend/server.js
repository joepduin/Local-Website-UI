const express = require('express');
const fs = require('fs');
const os = require('os');
const tunnel = require('./tunnel');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// In-memory "DB"
const SITES_FILE = __dirname + '/sites.json';

// Load or init site list
let sites = [];
if (fs.existsSync(SITES_FILE)) {
  sites = JSON.parse(fs.readFileSync(SITES_FILE, 'utf8'));
}

// Get status
app.get('/api/status', (req, res) => {
  const total = os.totalmem() / 1024 / 1024;
  const free = os.freemem() / 1024 / 1024;
  const used = total - free;

  res.json({
    ram: `${used.toFixed(1)} / ${total.toFixed(1)} MB`,
    errors: null,
    tunnel: tunnel.isRunning() ? "Running" : "Stopped"
  });
});

// Get sites
app.get('/api/sites', (req, res) => {
  res.json({ sites });
});

// Add site
app.post('/api/sites', (req, res) => {
  const { siteName } = req.body;
  if (!siteName) return res.status(400).json({ message: 'Site name required' });

  if (!sites.includes(siteName)) {
    sites.push(siteName);
    fs.writeFileSync(SITES_FILE, JSON.stringify(sites, null, 2));
  }
  res.json({ message: 'Site added' });
});

// Delete site
app.delete('/api/sites/:name', (req, res) => {
  const siteName = req.params.name;
  sites = sites.filter(s => s !== siteName);
  fs.writeFileSync(SITES_FILE, JSON.stringify(sites, null, 2));
  res.json({ message: 'Deleted' });
});

// Tunnel
app.post('/api/tunnel/start', (req, res) => {
  tunnel.start();
  res.json({ message: "Tunnel started" });
});

app.post('/api/tunnel/stop', (req, res) => {
  tunnel.stop();
  res.json({ message: "Tunnel stopped" });
});

app.listen(PORT, () => {
  console.log(`Admin panel running at http://localhost:${PORT}`);
});
