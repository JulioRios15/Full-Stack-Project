const { User } = require('../models');

const usersData = [
    {
        username: "JulioRios15",
        email: "julio.rios@gmail.com",
        password: "123456"
    },
    {
        username: "BradEvans",
        email: "brad.evans@gmail.com",
        password: "123456"
    },
]

const seedUsers = () => User.bulkCreate(usersData, {individualHooks: true});

module.exports = seedUsers;