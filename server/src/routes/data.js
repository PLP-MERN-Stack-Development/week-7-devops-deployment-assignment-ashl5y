const express = require('express');
const {
  getData,
  createData,
  updateData,
  deleteData
} = require('../controllers/data');

const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(getData)
  .post(createData);

router
  .route('/:id')
  .put(updateData)
  .delete(deleteData);

module.exports = router;