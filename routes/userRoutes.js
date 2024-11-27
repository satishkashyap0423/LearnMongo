const express = require('express');
const register = require('../controllers/authController');
const authMiddleware  = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.authMiddleware, register.register);
module.exports = router;