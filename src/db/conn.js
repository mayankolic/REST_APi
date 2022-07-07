const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Student-api").then(() => {
  console.log("connect success");
}).catch(err => console.log("connect error", err));