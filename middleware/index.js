require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require("./cors");
const rootRouter = require("../controllers/root");
const noteRouter = require("../controllers/note");

// use corsOptions if in production, leave configs undefined otherwise (for local dev)
const corsConfig =
  process.env.ENVIRONMENT === "production" ? corsOptions : undefined;

function registerMiddleware(app) {
  // allow cross-origin requests from urls defined in cors.js
  app.use(cors(corsConfig));
  // logging
  app.use(morgan("dev"));
  // parse json bodies
  app.use(express.json());

  //register routers
  app.use("/note", noteRouter); // router for "/note" urls
  app.use(rootRouter); // default router
}

module.exports = registerMiddleware;
