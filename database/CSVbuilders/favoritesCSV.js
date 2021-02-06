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

//  for each user id, generate a random amount between 5 and 20 of random integers between 1 and 10000000 but not including integers already used by that user
  const alreadyLiked = [];
  const onlyReturnNewId = () => {
    const newId = getRandomInt(1, 10000000);
    if (alreadyLiked.includes(newId)) {
      return onlyReturnNewId()
   }
    alreadyLiked.push(newId);
    return newId
  }


for (let j = 0; j < (getRandomInt(5, 20)); j++) {
  const listing_id = onlyReturnNewId();
  const data = `${i + 1},${listing_id},\n`;
  if (i === 0) {
    writer.write(data, encoding, callback);
  } else {
    // see if we should continue, or wait
    // don't pass the callback, because we're not done yet.
    ok = writer.write(data, encoding);
  }
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

writeTenMillionFavorites(writeFavorites, 'utf-8', () => {
  writeFavorites.end();
});