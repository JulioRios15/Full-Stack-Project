const seedUsers = require('./user-seeds');
const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');
const seedPosts = require('./post-seeds');
const seedUserCategory = require('./user-category-seeds');


async function seedAllModels(){

    await sequelize.sync({ force: true });
    console.log("Connected to MySQL");

    await seedUsers();
    console.log("Users Seeded");

    await seedCategories();
    console.log("Categories Seeded");

    await seedPosts();
    console.log("Posts Seeded");
    await seedUserCategory()
    console.log("User Category Seeded");

    process.exit(0);
}

seedAllModels();