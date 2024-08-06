const app = require("./app.js");
const sequelize = require("./utils/connection.js");
require("./models");

const PORT = process.env.PORT || 8080;

const main = async () => {
  try {
    sequelize.sync();
    console.log("DB connected");
    app.listen(PORT);
    console.log(`👉 Server running on port ${PORT}`);
    console.log(`👉 Link http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

main();
