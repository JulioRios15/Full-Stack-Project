const { UserCategory } = require('../models');

const userCategoryData = [
    {
        user_id: 1,
        category_id: 1 
    },
    {
        user_id: 1,
        category_id: 2 
    },
    {
        user_id: 1,
        category_id: 5 
    },
    {
        user_id: 2,
        category_id: 1 
    },
    {
        user_id: 2,
        category_id: 2 
    },
];

const seedUserCategory = () => UserCategory.bulkCreate(userCategoryData);

module.exports = seedUserCategory;
