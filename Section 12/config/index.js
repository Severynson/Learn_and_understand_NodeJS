const configValues = require("./config.json");
const { username, pwd } = configValues;

module.exports = {
  getDbConnectionString: () =>
    `mongodb+srv://${username}:${pwd}@nodetodosample.raejanb.mongodb.net/?retryWrites=true&w=majority`,
};
