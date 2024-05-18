import { validationResult } from "express-validator"
import Produto from "../models/produto.model.js"

export default class ProdutoController {
    static async index(req, res) {
        const produtos = await Produto.findMany()
        res.json(produtos)
    }

    static async create(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }
        const produtos = await Produto.create({
            data: req.body
        })
        res.json(produtos)
    }

    static async show(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }

        const produto = await Produto.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if(!produto) {
            return res.status(404).json({ message: "Produto Não encontrado!"})
        }

        res.json(produto)
    }

    static async update(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }

        const produto = await Produtos.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if(!produto) {
            return res.status(404).json({ message: "Produto Não encontrado!"})
        }
        const updatedProduto = await Produto.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        
        res.json(updatedProduto)
    }

    static async delete(req, res) {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({erros: erros.array()})
        }
        
        const produto = await Produtos.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if(!produto) {
            return res.status(404).json({ message: "Produto Não encontrado!"})
        }

        await Produto.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })

        res.status(200).json({ message: 'Produto deletado com sucesso!' })
    }
}