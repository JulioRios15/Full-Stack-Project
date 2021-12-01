const router = require('express').Router();
const {Category, Post, User, UserCategory} = require('../models');
const {Op} = require('sequelize');

// Render dashboard page
router.get('/', async (req, res) => {

    try {
        const categoryData = await Category.findAll();
        const userCategoryData = await UserCategory.findAll({where: {user_id: req.session.user_id}});
        const userCategoryIdsArr = userCategoryData.map((item) => item.category_id);
        const postData = await Post.findAll({
            where: {
                category_id: {
                    [Op.in]: userCategoryIdsArr
                }
            },
            include: [{model: User}, {model: Category}]
        });

        const category = categoryData.map((item) => item.get({plain: true}));
        const post = postData.map((item) => item.get({plain: true}));

        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            category: category,
            post: post
        });
        
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;