const express = require('express');
const router = express.Router();

// all users connected to this endpoint
let clients = [];

router.ws('/', (ws) => {
  // Add new client to Broadcast list
  clients.push(ws);

  /**
   * Expected message format
   *
   * {
   *   username: string,
   *   frame: string -> imgDataURL, users video frame data | -1 means user disconnected
   * }
   *
   */

  ws.on('message', (msg) => {
    // broadcast frame to all connected clients
    clients.forEach((client) => {
      // don't send users own video back to him
      if (client !== ws) {
        try {
          console.log(client.bufferedAmount);
          if (client.bufferedAmount === 0) {
            client.send(msg);
          }
        } catch {
          console.log('Error: tried to send message to disconnected client...');
        }
      }
    });
  });

  ws.on('close', () => {
    const disconectedClient = clients.indexOf(ws);
    clients.splice(disconectedClient, 1);
    console.log('Client disconnected...');
  });
});

module.exports = router;
