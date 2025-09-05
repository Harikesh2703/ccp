const express = require('express');
const app = express();

// Placeholder for mediasoup server setup
app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Media server running on ${PORT}`));
