import { Router} from 'express'
import customarsControllers from '../controllers/customarsControllers.js'
import bodyp from 'body-parser'
const cs=Router()
cs.use(bodyp.json())
cs.post('/',customarsControllers.add);
cs.get('/:name/:psw',customarsControllers.getbyNameAndPsw);

export default cs;