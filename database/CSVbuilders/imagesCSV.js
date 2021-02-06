const faker = require('faker');
const fs = require('fs');

const getRandomInt = (min, max) => {
    return faker.random.number({
      min,
      max,
    });
}

const possibleTags = ['For Sale', 'For Rent', 'New', 'New Construction', 'Off Market'];
const tagIndex = getRandomInt(0, possibleTags.length);

const getImageUrls = (num) => {
  // Set houseNum to num % number of house images available
  let houseNum = num % 21;
  if (houseNum === 0) {
    houseNum = 1;
  }
  const house = `https://homeimgs.s3-us-west-1.amazonaws.com/truliaHomes/${houseNum}.1.jpg`;

  return house;
};

const generateRandomLengthPhotoArray = (num) => {
  let photoArray = [];
  for (let i = 0; i < (getRandomInt(15, 45)); i++) {
    photoArray.push(getImageUrls(num));
  }
  return photoArray;
}

const writeImages = fs.createWriteStream('images.csv');
writeImages.write('listing_id,image\n', 'utf8');

const writeTenMillionImages = (writer, encoding, callback) => {
  let i = 10000000;

  const write = () => {
    let ok = true;

    while (i > 0 && ok) {
      i -= 1;
      if (i % 200000 === 0) {
        console.log(`${i} records written`);
      }


      // need to give each listing some images

      const img = getImageUrls(i);

      const data = `${listing_id},${image},\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    }

    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  };
  write();
};

writeTenMillionImages(writeImages, 'utf-8', () => {
  writeImages.end();
});