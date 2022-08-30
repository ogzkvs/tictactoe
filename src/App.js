import './App.css';
import Box from './components/Box';
import React, { useRef, useState } from 'react'


const board = [[], [], []]

function App() {
  const [text, setText] = useState('X')
  const [winner, setWinner] = useState('')
  const [gameover, setgameOver] = useState(false)
  const ref = useRef(0)

  const changeChar = (row, col) => {
    if (!gameover) {
      setText(text => text === 'X' ? 'O' : 'X')
      board[row][col] = text
      let win = checkWinner()
      if (!win) {
        ref.current++
      }

      if (win) {
        setWinner(win + ' Kazandı..')
        setgameOver(true)
      }
      else {
        if (ref.current === 9) {
          setWinner('Berabere..')
          setgameOver(true)
        }
      }

    }

  }

  const checkWinner = () => {

    for (let i = 0; i < board.length; i++) {

      const row = board[i]

      if (row[0] === row[1] && row[1] === row[2] && row[0]) {

        return row[0]
      }
    }
    for (let i = 0; i < board.length; i++) {

      const col0 = board[0][i]
      const col1 = board[1][i]
      const col2 = board[2][i]

      if (col0 === col1 && col1 === col2 && col0) {
        return col0
      }
    }

    const right0 = board[0][0]
    const right1 = board[1][1]
    const right2 = board[2][2]

    if (right0 === right1 && right1 === right2 && right0) {
      return right0
    }

    const left0 = board[0][2]
    const left1 = board[1][1]
    const left2 = board[2][0]

    if (left0 === left1 && left1 === left2 && left0) {
      return left0
    }
    return false

  }

  return (
    <div id="App">
      <div id="winnerTxt">{winner}</div>
      <div className="row">
        <Box row={0} col={0} currentText={text} changeChar={changeChar} gameover={gameover} />
        <Box row={1} col={0} currentText={text} changeChar={changeChar} gameover={gameover} />
        <Box row={2} col={0} currentText={text} changeChar={changeChar} gameover={gameover} />
      </div>
      <div className="row">
        <Box row={0} col={1} currentText={text} changeChar={changeChar} gameover={gameover} />
        <Box row={1} col={1} currentText={text} changeChar={changeChar} gameover={gameover} />
        <Box row={2} col={1} currentText={text} changeChar={changeChar} gameover={gameover} />
      </div>
      <div className="row">
        <Box row={0} col={2} currentText={text} changeChar={changeChar} gameover={gameover} />
        <Box row={1} col={2} currentText={text} changeChar={changeChar} gameover={gameover} />
        <Box row={2} col={2} currentText={text} changeChar={changeChar} gameover={gameover} />
      </div>
    </div>
  );
}

export default App;
