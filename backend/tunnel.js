const { spawn } = require('child_process');

let proc = null;

module.exports = {
  start: () => {
    if (proc) return;
    proc = spawn('cloudflared', ['tunnel', '--config', './cloudflared/config.yml'], {
      stdio: 'ignore',
      detached: true
    });
    proc.unref();
  },
  stop: () => {
    if (proc) {
      process.kill(-proc.pid);
      proc = null;
    }
  },
  isRunning: () => !!proc
};
