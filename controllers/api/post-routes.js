const router = require('express').Router();
const { Post, User, Category, UserCategory } = require('../../models');
const {Op} = require('sequelize')
const upload = require('../../middlewares/multer');

// get posts
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        attributes: [
            'id', 
            'image_src', 
            'title', 
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes:['username']
            },
            {
                model: Category,
                attributes: ["category_name"]
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get All posts or get all post from user selected categories
router.get('/category', async (req, res) => {
    try {
        const userId = req.session.user_id;
        const UserCategoriesData = await UserCategory.findAll({where: {
            user_id: userId
        }});

        const categoriesIdsArr = UserCategoriesData.map((item) => item.category_id);
        const allPosts = await Post.findAll({
            include: [
                {model: User},
                {model: Category}
            ]
        });

        const userCategoryPosts = await Post.findAll({
            where: {
                category_id: categoriesIdsArr
            }, 
            include: [
                {model: User}, 
                {model: Category}
            ]
        });

        const posts = (categoriesId.length)? userCategoryPosts : allPosts;
        return res.json(posts);
        
    } catch (error) {
        return res.status(500).json({error})
    }
});

router.post('/', upload.single('file'), async (req, res) => {
    const {title, category_name} = req.body;
    const fileName = req.file.filename;
    const image_src = `images/${category_name}/${fileName}`;
    const userId = req.session.user_id;

    try {
        const category = await Category.findOne({where: {category_name}});

        const newPost = await Post.create({
            title,
            image_src,
            user_id: userId,
            category_id: category.id
        });

        return res.status(200).json(newPost);
        
    } catch (error) {
        return res.status(500).json(error)
    }

})

module.exports = router;