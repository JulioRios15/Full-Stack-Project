const seedUsers = require('./user-seeds');
const sequelize = require('../config/connection');
const seedCategories = require('./category-seeds');


async function seedAllModels(){

    await sequelize.sync({ force: true });
    console.log("Connected to MySQL");

    await seedUsers();
    console.log("Users Seeded");

    await seedCategories();
    console.log("Categories Seeded");

    process.exit(0);
}

seedAllModels();