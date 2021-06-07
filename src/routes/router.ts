import { Router } from 'express';
import userRoutes from './userRoutes';
import productsRoutes from './productsRoutes';

const router = Router();

router.use('/user', userRoutes);
router.use('/product',productsRoutes)

export default router;