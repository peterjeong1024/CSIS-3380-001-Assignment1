const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get("/", function(req, res) {
    console.log("get message");
    res.render('bmi', { resultValue: "" });
});

app.post("/", function(req, res) {
    console.log("post message");
    var inputWeight = Number(req.body.inputWeight);
    var inputHeight = Number(req.body.inputHeight) / 100;
    var BMIResult = inputWeight / (inputHeight * inputHeight);
    var resultText = "Your BMI result is : " + BMIResult.toFixed(1);

    res.render('bmi', { resultValue: resultText });
});


app.listen(3000, function() {
    console.log("server started on port 3000");
});