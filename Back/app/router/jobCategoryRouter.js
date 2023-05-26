const express = require('express'); 

const jobCategoryController = require('../controllers/jobCategoryController');

const router = express.Router();

router.get('/', jobCategoryController.getAllCategories);
router.get('/:id(\\d+)', jobCategoryController.getOneCategory);
router.post('/', jobCategoryController.createCategory)
router.patch('/:id(\\d+)', jobCategoryController.updateCategory);
router.delete('/:id(\\d+)', jobCategoryController.deleteCategory);

module.exports = router; 