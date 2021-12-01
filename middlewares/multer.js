const multer = require('multer');

//Setup Multer for file storage
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/images/${req.body.category_name}`);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

 const upload = multer({storage: fileStorageEngine});
 
 module.exports = upload;