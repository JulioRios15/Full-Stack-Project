// import all models
const User = require("./User");
const Category = require('./Category');
const Post = require("./Post");
const UserCategory = require('./UserCategory');

//TODO: 
// Create Assosiations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
    foreignKey: 'user_id'
  });
// Category.belongsTo(User, {
//     foreignKey: 'user_id'
//  });
// User.hasMany(Category, {
//     foreignKey: 'user_id'
//  });




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
    Post,
    UserCategory
}
