const correctUser = "admin";
const correctPass = "localpass";

// AUTH
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === correctUser && pass === correctPass) {
    document.getElementById('loginBox').style.display = "none";
    document.getElementById('adminApp').style.display = "block";
    showPage('dashboard');
    loadDashboard();
    fetchSites();
  } else {
    document.getElementById('loginMessage').textContent = "Wrong credentials.";
  }
}

function logout() {
  location.reload(); // simple reset
}

// NAVIGATION
function showPage(id) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';

  if (id === 'dashboard') loadDashboard();
  if (id === 'manageSites') fetchSites();
}

// DASHBOARD
function loadDashboard() {
  fetch('/api/status')
    .then(res => res.json())
    .then(data => {
      document.getElementById('ramUsage').textContent = data.ram;
      document.getElementById('errorStatus').textContent = data.errors || "None";
      document.getElementById('tunnelStatus').textContent = data.tunnel || "Unknown";
    })
    .catch(() => {
      document.getElementById('ramUsage').textContent = "Error loading data";
    });
}

// CREATE SITE
function createSite() {
  const siteName = document.getElementById('siteNameInput').value.trim();
  if (!siteName) return alert('Enter a site name');

  fetch('/api/sites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ siteName })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message || "Site created");
    document.getElementById('siteNameInput').value = "";
    fetchSites();
  });
}

// MANAGE SITES
function fetchSites() {
  fetch('/api/sites')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('siteList');
      list.innerHTML = "";

      if (!data.sites || data.sites.length === 0) {
        list.innerHTML = "<p>No sites found</p>";
        return;
      }

      data.sites.forEach(site => {
        const div = document.createElement('div');
        div.className = 'site';
        div.innerHTML = `
          <span>${site}</span>
          <button onclick="deleteSite('${site}')">Delete</button>
        `;
        list.appendChild(div);
      });
    });
}

function deleteSite(siteName) {
  if (!confirm(`Delete "${siteName}"?`)) return;

  fetch(`/api/sites/${siteName}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(data => {
      alert(data.message || "Deleted");
      fetchSites();
    });
}

// TUNNEL
function startTunnel() {
  fetch('/api/tunnel/start', { method: 'POST' })
    .then(res => res.json())
    .then(data => alert(data.message || "Tunnel started"));
}

function stopTunnel() {
  fetch('/api/tunnel/stop', { method: 'POST' })
    .then(res => res.json())
    .then(data => alert(data.message || "Tunnel stopped"));
}
