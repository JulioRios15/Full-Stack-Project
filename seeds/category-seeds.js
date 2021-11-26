const { Category } = require('../models');

const categoriesData = [
    {
        category_name: "Skateboarding"
    },
    {
        category_name: "Surfing"
    },
    {
        category_name: "BMX"
    },
    {
        category_name: "Motocross"
    },
    {
        category_name: "Snowboarding"
    },

]

const seedCategories = () => Category.bulkCreate(categoriesData, {individualHooks: true});

module.exports = seedCategories;