const express = require("express");
const bodyparser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");

const PORT = 3000;

app = express();
app.use(bodyparser.json());
apiRoutes(app);

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
