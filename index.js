const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "dude is cool" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);
});