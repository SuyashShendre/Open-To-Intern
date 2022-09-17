const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://root:1234@suyashshendre.wfinbwt.mongodb.net/group68Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use("/functionup", route);

app.listen(3000, function () {
    console.log('Express app running on port ' + 3000)
});
