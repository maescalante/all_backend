const fs = require("fs");

module.exports = {
  jsonCreate: (req, res) => {
    const { name, email } = req.body;
    fs.readFile("./data/jsonTest.json", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "file not found" });
      }
      data = JSON.parse(data);
      lastId = parseInt(data[data.length - 1].id);
      data.push({ id: (lastId + 1).toString(), name: name, email: email });
      try {
        fs.writeFile("./data/jsonTest.json", JSON.stringify(data), (err) => {
          if (err) {
            console.log(err);
          }
        });
        return res.status(200).json({
          success: "User Created with id: " + (lastId + 1).toString(),
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Could not create" });
      }
    });
  },

  jsonUpdate: (req, res) => {
    res.send("update");
  },
  jsonRetrieve: (req, res) => {
    fs.readFile("./data/jsonTest.json", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "file not found" });
      }
      data = JSON.parse(data);

      for (var i = 0; i < data.length; i++) {
        if (data[i].id === req.params.id) {
          return res.status(200).json(data[i]);
        }
      }

      return res.status(400).json({ error: "No data with that id" });
    });
  },

  jsonRetrieveAll: (req, res) => {
    fs.readFile("./data/jsonTest.json", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      data = JSON.parse(data);
      return res.status(200).json(data);
    });
  },

  jsonDelete: (req, res) => {
    const id = req.params.id;
    fs.readFile("./data/jsonTest.json", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "file not found" });
      }
      data = JSON.parse(data);
      var position = -1;
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          position = i;
        }
      }
      if (position == -1) {
        return res.status(404).json({ error: "document no found" });
      }
      data.splice(position, 1);
      try {
        fs.writeFile("./data/jsonTest.json", JSON.stringify(data), (err) => {
          if (err) {
            console.log(err);
          }
        });
        return res.status(200).json({
          success: "User deleted  ",
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Could not delete" });
      }
    });
  },

  jsonQuery: (req, res) => {
    res.send(req.query);
  },
  default: (req, res) => {
    res.send("json page not found");
  },
};
