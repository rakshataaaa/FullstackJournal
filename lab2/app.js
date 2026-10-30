
const express = require("express");
const fs = require("fs");

const app = express();

const { SimpleInterest, CompoundInterest } = require("./math");

app.get("/SimpleInterest", (req, res) => {

    const { Amount, ROI, Time } = req.query;

    let SI = SimpleInterest(
        Number(Amount),
        Number(ROI),
        Number(Time)
    );

    fs.appendFile("data.txt", SI + "\n", (err) => {

        if (err) {
            console.log("Error writing file", err);
            return res.send("File writing failed");
        }

        console.log("Data written successfully");

        fs.readFile("data.txt", "utf-8", (err, data) => {

            if (err) {
                console.log("Error reading file", err);
                return res.send("File reading failed");
            }

            console.log("File Data:");
            console.log(data);

            res.send("Simple Interest = " + SI);
        });

    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
