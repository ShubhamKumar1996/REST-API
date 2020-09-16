const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const postRoutes = require("./routes/feed");
const errorController = require("./controllers/errorController.js")


app.use(bodyParser.json()); // application/json
app.use((req, res, next)=>{                             // allow applications running on two different servers to share data.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use("/feed", postRoutes);
app.use(errorController.getError);


mongoose.connect("mongodb+srv://nimcetshubhamkumar:namenames@cluster0.63s8y.mongodb.net/messages",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then((result) => {
    app.listen(3000);
    console.log("Server Started");
})
.catch(err => console.log(err));
