const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || "3000";
const router = express.Router();
const connectDB = require("./config/db");
const multer = require("multer");
const allProducts = require("./models/allProductsModel");
var fs = require("fs");
var path = require("path");
const upload = multer({ dest: "uploads/" });

const apiUrl =
  "https://api.imgbb.com/1/upload?key=ca2c774141c9ab4114c5bef9825dca10";

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// main routes
app.use("/api/allDrugs", require("./routes/allDrugsRoutes"));
app.use("/api/indications", require("./routes/indicationRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/s;pecialArrays", require("./routes/SpecialArrayRoutes"));
app.use("/api/allProducts", require("./routes/allProductsRoutes"));

//test route
app.get("/", (req, res) => {
  res.send("<h1>Hello World! . that is backend of mederma</h1>");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file);

  const product = allProducts.create({
    description: req.body.description,
    // description:"hello bassem",
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  });

  if (product) {
    fs.unlinkSync(path.join(__dirname + "/uploads/" + req.file.filename));
  }

  res.json(product);
});

//Connect to the database before listening
connectDB().then(() => {
  //listen to server
  app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server listening on port".red, port.yellow);
  });
});
