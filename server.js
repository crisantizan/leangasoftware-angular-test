const express = require('express');
const path = require('path');

const app = express();

app
  .use(express.static(path.join(__dirname, 'dist', 'angular-interview')))
  .get('/*', (req, res) => {
    res.sendFile(
      path.join(__dirname, 'dist', 'angular-interview', 'index.html'),
    );
  })
  .listen(process.env.PORT || 8080);
