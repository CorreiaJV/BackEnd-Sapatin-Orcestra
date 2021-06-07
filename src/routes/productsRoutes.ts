import { Router } from 'express';
import ProductController from '../controllers/productController';

const productRoutes = Router();

const productController = new ProductController;

productRoutes.post('/',(req,res)=>{
  productController.createProduct(req,res);

});

productRoutes.get('/',(req,res)=>{
    productController.getAllProducts(req,res);  
  });

  productRoutes.get('/:id',(req,res)=>{
    productController.getSpecificProduct(req,res);  
  });

  productRoutes.patch('/:id',(req,res)=>{
    productController.updateProduct(req,res);  
  });

  productRoutes.delete('/:id',(req,res)=>{
    productController.deleteProduct(req,res);  
  });

export default productRoutes;