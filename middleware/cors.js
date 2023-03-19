// cors configurations

// URL whitelisted to make requests to server
const urlWhitelist = ["http://example1.com", "http://example2.com"];

// white listed methods
const methodWhitelist = ["GET", "PUT", "POST", "DELETE", "PATCH", "HEAD"];

// cors configuration object
var corsOptions = {
  origin: function (origin, callback) {
    if (urlWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: methodWhitelist,
  credentials: true,
};

// export config object
module.exports = corsOptions;
