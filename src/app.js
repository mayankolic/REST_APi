const express = require('express');
require("./db/conn");

const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
// app.post('/students', (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body)
//   user.save().then(() => {
//     res.status(201).send(user);
//   }).catch(err => {
//     res.status(400).send(err);
//   });
//   // res.send("Hello madarchid!! kya madarchod");
// });

app.post("/students", async(req, res) => {

  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
})


app.get('/students', async(req, res) => {
  try {
    const sdata = await Student.find();
    res.send(sdata);
  } catch (e) {
    res.send(e);
  }

})

app.get('/students/:id', async(req, res) => {
  try {
    const _id = req.params.id;
    const studentdata = await Student.findById({ _id: _id })
    if (!studentdata) {
      res.status(404).send();
    } else {
      res.send(studentdata);
    }
  } catch (e) {
    res.send(e);
  }
})

app.get('/students/:name', async(req, res) => {
  try {
    const name = req;
    conosle.log(name);
    const sdat = await Student.find({ name: name });
    if (!sdat)
      res.status(404).send();
    else
      res.status(200).send();
  } catch (e) {
    res.send(e);
  }
})

app.delete('/students/:id', async(req, res) => {
  try {
    console.log(req.params);
    const _id = req.params.id;
    const deletestude = await Student.findByIdAndDelete({ _id: _id });
    if (!deletestude)
      res.status(404).send();
    else
      res.status(200).send(deletestude);
  } catch (e) {
    res.send(e);
  }

})

app.patch('/students/:id', async(req, res) => {
  try {
    const _id = req.params.id;
    const updatestu = await Student.findByIdAndUpdate({ _id: _id }, req.body, { new: true });
    if (!updatestu) {
      res.status(404).send();
    } else res.status(200).send(updatestu);
  } catch (e) {
    res.send(e);
  }

})



app.listen(port, () => {
  console.log("listening on !!");
})