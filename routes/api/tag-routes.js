const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const tag = await Tag.findAll({
    // be sure to include its associated Product data
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id'],
    },
  });
  res.json(tag);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const tag = await Tag.findOne({
    // be sure to include its associated Product data
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id'],
    },
  });
  res.json(tag);
});

router.post('/', async (req, res) => {
  // create a new tag
  const tag = await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.json(tag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(tag);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tag = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(tag);
});

module.exports = router;
