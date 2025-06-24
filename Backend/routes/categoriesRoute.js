import { Router } from "express";
import categoriesController from "../controllers/categoriesController.js";
import bodyParther from "body-parser";
const cr=Router()
cr.use(bodyParther.json())
cr.get('/',categoriesController.getAll)
cr.post('/',categoriesController.add)
cr.put('/:id',categoriesController.update)
cr.delete('/:id',categoriesController.delete)
export default cr;



