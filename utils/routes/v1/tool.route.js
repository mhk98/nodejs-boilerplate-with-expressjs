const express = require("express");
const toolControllers = require("../../../controllers/tool.controller");
const limiter = require("../../../middleware/limiter");
const viewCount = require("../../../middleware/viewCount");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("all tool here");
// });

// router.get("/:id", (req, res) => {
//   res.send("single tool here");
// });
// router.get("/", (req, res) => {
//   res.send("single tool added");
// });

/**
 * @api {get} /tool all tool
 * @apiDescription Get all the tool
 * @apiPermission admin
 *
 * @apiHeader {string} Authorization User's access token
 * @apiParam {Number{1-}} [page-1] List page
 * @apiParam {Number{1-100}} [limit =10] Users per page
 *
 * @apiSuccess {Object[]} all the tool
 *
 * @apiError (Unauthorized 401) Unauthorized users can access the data
 * @apiError (Forbidden 403) Forbidden Only admins can access the data
 */

// router.route("/").get((req, res) => {
//   res.send("all tool here");
// });

router
  .route("/")

  .get(toolControllers.getAllTool)
  .post(toolControllers.saveTool);

router
  .route("/:id")
  .get(viewCount, limiter, toolControllers.getToolDetails)
  .patch(toolControllers.updateTool)
  .delete(toolControllers.deleteTool);
module.exports = router;
