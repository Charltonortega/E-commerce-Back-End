// Import necessary dependencies and models
const router = require("express").Router();
const { Category, Product } = require("../../models");

// GET /api/categories - Fetch all categories with associated products
router.get("/", async (req, res) => {
  try {
    // Find all categories and include their associated products
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/categories/:id - Fetch a single category by ID with associated products
router.get("/:id", async (req, res) => {
  try {
    // Find a category by its ID and include its associated products
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // Check if the category exists
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST /api/categories - Create a new category
router.post("/", async (req, res) => {
  try {
    // Create a new category using the request body
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT /api/categories/:id - Update a category by its ID
router.put("/:id", async (req, res) => {
  try {
    // Update a category's data using the request body
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // Check if the category was updated
    if (!updatedCategory[0]) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.status(200).json({ message: "Category updated" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE /api/categories/:id - Delete a category by its ID
router.delete("/:id", async (req, res) => {
  try {
    // Delete a category by its ID
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Check if the category was deleted
    if (!deletedCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
