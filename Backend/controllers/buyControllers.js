import buySchema from "../schema/buySchema.js";
export default{
  addBuy:(req,res)=>{
    const b=new buySchema(req.body)
    b.save()
    .then((b)=>{res.status(200).send(b)})
    .catch((err)=>{res.status(404).send(err.message)})
  },
 
  getById:(req,res)=>{
    buySchema.find({idCust:req.params.id})
    .then((b)=>res.status(200).send(b))
    .catch((err)=>res.status(404).send(err.message))
  }
  // getByCategoryId:(req,res)=>{
  // gamesSchema.find({code_category:req.params.cid})
  // .then((g)=>res.status(200).send(g))
  // .catch((err)=>res.status(404).send(err.message))
  //   },
}