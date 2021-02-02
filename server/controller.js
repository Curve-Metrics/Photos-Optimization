const dbModel = require('../database/model.js');

module.exports = {
  getHomeInfo: ({ params }, res) => {
    const { homeId } = params;
    dbModel.getHomeInfo(homeId)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(403).send(err);
      });
  },

  toggleHomeSaved: ({ params, body }, res) => {
    const { homeId } = params;
    const { saved } = body;
    dbModel.toggleHomeSaved(homeId, saved)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(403).send(err);
      });
  },

  /* ------------------- The Following are for dev purposes only ----------------- */
  getAllHomes: (req, res) => {
    dbModel.getAllHomes()
      .then((homes) => {
        res.status(200).send(homes);
      })
      .catch((err) => {
        res.status(403).send(err);
      });
  },

  deleteAll: (req, res) => {
    dbModel.deleteAll()
      .then(() => {
        res.status(204).send('');
      })
      .catch((err) => {
        res.status(403).send(err);
      });
  },
};
