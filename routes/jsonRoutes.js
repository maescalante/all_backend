const jsonController = require("../controllers/jsonController");
const validator = require("../middleware/validator");
module.exports = (app) => {
  app.get("/json/all", jsonController.jsonRetrieveAll),
    app.post("/json", validator.isUserValid, jsonController.jsonCreate),
    app.delete("/json/id/:id", jsonController.jsonDelete),
    app.get("/json/query?", jsonController.jsonQuery),
    app.get("/json/id/:id", jsonController.jsonRetrieve),
    app.put("/json/id/:id", jsonController.jsonUpdate);
  app.get("/json/*", jsonController.default);
};
