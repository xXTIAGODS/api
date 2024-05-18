import { body, param } from "express-validator"

export const ProdutoValidator = [
    body('nome').isString().withMessage('Nome é Obrigatório'),
    body('preco').isString().withMessage('Preço é Obrigatório'),
    body('descricao').isString().withMessage('Descrição é Obrigatório')
]

export const ProdutoUpdateValidator = [
    param('id').isInt().withMessage('ID é Obrigatório'),
    body('nome').isString().withMessage('Nome é Obrigatório'),
    body('preco').isString().withMessage('Preço é Obrigatório'),
    body('descricao').isString().withMessage('Descrição é Obrigatório')
]

export const ProdutoIDValidator = [
    param('id').isInt().withMessage('ID é Obrigatório'),
]

