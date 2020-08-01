// import React from 'react';
import { Lobby } from 'boardgame.io/react';
import { TicTacToeBoard } from './board';
import { TicTacToe } from './game';
// import Anime, {anime} from 'react-anime';
import './GameLobby.css';
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

const PORT = process.env.PORT || 8000;

const server = `http://${window.location.hostname}:${PORT}`;
console.log(`Kamran: front end assuming server is at ${server}`)
const importedGames = [{ game: TicTacToe, board: TicTacToeBoard }];

// let myAnimation = anime({
//   targets: '.circle',
//   direction: 'alternate',
//   easing: 'easeOutElastic',
//   loop: true,
//   duration: 1000,
//   direction: 'alternate',
//   translateX: '13rem',
//   scale: [.75, .9]
// })


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


// targets: 'circle',
// // Properties
// translateX: 100,
// borderRadius: 50,
// // Property Parameters
// duration: 2000,
// easing: 'linear',
// // Animation Parameters
// direction: 'alternate'

    // <Anime easing="easeOutElastic"
    //        loop={true}
    //        duration={1000}
    //        direction="alternate"
    //        delay={(el, index) => index * 240}
    //        translateX='13rem'
    //        scale={[.75, .9]}>

export default () => (
  <div>
    <h1>Lobby</h1>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
    <Lobby gameServer={server} lobbyServer={server} gameComponents={importedGames} />
  </div>
);