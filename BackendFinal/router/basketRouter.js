import express from 'express';
import {
    getBasket,
    postBasket,
    deleteBasket,
    updateBasket
} from '../controllers/basketController.js';

const router = express.Router();

// /basket route-ları
router.route('/')
    .get(getBasket)
    .post(postBasket);

router.route('/:id')
    .delete(deleteBasket)
    .put(updateBasket); // Quantity dəyişmək üçün PUT istəyi
// PUT və ya PATCH route
router.put("/basket/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const updated = await basketModel.findByIdAndUpdate(id, { quantity }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Quantity update failed", error: err.message });
  }
});

export default router;
