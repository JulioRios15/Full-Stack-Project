const router = require('express').Router();
const {Category} = require('../models')

// Render dashboard page
router.get('/', (req, res) => {

    Category.findAll({
        attributes: ["id", "category_name"]
    })
    .then(categoriesData => {
        const category = categoriesData.map(category => category.get({ plain: true }));
        console.log(category);
        
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            category: category
        });
    })


});

module.exports = router;