const { Logger } = require("mongodb");

const errorHandler = (err, req, res, next) => {
  const { name, message, stack } = err;
  res.send(name, message, stack);
  Logger.err({
    name,
    message,
    stack
  })
};

module.exports = errorHandler;
