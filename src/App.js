import { useState, useEffect } from "react";
import Box from "./Box";

import "./App.css";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [winner, setWinner] = useState({
    player: null,
    game: null,
  });

  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  useEffect(() => {
    checkWinner();
    checkTie();
    if (player === "O") {
      setPlayer("X");
    } else if (player === "X") {
      setPlayer("O");
    }
  }, [board]);

  function displayValue(index) {
    setBoard(
      board.map((value, indx) => {
        if (indx === index && value === "") {
          return player;
        } else if (index === indx && value !== "") {
          if (player === "O") {
            setPlayer("X");
          } else if (player === "X") {
            setPlayer("O");
          }
        }
        return value;
      })
    );
  }

  function checkWinner() {
    patterns.forEach((pattern) => {
      const firstValue = board[pattern[0]];
      if (firstValue == "") {
        return;
      }

      let foundWinningPattern = true;

      pattern.forEach((index) => {
        if (board[index] != firstValue) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setWinner({ player: player, game: "won" });
        resetBoard();
        alert(`Player ${player} won`);
      }
    });
  }

  function resetBoard() {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
    setWinner({
      player: null,
      game: null,
    });
  }

  function checkTie(){
    let tie=true;
    board.forEach((value)=>{
      if(value==""){
        tie=false;
      }
    })
    if(tie){
      setWinner({player:"none" , won:"tie"});
      alert("Game tie");
      resetBoard();
    }
  }
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Box index={board[0]} displayValue={() => displayValue(0)} />
          <Box index={board[1]} displayValue={() => displayValue(1)} />
          <Box index={board[2]} displayValue={() => displayValue(2)} />
        </div>
        <div className="row">
          <Box index={board[3]} displayValue={() => displayValue(3)} />
          <Box index={board[4]} displayValue={() => displayValue(4)} />
          <Box index={board[5]} displayValue={() => displayValue(5)} />
        </div>
        <div className="row">
          <Box index={board[6]} displayValue={() => displayValue(6)} />
          <Box index={board[7]} displayValue={() => displayValue(7)} />
          <Box index={board[8]} displayValue={() => displayValue(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
