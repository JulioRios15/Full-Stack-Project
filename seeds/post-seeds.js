const { Post } = require('../models');

const postData = [
    {
        title: "Wallie",
        image_src: "images/Skateboarding/alex-perez-LlwHorAMpFo-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "50-50 Bowl",
        image_src: "images/Skateboarding/ash-edmonds-oqyoL_G6ZHA-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Beach Bowl",
        image_src: "images/Skateboarding/bart-dunweg-ZICn6npvp6U-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Daniel Lincoln Skate",
        image_src: "images/Skateboarding/daniel-lincoln-OT87LknF3zc-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Mini Ramp",
        image_src: "images/Skateboarding/jan-kopriva-3yaPHboMrBg-unsplash.jpg",
        user_id: 1,
        category_id: 1
    },
    {
        title: "Surfer",
        image_src: "images/Surfing/asaf-r-7jSkK3DLmnM-unsplash.jpg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Body Surfer Barrel",
        image_src: "images/Surfing/drew-farwell-1k1e9-cQ3D4-unsplash.jpg",
        user_id: 2,
        category_id: 2
    },
    {
        title: "Surfer Barrel",
        image_src: "images/Surfing/jeremy-bishop-pikyGuAmwpM-unsplash.jpg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Air",
        image_src: "images/Surfing/mathieu-chirico-sFSZuKI2CvY-unsplash.jpg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Thomas Ashlock Big Wave Barrel",
        image_src: "images/Surfing/thomas-ashlock-7G5dkthFyxA-unsplash.jpg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Andrew Popov Fire",
        image_src: "images/BMX/alexander-popov-LbLS9mQspW4-unsplash.jpg",
        user_id: 2,
        category_id: 3
    },
    {
        title: "Jan Kopriva",
        image_src: "images/BMX/jan-kopriva-sQ1ZfaaXKvI-unsplash.jpg",
        user_id: 2,
        category_id: 3
    },
    {
        title: "Andrey Shatalin",
        image_src: "images/Motocross/andrey-shatalin-jwe7ASyC2mM-unsplash.jpg",
        user_id: 2,
        category_id: 4
    },
    {
        title: "Giuseppe",
        image_src: "images/Motocross/giuseppe-patriarchi-HZpWQdUCqVI-unsplash.jpg",
        user_id: 1,
        category_id: 4
    },
    {
        title: "Felipe Insane Air",
        image_src: "images/Snowboarding/felipe-giacometti-sawa7hivsRs-unsplash.jpg",
        user_id: 1,
        category_id: 5
    },
    {
        title: "Snow",
        image_src: "images/Snowboarding/alesia-kazantceva-9-dHYri9BOE-unsplash.jpg",
        user_id: 2,
        category_id: 5
    },


]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;