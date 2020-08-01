import { Lobby } from 'boardgame.io/react';
import { TicTacToeBoard } from './games/tictactoeBoard';
import { TicTacToe } from './games/tictactoeGame';
import React from 'react'

const ENV = process.env.NODE_ENV

// console.log(process.env)

let server = `https://${window.location.hostname}` // Prod
if (ENV === 'development') {
  console.log("DEV MODE")
  server = `http://${window.location.hostname}:8000`  // Local
}

console.log(`Kamran: front end assuming server is at ${server}`)
const importedGames = [{ game: TicTacToe, board: TicTacToeBoard }];

export default () => (
  <div className="lobby">
    <Lobby gameServer={server} lobbyServer={server} gameComponents={importedGames} />
  </div>
);