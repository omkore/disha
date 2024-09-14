const express = require('express');
const router = express.Router();

// Middleware to verify JWT token
const { verifyToken } = require('../middlewares/auth');

// POST: Add a new student
router.post('/students', verifyToken, async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
