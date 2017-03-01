const express = require('express');
const siteRoutes = express.Router();

siteRoutes.use((req, res, next) => {
  if (req.session.currentUser) { // If the user isnt logged in, it shall not execute any of the commands below
    next();
  } else {
    res.redirect('/');
  }
});

siteRoutes.get('/secret', (req, res, next) => {
  res.render('secret-view.ejs');
});

siteRoutes.get('/cia-files', (req, res, next) => {
  res.render('cia-files.ejs');
});

module.exports = siteRoutes;
