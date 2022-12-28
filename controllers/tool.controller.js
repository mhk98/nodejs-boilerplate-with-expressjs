const { Logger } = require("mongodb");
const errorHandler = require("../middleware/errorHandler");

let tools = [
  { id: 1, name: "Hammder" },
  { id: 2, name: "Hammder2" },
  { id: 3, name: "Hammder3" },
];

module.exports.getAllTool = (req, res) => {
  try {
    // const { limit, page } = req.query;
    // console.log(limit, page);
    // res.send(tools.slice(0, limit));

    if (tools) {
      res.status(200).send({
        success: true,
        message: "Success",
        data: tools,
      });
    } else {
      res.status(500).send({
        success: false,
        error: "Internal server error",
      });
    }
  } catch (err) {
    const { name, message, stack } = err;
    errorHandler(name, message, stack);
    Logger(name, message, stack)
  }
};

module.exports.saveTool = (req, res) => {
  console.log(req.body);
  tools.push(req.body);
  res.send(tools);
};

//Single data using get method
module.exports.getToolDetails = (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = tools.find((tool) => tool.id == id);
    if (result) {
      res.status(200).send({
        success: true,
        message: Success,
        data: result,
      });
    } else {
      res.status(500).send({
        success: false,
        error: "Internal server error",
      });
    }
  } catch (error) {
    const { name, message, stack } = err;
    errorHandler(name, message, stack);
    Logger(name, message, stack)
  }
};

module.exports.updateTool = (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const result = tools.find((tool) => tool.id === Number(id));
    result.id = id;
    result.name = req.body.name;
    if (result) {
      res.status(200).send({
        success: true,
        message: Success,
        data: result,
      });
    } else {
      res.status(500).send({
        success: false,
        error: "Internal server error",
      });
    }
  } catch (error) {
    const { name, message, stack } = err;
    errorHandler(name, message, stack);
    Logger(name, message, stack)
  }
};

module.exports.deleteTool = (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const result = tools.filter((tool) => tool.id !== Number(id));
    if (result) {
      res.status(200).send({
        success: true,
        message: Success,
        data: result,
      });
    } else {
      res.status(500).send({
        success: false,
        error: "Internal server error",
      });
    }
  } catch (error) {
    const { name, message, stack } = err;
    errorHandler(name, message, stack);
    Logger(name, message, stack)
  }
};
