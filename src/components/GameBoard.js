import React, {useState} from "react";
import "../assets/styles/GameBoard.css";

const GameBoard = () => {
    const [gameArray, setGameArray] = useState(new Array(9).fill(null));
    const [playerChar, setPlayerChar] = useState("X");

    function handleClick(index) {
        const newArray = [...gameArray];
        newArray[index] = playerChar;
        setGameArray(newArray);
        setPlayerChar(playerChar === "X" ? "O" : "X");
    };

    return <div className="container">
        <h1 className="heading">Tic-Tac-Toe</h1>
        <p className="subheading">Can you beat your opponent?</p>
        <div className="board">
            {
                gameArray.map((data, index) => (
                    <div key={index} className="cell" onClick={() => handleClick(index)}>
                        {data}
                    </div>
                ))
            }
        </div>
    </div>;
};

export default GameBoard;