let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Express Route
const studentRoute = require("../backend/routes/student.route");
const adminRoute = require("../backend/routes/admin.route");

// Connecting mongoDB Database
//const url="mongodb://localhost:27017/reactdb"
const url =
  "mongodb+srv://admin:admin@cluster0-o3gkj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose
  .connect(url, {
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log("Database sucessfully connected!");
    },
    error => {
      console.log("Could not connect to database : " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use("/students", studentRoute);
app.use("/admin", adminRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
