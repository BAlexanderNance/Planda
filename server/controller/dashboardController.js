const db = require('../models/taskModel');

const dashboardController = {};

dashboardController.getCookie = (req, res, next) => {
  res.locals.cookie = req.cookies;
  next();
}


module.exports = dashboardController;