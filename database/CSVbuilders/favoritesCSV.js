const fs = require('fs');
const db = require('../index.js');

const writeFavorites = fs.createWriteStream('favorites.csv');
writeFavorites.write('user_id,listing_id\n', 'utf8');

const writeTenMillionFavorites = (writer, encoding, callback) => {
  let i = 10000000;

  const write = async () => {
    let ok = true;

    while (i > 0 && ok) {
      i -= 1;

      if (i % 100000 === 0) {
        console.log(`${i} records written`);
      }

//  need to pull user ids and listing ids from database to connect favorites

    }

    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  };
  write();
};

writeTenMillionFavorites(writeFavorites, 'utf-8', () => {
  writeFavorites.end();
});