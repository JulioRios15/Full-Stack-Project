const router = require('express').Router();
const { User } = require('../../models');

//Create a new user
router.post('/', (req, res) => {
    //Destroy data from request
    const {username, email, password} = req.body;

    //Attempt to create a new user
    User.create({
        username,
        email,
        password,
    })
    .then(dbUserData => {
        //Save user data in session
        req.session.save(() => {
            console.log("Session", req.session);
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            //response ok status with json user data
            res.status(201).json(dbUserData);
        });
        
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    })
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

module.exports = router;