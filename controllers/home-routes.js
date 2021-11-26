const router = require('express').Router();

// Render home page
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;