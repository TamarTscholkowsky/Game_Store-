import { Router} from "express";
import buyControllers from "../controllers/buyControllers.js";
import bodyparther from 'body-parser'
const b=Router()
b.use(bodyparther.json())
b.post('/',buyControllers.addBuy);
b.get('/:id',buyControllers.getById);
export default b;
