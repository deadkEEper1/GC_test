import React from 'react'
import {useEffect, useState} from "react";
import socket from "socket.io-client";

const playerIds = [
  1, 2
];

const fetchPlayerData = async (playerId) => {

  const playerDataResp = await fetch(`/api/players/${playerId}`)
  const playerData = await playerDataResp.json();

  return playerData;

}

export default function IndexPage({}) {
  const [playerId, setPlayerId] = useState(1);
  const [playerData, setPlayerData] = useState({});

  console.log('playerId\n', playerId);

  useEffect(() => {
    const io = socket('', {
      path: '/socket.io',
      transports: ['websocket'],
      secure: true,
    });

    io.on('message', (playerData) => {
      if (playerData.id === playerId) { // issue here, can't get the actual userId but always 1;
        setPlayerData(playerData);
      }
    })
  }, [playerId])

  const runSpin = async () => {
    const playerDataResp = await fetch(`/api/spin/?playerId=${playerId}`)
  }

  useEffect(async () => {
    const playerData = await fetchPlayerData(playerId);
    setPlayerData(playerData);

  }, [playerId]);

  return (<div>
    <select onClick={(e => {
      setPlayerId(e.target.value)
    })}>
      {playerIds.map(id => {
        return <option> {id}</option>
      })}
    </select>

    <p>Player data:</p>
    <ul>
      <li key={playerData.id}>Name: {playerData.name}</li>
      <li key={playerData.id}>Balance: {playerData.balance}</li>
    </ul>

    <button onClick={runSpin}>SPIN</button>
    <p>Spins history:</p>

  </div>)
}
