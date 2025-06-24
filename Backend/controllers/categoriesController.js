import categoriesSchema from "../schema/categoriesSchema.js"
export default {
  getAll: (req, res) => {
    categoriesSchema.find()
      .then((list) => {
        res.status(200).send(list)
      })
      .catch((err) => {
        res.status(404).send(err.message)
      })
  },
  add: (req, res) => {
    const c = new categoriesSchema(req.body)
    c.save()
      .then((c) => {
        res.status(200).send(c)
      })
      .catch((err) => {
        res.status(404).send(err.message)
      })
  },
  update: (req, res) => {
    categoriesSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((c) =>
        res.status(200).send(c))
      .catch((err) => {
        res.status(404).send(err.message)
      })
  },
  delete: (req, res) => {
    categoriesSchema.findByIdAndDelete(req.params.id)
      .then(() => res.status(200).send(true))
      .catch(() => res.status(404).send(false))
  }
}