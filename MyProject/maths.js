const express = require("express");
const maths = require("./maths");

const app = express();

const si = maths.simpleInterest(10000, 10, 5);
const ci = maths.compoundInterest(10000, 10, 5);

console.log("Simple Interest =", si);
console.log("Compound Amount =", ci.toFixed(2));

app.get("/", (req, res) => {
    res.send(
        "Simple Interest = " + si +
        "<br>Compound Amount = " + ci.toFixed(2)
    );
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/simpleInterest", (req, res) => {

    const { principal, rate, years } = req.query;

    const si = maths.simpleInterest(
        Number(principal),
        Number(rate),
        Number(years)
    );

    res.send("Simple Interest = " + si);

});

app.get("/compoundInterest", (req, res) => {
err
    const { principal, rate, years } = req.query;

    const ci = maths.compoundInterest(
        Number(principal),
        Number(rate),
        Number(years)
    );

    res.send("Compound Amount = " + ci.toFixed(2));

});