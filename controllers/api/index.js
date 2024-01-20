const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/locations', locationRoutes);

module.exports = router;
