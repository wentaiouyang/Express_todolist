const express = require("express")

const app = express()
app.use(express.json())

let post_id = 1
let tasks = []

app.post("/tasks", (req, res) => {
  const { description, done } = req.body
  const id = post_id++
  tasks.push({ id, description, done })
  res.status(201).json({ id, description, done })
})

app.get("/tasks", (req, res) => {
  res.status(201).json(tasks)
})

app.get("/tasks/:id", (req, res) => {
  let task = tasks.filter((item) => {
    return item.id === parseInt(req.params.id)
  })
  res.status(201).json(task)
})

app.put("/tasks/:id", (req, res) => {
  const { description, done } = req.body
  tasks.map((item) => {
    if (item.id === parseInt(req.params.id)) {
      item.description = description
      item.done = done
    }
  })
  let task = tasks.filter((item) => {
    return item.id === parseInt(req.params.id)
  })
  res.status(201).json(task)
})

app.delete("/tasks/:id", (req, res) => {
  tasks.map((item, index) => {
    if (item.id === parseInt(req.params.id)) {
      console.log(index)
      tasks.splice(index, 1)
    }
  })
  res.status(201).json(tasks)
})

app.listen(3000, () => {
  console.log("listen in port 3000")
})
