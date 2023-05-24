const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|JPG|JPEG|PNG)$/)) {
      return cb(null, false, (req.fileValidationError = true));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload };
