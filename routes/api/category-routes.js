const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const category = await Category.findAll({
    // be sure to include its associated Products
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    },
  });
  res.json(category);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const category = await Category.findAll({
    where: {
      id: req.params.id,
    },
    // be sure to include its associated Products
    attributes: ['id', 'category_name'],
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    },
  });
  res.json(category);
});

router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create({
    category_name: req.body.category_name,
  });
  res.json(category);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
