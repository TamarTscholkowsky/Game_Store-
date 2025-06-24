import { Router } from "express";
import gamesControllers from "../controllers/gamesControllers.js";
import bodyp from 'body-parser'
const gr=Router()
gr.use(bodyp.json())
gr.get('/',gamesControllers.getAll)
gr.get('/:id',gamesControllers.getById)
gr.get('/byCategory/:cid',gamesControllers.getByCategoryId)
gr.post('/',gamesControllers.add)
gr.put('/:id',gamesControllers.update)
gr.delete('/:id',gamesControllers.delete)

export default gr;