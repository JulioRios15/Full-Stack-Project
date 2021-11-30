const router = require('express').Router();

//TODO:
//Define all api routes
const userRoutes = require('./userRoutes');

//TODO:
//Use All api Routes
router.use('/users', userRoutes);

module.exports = router;