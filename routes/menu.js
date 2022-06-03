import {Router} from 'express'
import {getAll, getOrder, addToOrder, changeFavourite, increase, decrease, removeFromOrder} from '../controllers/menu.js'

const router = Router()

router.get('/api/menu', getAll)
router.get('/api/order', getOrder)
router.post('/api/order/:id', addToOrder)
router.patch('/api/favour/:id', changeFavourite)
router.patch('/api/incr/:id', increase)
router.patch('/api/decr/:id', decrease)
router.delete('/api/order/:id', removeFromOrder)

export default router