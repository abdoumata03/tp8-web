import { Router } from 'express'
import * as ItemController from '@/controllers/ItemController'

const ItemRoutes = Router()
const PassportRouter = Router()

ItemRoutes.get('/', ItemController.index)

ItemRoutes.get('/:id', ItemController.show)

ItemRoutes.post('/', ItemController.store)



ItemRoutes.post('/comptes', ItemController.storeCompte)

ItemRoutes.put('/:id', ItemController.update)

ItemRoutes.delete('/:id', ItemController.destroy)




PassportRouter.post('/', ItemController.storePassport)
PassportRouter.get('/', ItemController.getPassports)
PassportRouter.get('/join/:id', ItemController.join)


export { ItemRoutes, PassportRouter}
export default ItemRoutes
