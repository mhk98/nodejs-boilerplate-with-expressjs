const users = require("../users.json");
console.log(users);
module.exports.getAllusers = (req, res) => {
  try {
    if (users) {
      res.status(200).send({
        success: true,
        message: "Success",
        data: users,
      });
    } else {
      res.status(500).send({
        success: false,
        message: failed,
        error: "Internal server error",
      });
    }
  } catch (error) {
    const { name, message, stack } = err;
    errorHandler(name, message, stack);
    Logger(name, message, stack)
  }
};

module.exports.randomUsers = (req, res) => {
  try {
    const user = users[Math.floor(Math.random() * users.length)];
    if (user) {
      res.status(200).send({
        success: true,
        message: "Success",
        data: user,
      });
    } else {
      res.status(500).send({
        success: false,
        message: failed,
        error: "Internal server error",
      });
    }
  } catch (error) {
    const { name, message, stack } = err;
    errorHandler(name, message, stack);
    Logger(name, message, stack)
  }
};
