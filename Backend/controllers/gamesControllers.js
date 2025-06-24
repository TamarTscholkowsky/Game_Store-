import gamesSchema from "../schema/gamesSchema.js";
export default{
  getAll:(req,res)=>{
    gamesSchema.find()
    .then((list)=>{
      res.status(200).send(list)
    })
    .catch((err)=>{
      res.status(404).send(err.message)
    })
  },
  getById:(req,res)=>{
gamesSchema.findById(req.params.id)
.then((g)=>res.status(200).send(g))
.catch((err)=>res.status(404).send(err.message))
  } ,
getByCategoryId:(req,res)=>{
gamesSchema.find({code_category:req.params.cid})
.then((g)=>res.status(200).send(g))
.catch((err)=>res.status(404).send(err.message))
  },
  add:(req,res)=>{
    const g=new gamesSchema(req.body)
    g.save()
    .then((g)=>res.status(200).send(g))
    .catch((err)=>res.status(404).send(err.message))
  },
  update:(req,res)=>{
  gamesSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((g)=>
          res.status(200).send(g))
        .catch((err)=>res.status(404).send(err.message))
  },
  delete:(req,res)=>{
    gamesSchema.findByIdAndDelete(req.params.id)
    .then(()=>res.status(200).send(true))
    .catch(()=>res.status(404).send(false))
  }
}
