# 🌐 Local Website UI

**Local Website UI** is a self-hosted tool to run and manage local websites with secure public access through Cloudflare Tunnels. It includes a simple admin panel for creating and managing sites, configuring Cloudflare, and handling SMB shares for easy file editing.

---

## ✨ Features

- ✅ Host multiple websites locally
- 🔒 Expose websites securely via **Cloudflare Tunnel**
- ⚙️ Manage sites and Cloudflare settings via an admin panel
- 📂 Edit website files remotely through SMB file sharing
- 🔄 Automatically generate and update web server configurations
- 📊 Monitor tunnel status and server health

---

## 📦 Tech Stack

| Component      | Technology                     |
|----------------|--------------------------------|
| Admin Panel    | Node.js                        |
| Web Server     | NGINX                          |
| Public Access  | Cloudflare Tunnel (`cloudflared`)|
| File Sharing   | Samba (SMB)                    |
| OS             | Linux (Ubuntu/Debian)          |

---

## 🚀 Getting Started

> Requirements: Linux, Cloudflare account, root privileges

1. Clone the repository:
```bash
git clone https://github.com/your-username/local-website-ui.git
cd local-website-ui
