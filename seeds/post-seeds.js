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
        title: "Backside 5-0",
        image_src: "images/Skateboarding/jan-kopriva-AgzsGO7uvDo-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Huge Ollie over boards",
        image_src: "images/Skateboarding/jan-kopriva-E-GPodRpgQI-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Backside Crail",
        image_src: "images/Skateboarding/jan-kopriva-Ep_T4Aepor8-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Tweeked Melon",
        image_src: "images/Skateboarding/jan-kopriva-oK2OoXCpOB4-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Kickflip on a bank",
        image_src: "images/Skateboarding/jan-kopriva-UMOrfrVby6M-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Gnarly indy grab",
        image_src: "images/Skateboarding/jan-kopriva-zE529JrJKQ8-unsplash.jpg",
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
        title: "Huge Air!!",
        image_src: "images/Skateboarding/jorge-gonzalez-DrJUPcrWEgQ-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "360 flip",
        image_src: "images/Skateboarding/leio-mclaren-9WlqSF_9elM-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Benihanna",
        image_src: "images/Skateboarding/travis-yewell-43ScFMWx2xY-unsplash.jpg",
        user_id: 2,
        category_id: 1
    },
    {
        title: "Frontside air",
        image_src: "images/Skateboarding/ruben-gutierrez-uTj1lul9_Pk-unsplash.jpg",
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
        title: "Nice day with lots of surfing",
        image_src: "images/Surfing/bruno-emmanuelle-4rvc6HWITpY-unsplash.jpg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Nice day at the beach",
        image_src: "images/Surfing/carnaby-gilany-pnwOWXp5YEE-unsplash.jpg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Sick time in the barrel!",
        image_src: "images/Surfing/drew-farwell-1k1e9-cQ3D4-unsplash.jpg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Look at that sunset",
        image_src: "images/Surfing/febiyan-hfrKpacEucE-unsplash.jpg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Shredding",
        image_src: "images/Surfing/jeremy-bishop-cmt3JdS5MC4-unsplash.jpgg",
        user_id: 1,
        category_id: 2
    },
    {
        title: "Barrelled out",
        image_src: "images/Surfing/jeremy-bishop-pikyGuAmwpM-unsplash.jpg",
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
        title: "Day at the park",
        image_src: "images/BMX/anton-shakirov-L2BDokMgoIE-unsplash.jpg",
        user_id: 2,
        category_id: 3
    },
    {
        title: "Bunny Hopping!!",
        image_src: "images/BMX/axel-bimashanda-Gf5LO0bQhjo-unsplash.jpg",
        user_id: 2,
        category_id: 3
    },
    {
        title: "Watch out"!!
        image_src: "images/BMX/fachy-marin-0HLGDvxVh8E-unsplash.jpg",
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