import customersSchema  from "../schema/customersSchema.js";
export default{
    add:(req,res)=>{
        const cs=new customersSchema(req.body)
        cs.save()
        .then((cs)=>{
            res.status(200).send(cs)
        })
        .catch((err)=>res.status(404).send(err.message))
    },
    //בדיקה האם לקוח קיים 
    getbyNameAndPsw: (req,res)=>{
        customersSchema.findOne({name:req.params.name,psw:req.params.psw})
        .then((cs)=>{
            if(cs)
                res.status(200).send(cs)
            else
                res.status(200).send(false)
        })
        .catch((err)=>res.status(404).send(err.message))
    }
}