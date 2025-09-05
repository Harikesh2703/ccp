const express = require('express');
const http = require('http');
const { WebSocketServer } = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === client.OPEN) {
        client.send(msg.toString());
      }
    });
  });
});

app.get('/health', (req, res) => res.json({ ok: true }));

server.listen(8080, () => console.log('Signaling server running on 8080'));
