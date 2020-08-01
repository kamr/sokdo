import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  const active = props.activated;

  let color = '#edddd4';
  if (props.owner == 0) color = '#197278'
  if (props.owner == 1) color = '#c44536'

  let hoverColor = '#CFA48C'
  if (props.owner == 0) hoverColor = '#283d3b'
  if (props.owner == 1) hoverColor = '#772e25'

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      onClick={(e) => {
        props.clicker();
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? hoverColor : color} />
    </mesh>
  )
}


export class TicTacToeBoard extends React.Component {
  onClick(id) {
    this.props.moves.clickCell(id);
  }

  render() {
    let winner = '';
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
    };

    let boxes = [];
    for (let i = 0; i < 3; i++) {
      // let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        // console.log(this.props.G.cells[id])
        boxes.push(
          // <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
          //   {this.props.G.cells[id]}
          // </td>
          <Box key={id}
            position={[i * 2 - 1.5, j * 2 - 1.5, 0]}
            clicker={() => this.onClick(id)}
            activated={!!this.props.G.cells[id]}
            owner={this.props.G.cells[id]}
          />
        );
      }
    }

    // console.log(boxes)

    return (
      <div className="canvas-box">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          {/* <Box position={[1.2, 0, 0]} /> */}
          {boxes}
        </Canvas>
        {winner}
          {/* <table id="board">
            <tbody>{tbody}</tbody>
          </table>
          {winner} */}
      </div>
    );
  }
}
