module.exports = {
  isUserValid: (req, res, next) => {
    if (req.body.name && req.body.email) {
      next();
    } else {
      res.status(400).send("invalid user data");
    }
  },
};
