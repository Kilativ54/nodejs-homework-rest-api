require("dotenv").config();
const Jimp = require("jimp");

const isCorrectResizedImage = async (imagePath) =>
  new Promise((resolve) => {
    try {
      Jimp.read(imagePath, (error, image) => {
        if (error) {
          resolve(false);
        } else {
          image.resize(250, 250).write(imagePath);
          resolve(true);
        }
      });
    } catch (error) {
      resolve(false);
    }
  });

module.exports = isCorrectResizedImage;
