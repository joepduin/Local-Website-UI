> **This project is currently under active development and not yet functional.**
We’re working hard to complete core features, and things may break or not work at all.
Please do not use this in production yet, stay tuned for updates!

# 🌐 Local Website UI (LWUI)

**Local Website UI** is a self-hosted tool to run and manage local websites with secure public access through Cloudflare Tunnels. It includes a simple admin panel for creating and managing sites, configuring Cloudflare, and handling SMB shares for easy file editing.

---

## ⚠️ Project Status

**This project is currently under active development and not yet functional.**
We’re working hard to complete core features, and things may break or not work at all.
Please do not use this in production yet, stay tuned for updates!

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
| Admin Panel    |                  Node.js       |
| Web Server     | NGINX                          |
| Public Access  | Cloudflare Tunnel (`cloudflared`)|
| File Sharing   | Samba (SMB)                    |
| OS             | Linux (Ubuntu/Debian)          |

---

## 🚀 Getting Started

> Requirements: Linux, Cloudflare account, root privileges

1. Clone the repository:
```bash
git clone https://github.com/joepduin/lwui.git
cd lwui
````

2. Install dependencies:

```bash
sudo ./install.sh
```

3. Start the service:

```bash
sudo systemctl start lwui
```

4. Open the admin panel:

```
http://localhost:8080
```

---

## 🖥️ Admin Panel

Use the admin panel to:

* Create and manage websites
* Configure and control Cloudflare Tunnels
* Manage SMB shares connected to each site
* Browse and edit files remotely via SMB

---

## 📁 Directory Structure (not updated)

```
/opt/lwui/
├── sites/
│   └── example.local/
├── smb/
│   └── example.local/  -> symlink to /sites/example.local/
├── cloudflared/
│   └── tunnel.yml
├── nginx/
│   └── template.conf
├── backand/
│   └── index.js
```

---

## ⚠️ Security

* Admin panel access can be restricted locally or via VPN
* Cloudflare Tunnel secures public website access
* SMB shares are permission-controlled
* Supports Cloudflare Zero Trust policies for enhanced security

---

## 🤝 Contributing

Sent me a mail on info@joepduin.dev if you'd like to collaborate For collaborations, questions, or just to say hi.

---

## 📜 License

GNU General Public License v3.0

---

## 👤 Author

Joep
GitHub: [github.com/joepduin](https://github.com/joepduin)

```

Want me to help with setting up the admin panel code or deployment scripts next?

```
