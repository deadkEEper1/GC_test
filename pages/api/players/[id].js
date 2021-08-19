const players = require('../../../fakeDb');

export default async (req, res) => {
  const { id: playerId } = req.query;


  res.status(200).send(players.find(({ id }) => id == playerId));
};
