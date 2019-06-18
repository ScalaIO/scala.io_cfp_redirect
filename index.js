const express = require('express');
const app = express();

const targetBaseUrl = 'https://www.papercall.io/scalaio-2019';

function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}

app.get('*', handleRedirect);

const port = process.env.PORT || 8080;

app.listen(port);