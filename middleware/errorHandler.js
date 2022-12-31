const { Logger } = require("mongodb");

const errorHandler = (err, req, res, next) => {
  res.send(err.message);
  Logger(err.message)
};

module.exports = errorHandler;
