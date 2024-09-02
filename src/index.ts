import express from 'express';
import { productsRouter } from '@/modules/products/routes';

const app = express();
const porta = 3333;

app.use(express.json());

app.use('/products', productsRouter);

app.listen(porta, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${porta}`);
});
