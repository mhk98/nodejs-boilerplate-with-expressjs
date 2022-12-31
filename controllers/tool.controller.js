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

    res.status(200).send({
      status: "Success",
      message: "You got data",
      data: tools,
    });
  } catch (error) {
    res.status(400).send({
      status: "faild",
      message: "You couldn't get data",
      error: error.message,
    });
  }
};

module.exports.saveTool = (req, res) => {
  try {
    console.log(req.body);
    const data = tools.push(req.body);

    res.status(200).send({
      status: "Success",
      message: "Successfully added data",
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      status: "faild",
      message: "You couldn't successfully added data",
      error: error.message,
    });
  }
};

//Single data using get method
module.exports.getToolDetails = (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = tools.find((tool) => tool.id == id);
    res.status(200).send({
      status: "Success",
      message: "You got data",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "faild",
      message: "You couldn't get data",
      error: error.message,
    });
  }
};

module.exports.updateTool = (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const result = tools.find((tool) => tool.id === Number(id));
    result.id = id;
    result.name = req.body.name;
    res.status(200).send({
      status: "Success",
      message: "You successfully update data",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "faild",
      message: "You couldn't successfully update data",
      error: error.message,
    });
  }
};

module.exports.deleteTool = (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const result = tools.filter((tool) => tool.id !== Number(id));
    res.status(200).send({
      status: "Success",
      message: "You Successfully delete data",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "faild",
      message: "You couldn't successfully delete data",
      error: error.message,
    });
  }
};
