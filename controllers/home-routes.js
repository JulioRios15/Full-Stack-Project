const router = require('express').Router();

// Render home page
router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;