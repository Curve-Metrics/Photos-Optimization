const { Homes } = require('./index.js');

module.exports = {
  getHomeInfo: (homeId) => (
    Homes.find({ id: homeId })
  ),

  toggleHomeSaved: (homeId, saved) => (
    Homes.updateOne({ _id: homeId }, { saved })
  ),

  getAllHomes: () => (
    Homes.find()
      .then((homes) => (
        homes
      ))
      .catch((err) => {
        console.log(err);
      })
  ),

  deleteAll: () => (
    Homes.remove()
      .then((result) => (
        result
      ))
      .catch((err) => {
        console.log(err);
      })
  ),
};
