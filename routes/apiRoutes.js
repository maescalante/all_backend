const firebaseRoutes = require("./firebaseRoutes");

const jsonRoutes = require("./jsonRoutes");
const { notFound } = require("../middleware/errors");
module.exports = (app) => {
  jsonRoutes(app);
  firebaseRoutes(app);
  app.use(notFound);
};
