const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const auth = (req, res, next) => {
  try {
    let tocken = req.header.authorization;
    if (tocken) {
      const tocken = tocken.spilt(" ")[1];
      let user = jwt.verify(tocken, SECRET_KEY);
      req.userId = user.id;
    } else {
      return res.status(401).json({ message: "unauthorized user" });
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "unauthorized user" });
  }
};


module.exports = auth;