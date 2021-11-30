// import all models
const User = require("./User");
const Category = require('./Category');
const Post = require("./Post");

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


module.exports = { 
    User, 
    Category,
    Post
};

