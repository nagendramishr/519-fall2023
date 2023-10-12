const express = require('express');
const app = express();
const port = process.env.WEBSITES_PORT || 8080;

app.use('/', express.static('frontend/build'));

app.get('/api', (req, res) => {
  res.send('Hello, world!  '+ provess.env.Secret1);
});

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
