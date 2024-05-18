import { Router } from "express"
import { ProdutoValidator, ProdutoIDValidator, ProdutoUpdateValidator } from "../validators/produto.validator.js"
import ProdutoController from "../controllers/produto.controller.js"

const router = Router()

router.get('/', ProdutoController.index)
router.get('/:id', ProdutoIDValidator, ProdutoController.show)
router.post('/', ProdutoValidator, ProdutoController.create)
router.put('/:id', ProdutoUpdateValidator, ProdutoController.update)
router.delete('/:id', ProdutoIDValidator, ProdutoController.delete)

export default router