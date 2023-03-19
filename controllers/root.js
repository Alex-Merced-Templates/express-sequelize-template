// the root router for routes that don't belong behind a prefix

const express = require("express")
const router = express.Router();

// Register Routes with Router

router.get("/", (req, res) => {
  res.json({ response: "this is the response for get request to '/'" });
});

// export router
module.exports = router;
