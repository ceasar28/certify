require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Apply the JSON body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static("images"));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
// router middlewares

const certificateRoute = require("../src/routes/certificateRoutes");
app.use("/live", (req, res) => res.send(`Live`));
app.use("/api/v1", certificateRoute);

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    message: "Not Found",
    data: null,
  });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  const data = err.data || null;

  res.status(status).send({
    status,
    message,
    data,
  });
});

const PORT = process.env.PORT || 3500;
// const mode = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
