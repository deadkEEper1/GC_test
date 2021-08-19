const players = require('../../fakeDb');

function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export default async (req, res) => {
  const { playerId } = req.query;
  const io = req.app.get('io');


  const currentPlayer = players.find(({ id }) => id == playerId);

  const randomOutput = getRandomArbitrary(-11, 10);
  currentPlayer.balance += randomOutput;

  io.emit('message', { ...currentPlayer })

  res.status(200).send(randomOutput);
};
