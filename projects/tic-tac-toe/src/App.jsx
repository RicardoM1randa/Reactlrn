// Code: Tic tac toe game

import { useState } from "react"

const TURNS = {
  X: 'X',
  O: 'O'
}


// Square component for the game
// receives children, isSelected for showing turn

const Square  = ({ children, isSelected, updateBoard, index }) => {
  // 
  const className = isSelected ? 'square is-selected' : 'square'
  // function to handle click in the square component
  const handleClick = () => {
    updateBoard(index)
  }
  // printing the square component
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {

  // Board state, initial state is an array of 9 nulls
  const [board,setBoard] = useState(Array(9).fill(null))
  
  // Turn state, initial state is X
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    // updating the board with the current turn in the index
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // manage the turn and update the board
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)



  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game"> 
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            ) 
          }
          )
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}> 
        {TURNS.X} 
        </Square>
        <Square isSelected={turn === TURNS.O}> 
        {TURNS.O} 
        </Square>
      </section>
    </main>
  )
}

export default App
