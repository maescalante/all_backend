const axios = require("axios");
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
module.exports = {
  firebaseCreate: (req, res) => {
    axios
      .post(
        `https://test-b4e5f-default-rtdb.firebaseio.com/employees.json`,
        {
          name: req.body.name,
          email: req.body.email,
        },
        config
      )
      .then((response) => {
        if (response.data) {
          return res.status(200).json(response.data);
        } else {
          return res.status(404).json({ error: "user not found" });
        }
      })
      .catch((error) => {
        res.send("error creating in firebase");
      });
  },
  firebaseRetrieve: (req, res) => {
    axios
      .get(
        `https://test-b4e5f-default-rtdb.firebaseio.com/employees/${(
          parseInt(req.params.id) + 1
        ).toString()}.json`
      )
      .then((response) => {
        if (response.data) {
          return res.status(200).json(response.data);
        } else {
          return res.status(404).json({ error: "user not found" });
        }
      })
      .catch((error) => {
        return res.status(404).json({ error: "user not found" });
      });
  },
  urlRetrieveAll: (req, res) => {},
  urlUpdate: (req, res) => {},
  urlCreate: (req, res) => {},
};
