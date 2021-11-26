const router = require('express').Router();

// Render dashboard page
router.get('/', (req, res) => {
    res.render('dashboard', {
        loggedIn: true
    });
});

module.exports = router;