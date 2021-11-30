const router = require('express').Router();
const verifyAuth = require('../middlewares/verifyAuth');

const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api/');

router.use('/', homeRoutes);
router.use('/dashboard', verifyAuth, dashboardRoutes)
router.use('/api', apiRoutes);

module.exports = router;