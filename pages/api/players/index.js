const players = require('../../../fakeDb');

export default async (req, res) => {
  res.status(200).send(players);
};
