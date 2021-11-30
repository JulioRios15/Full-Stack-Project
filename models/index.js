// import all models
const User = require("./User");
const Category = require('./Category');
const UserCategory = require('./UserCategory');

//TODO: 
// Create Associations

User.belongsToMany(Category, {
through: UserCategory,
foreignKey: 'user_id'
});

Category.belongsToMany(User, {
through: UserCategory,
foreignKey: 'category_id'
});

module.exports = { 
    User, 
    Category,
    UserCategory
};