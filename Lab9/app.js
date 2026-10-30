
const sequelize = require("./database");

sequelize.authenticate()
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((err) => {
        console.log("Database connection failed:", err.message);
    });
