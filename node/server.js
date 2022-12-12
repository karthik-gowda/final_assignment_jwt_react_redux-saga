const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserQuery = require("./app/models/query.model");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.mongoose
  .connect('mongodb+srv://USERNAME:PASSWORD@cluster0.vpi2v.mongodb.net/myThirdDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route for home page
app.get("/",  (req, res) => {
  res.json({ message: "Welcome to FoodLook." });
});


//Queries route
app.post('/queryinsert', async (req, res) => {
    try{
      const {name, question, phone} = req.body;
      let newUser = new UserQuery({
        name, question, phone
      })
      newUser.save();
      
    }
    catch(err){
      console.log(err);
    }
})


// routes from different folder
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

