const express = require('express');
const router = express.Router();
const Student = require('../model/student');

// ➡️ Create a new student
router.post('/create', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create a new student instance
    const newStudent = new Student({
      name,
      email,
      password
    });

    await newStudent.save();
    res.status(201).json({ message: 'Student created successfully', student: newStudent });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating student', error: error.message });
  }
});

module.exports = router;
