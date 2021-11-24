//TODO:
//import all models

const sequelize = require('../config/connection');

async function seedAllModels(){

    await sequelize.sync({ force: true });

    console.log('No models to seed');

    process.exit(0);
}

seedAllModels();