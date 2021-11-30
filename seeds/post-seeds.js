const { Post } = require('../models');

const postData = [
    {
        title: "Skateboarding",
        post_url: "google.com",
        user_id: 1,
    },


]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;