const path = require("path");
const router = require("express").Router();
const petRoutes = require("./pets");

// const userRoutes = require("./users");
//User Routes
// router.use("/users", userRoutes); //save user out go here
router.use("/pets", petRoutes); //save pet URL

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;