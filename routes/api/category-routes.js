const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint   // find all categories, be sure to include its associated Products,
router.get('/', (req, res) => {

  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((data) => {
      res.json(data);
    });
});
  // find one category by its `id` value be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  });

  // create a new category
  router.post('/', (req, res) => {
    Category.create({ category_name: req.body.category_name })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  });

  // update a category by its `id` value
  router.put('/:id', (req, res) => {
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // delete a category by its `id` value
  router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  module.exports = router;
