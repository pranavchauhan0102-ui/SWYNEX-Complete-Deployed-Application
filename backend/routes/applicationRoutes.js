const express = require('express');
const router = express.Router();

const {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication
} = require('../controllers/applicationController');

// CREATE
router.post('/', createApplication);

// GET ALL (with filters and pagination)
router.get('/', getApplications);

// GET BY ID
router.get('/:id', getApplicationById);

// UPDATE
router.put('/:id', updateApplication);

// DELETE
router.delete('/:id', deleteApplication);

module.exports = router;