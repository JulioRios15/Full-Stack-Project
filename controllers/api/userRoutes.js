const router = require('express').Router();
const { User, UserCategory, Category } = require('../../models');

//Create a new user
router.post('/', async(req, res) => {
    //Destroy data from request
    const {username, email, password, categories} = req.body;

    try {
        //Attempt to create a new user
        const userData = await User.create({username, email, password});

        // if we have categories selected
        if(categories && categories.length){
            const categoriesData = await Category.findAll({where: {category_name: categories}});
            
            const userCategoryDataArr = categoriesData.map((category) => {
                return {
                    user_id: userData.id,
                    category_id: category.id
                }
            });

            UserCategory.bulkCreate(userCategoryDataArr);
        }
       
        //Save user data in session
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            //response ok status with json user data
            res.status(201).json(userData);
        });
            
    } catch (error) {
        res.status(500).json({
            message: "unable to create user",
            error
        });
    }
});

//Login Route
router.post('/login', (req, res) => {
    const {email, password} = req.body;

    User.findOne({
        where: {
            email: email
        }
    })
    .then(matchUser => {
        if(!matchUser){
            res.status(404).json({message: "No user found with email address"});
            return
        }

        const isPasswordValid = matchUser.checkPassword(password);

        if(!isPasswordValid) {
            res.status(500).json({message: "Invalid Credentials"});
            return
        }

        req.session.save((err) => {
            if(err){
                res.json({message: "Session Error", sess: req.session, err});
                
            } else {
                req.session.user_id = matchUser.id;
                req.session.username = matchUser.username;
                req.session.loggedIn = true;
    
                res.json({ user: matchUser, message: 'You are now logged in!' });
            }
        })
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

//Logout Route
router.post('/logout', (req, res) => {
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    User.findOne({
        attributes: ["id", "username", "email"],
        where: {
            id: id
        },
        include: [
            {
                model: Category,
            }
        ]
    })
    .then(userCategoryData => {
        res.status(200).json(userCategoryData);
    })
    .catch(error => {
        res.status(500).json(error);
    })

});

module.exports = router;