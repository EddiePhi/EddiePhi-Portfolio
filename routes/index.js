const path = require("path");
const router = require("express").Router();

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../public/build/index.html"));
});

module.exports = router;