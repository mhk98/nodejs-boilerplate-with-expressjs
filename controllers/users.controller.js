const users = require("../users.json");
console.log(users);
module.exports.getAllusers = (req, res, next) => {
  try {

    res.status(200).send({
      status: 'Success',
      message: "You got data",
      data: users,
    });

  } catch (error) {
    res.status(400).send({
      status: 'faild',
      message: 'You donot got data',
      error: error.message,
    });
  }
};

module.exports.randomUsers = (req, res) => {


  try {
    const user = users[Math.floor(Math.random() * users.length)];
    res.status(200).send({
      status: 'Success',
      message: "You got data",
      data: user,
    });

  } catch (error) {
    res.status(400).send({
      status: 'faild',
      message: 'You donot got data',
      error: error.message,
    });
  }
};
