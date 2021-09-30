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
const Role = db.role;

db.mongoose
  .connect('mongodb+srv://karthik_final:karthik_final@cluster0.vpi2v.mongodb.net/myThirdDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/",  (req, res) => {
  res.json({ message: "Welcome to FoodLook." });
});



app.post('/queryinsert', async (req, res) => {
    try{
      const {name, question, phone} = req.body;
      const exist =await UserQuery.findOne({name});
      if(exist){
        res.status(400).send('Already Asked')
      }
      let newUser = new UserQuery({
        name, question, phone
      })
      newUser.save();
      
    }
    catch(err){
      console.log(err);
    }
})


// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

    }
  });
}
