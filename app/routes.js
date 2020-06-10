const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('./middlewares/auth');

// Controllers
const AuthController = require('./controllers/AuthController');
const RecordController = require('./controllers/RecordController');

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));

// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);

// Records
router.get('/api/records', RecordController.index);
router.get('/api/records/:slug', RecordController.show);

module.exports = router;