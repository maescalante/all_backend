const firebaseController = require("../controllers/firebaseController");
const validator = require("../middleware/validator");
module.exports = (app) => {
  app.get("/firebase/id/:id", firebaseController.firebaseRetrieve),
    app.post(
      "/firebase",
      validator.isUserValid,
      firebaseController.firebaseCreate
    );
};
