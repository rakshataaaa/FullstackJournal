
const fs = require("fs");

console.log("Start");

console.log("1");

// Asynchronous file reading
fs.readFile("data.txt", "utf8", (err, data) => {

    if (err) {
        console.log("Error:", err.message);
        return;
    }

    console.log("Async data:", data);

});

console.log("2");
console.log("3");
console.log("4");

// Synchronous file reading
try {

    const data = fs.readFileSync("data2.txt", "utf8");

    console.log("Sync data:", data);

} catch (err) {

    console.log("Error:", err.message);

}

console.log("5");
console.log("End");
