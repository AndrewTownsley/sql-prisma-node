const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/products', async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { Category: true },
    });

    const Category = await prisma.category.findMany({
      include: { products: true },
    });

    res.json({products, Category});
  } catch (error) {
    next(error)
  }
})

router.get('/products/:id', async (req, res, next) => {
  res.send({message: 'Get single product by ID'});
})

router.post('/products', async (req, res, next) => {
  res.send({message: 'Create a new product'});
})

router.delete('/product/:id', async (req, res, next) => {
  res.send({message: 'Delete a product by ID'});
})

router.patch('/products/:id', async (req, res, next) => {
  res.send({message: 'Update a product by ID'});
})

// Route to get individual product

// Route to create new product

// Route to update product

// Route to delete product

module.exports = router;
