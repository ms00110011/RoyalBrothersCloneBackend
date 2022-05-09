const http = require("http");
const app = require("./Routes/app");
const connectToDB = require("./DBConnection/MongoDB");

const port = 9008;

http.createServer(app).listen(port, () => {
  new connectToDB();
  console.log(`Server is running on port ${port}`);
});
