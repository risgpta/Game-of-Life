import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const LEN = 50;
  const WIDE = 100;
  const array = () => {
    let cells = new Array(LEN);
    for (let i = 0; i < LEN; i++) {
      cells[i] = new Array(WIDE).fill(0);
    }
    return cells;
  };

  const [colored, setColored] = useState(array());
  const [loop, setLoop] = useState(false);
  useEffect(() => {
    let time;
    if (loop) {
      time = setInterval(() => {
        startLife();
      }, 150);
    }
    return () => clearInterval(time);
  }, [loop, colored]);

  const handleColor = (i, j) => {
    let temp_colored = new Array(LEN);
    for (let i = 0; i < LEN; i++) {
      temp_colored[i] = new Array(WIDE).fill(0);
    }

    for (let i = 0; i < colored.length; i++) {
      for (let j = 0; j < colored[i].length; j++)
        temp_colored[i][j] = colored[i][j];
    }
    temp_colored[i][j] = 1 - temp_colored[i][j];
    setColored(temp_colored);
  };

  const checkBorder = (i, j) => {
    if (i >= 0 && i < LEN && j >= 0 && j < WIDE) {
      return true;
    }
    return false;
  };

  const getLiveNeighbourCells = (temp, i, j) => {
    let c = 0;
    for (let k = i - 1; k <= i + 1; k++) {
      for (let l = j - 1; l <= j + 1; l++) {
        if (k === i && l === j) {
          continue;
        }
        if (checkBorder(k, l) && temp[k][l] === 1) {
          c++;
        }
      }
    }
    return c;
  };

  const startLife = () => {
    let temp = new Array(LEN);
    for (let i = 0; i < LEN; i++) {
      temp[i] = new Array(WIDE).fill(0);
    }

    let temp2 = new Array(LEN);
    for (let i = 0; i < LEN; i++) {
      temp2[i] = new Array(WIDE).fill(0);
    }

    for (let i = 0; i < colored.length; i++) {
      for (let j = 0; j < colored[i].length; j++) temp[i][j] = colored[i][j];
    }

    for (let i = 0; i < colored.length; i++) {
      for (let j = 0; j < colored[i].length; j++) {
        let liveCells = getLiveNeighbourCells(temp, i, j);
        temp2[i][j] = temp[i][j];
        if ((liveCells < 2 || liveCells > 3) && temp[i][j] === 1) {
          temp2[i][j] = 0;
        }
        if (liveCells === 3 && temp[i][j] === 0) {
          temp2[i][j] = 1;
        }
      }
    }
    setColored(temp2);
  };

  const populate = () => {
    let temp = new Array(LEN);
    for (let i = 0; i < LEN; i++) {
      temp[i] = new Array(WIDE).fill(0);
    }

    for (let i = 0; i < colored.length; i++) {
      for (let j = 0; j < colored[i].length; j++) {
        let life = Math.floor(Math.random() * 100);
        temp[i][j] = life > 90 ? 1 : 0;
      }
    }
    setColored(temp);
    setLoop(false);
  };

  const clearPopulation = () => {
    let temp = new Array(LEN);
    for (let i = 0; i < LEN; i++) {
      temp[i] = new Array(WIDE).fill(0);
    }

    for (let i = 0; i < colored.length; i++) {
      for (let j = 0; j < colored[i].length; j++) {
        temp[i][j] = 0;
      }
    }
    setColored(temp);
    setLoop(false);
  };

  return (
    <div>
      <button onClick={() => startLife()}>Next generation!</button>
      <button onClick={() => populate()}>Generate random Population</button>
      <button onClick={() => setLoop(!loop)}>
        {!loop ? "Loop over next generation!" : "Stop Loop"}
      </button>
      <button onClick={() => clearPopulation()}>Remove all population</button>
      <div className="App">
        <div>
          {colored.map((c, i) => (
            <div key={i} style={{ display: "flex" }}>
              {c.map((ck, j) => (
                <div
                  className="cell"
                  key={j}
                  style={
                    colored[i][j] === 1 ? { backgroundColor: "#ffffff" } : {}
                  }
                  onClick={() => handleColor(i, j)}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
