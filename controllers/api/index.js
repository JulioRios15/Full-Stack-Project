
//TODO:
//Define all api routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./post-routes');

//TODO:
//Use All api Routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;