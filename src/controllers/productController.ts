import { Request, Response } from 'express';
import Product from '../models/productSchema';


export default class ProductController {
    createProduct = async (req: Request, res: Response) => {
        try {
            await Product.create(req.body);
            res.status(200).json({ message: "Produto criado" });
        } catch (error) {
            res.status(400).json(error.menssage)
        }
    }
    getAllProducts = async (req: Request, res: Response) => {
        try {
            const response = await Product.find();
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json({ message: "Falha ao buscar produtos" })
        }
    }
    getSpecificProduct = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const response = await Product.findById(id);
            return res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar produto' })
        }
    }
    updateProduct = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const product = await Product.findById(id);
            if (!product) {
                res.status(400).json({ message: 'Erro ao encontrar produto!' });
            }
            await product?.updateOne(req.body);
            res.status(200).json({ message: 'Produto atualizado com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar produto!' });
        }
    }
    deleteProduct = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await Product.findByIdAndDelete(id);
            res.status(200).json({ message: 'Produto deletado com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar produto!' });
        }
    }
}



