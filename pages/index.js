import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

// make a start play button

export default function Home() {

  const options = ['Rock', 'Paper', 'Scissors'];

  const router = useRouter();

  let [userChoice, setUserChoice] = useState('None');
  let [computerChoice, setComputerChoice] = useState('None');
  let [comPoints, setComPoints] = useState(0);
  let [playerPoints, setPlayerPoints] = useState(0);
  let [done, setDone] = useState(false);
  let [clicked, setClicked] = useState(false);


  // x is player and y is computer
  function winLogic(x, y) {
    switch (true) {
      case x == 'Rock' && y == 'Scissors':
        setPlayerPoints(playerPoints + 1);
        break;
      case x == 'Scissors' && y == 'Rock':
        setComPoints(comPoints + 1);
        break;
      case x == 'Paper' && y == 'Rock':
        setPlayerPoints(playerPoints + 1);
        break;
      case x == 'Rock' && y == 'Paper':
        setComPoints(comPoints + 1);
        break;
      case x == 'Paper' && y == 'Scissors':
        setComPoints(comPoints + 1);
        break;
      case x == 'Scissors' && y == 'Paper':
        setPlayerPoints(playerPoints + 1);
        break;
      case x == 'Paper' && y == 'Paper':
        setComPoints(comPoints);
        setPlayerPoints(playerPoints);
        break;
      case x == 'Scissors' && y == 'Scissors':
        setComPoints(comPoints);
        setPlayerPoints(playerPoints);
        break;
      case x == 'Rock' && y == 'Rock':
        setComPoints(comPoints);
        setPlayerPoints(playerPoints);
        break;
      default:
        null;
        break;
    }
  }

  function playing() {
    setClicked(true);
    if (clicked) {
      winLogic(userChoice, computerChoice);
      setComputerChoice(options[Math.floor(Math.random() * options.length)]);
    }
  }

  function play() {
    playing();
    setDone(true);
  }

  function checkRes() {
    if (comPoints > playerPoints) {
      alert('Computer Wins! 😅');
    } else if (comPoints < playerPoints) {
      alert('You Win! 😄');
    } else {
      alert('Draw!!!');
    }
    router.reload(window.location.pathname);
  }

  const rock = () => {
    setUserChoice('Rock');
    playing();
  }
  const paper = () => {
    setUserChoice('Paper');
    playing();
  }
  const scissors = () => {
    setUserChoice('Scissors');
    playing();
  }

  return (
    <>
      <div className={styles.wholeBody}>
        <button onClick={done ? () => { } : play}
          className={done ? styles.btnDisabled : styles.playButton}>
          Let&apos;s Play
        </button>
        {/* This is the user choice portion */}
        <div className={styles.userChoice}>
          <p>Your Choice:</p>
          <div className={done ? styles.btns : styles.btnsDisabled}>
            <button id='Rock' onClick={!done ? () => { } : rock}>Rock</button>
            <button id='Paper' onClick={!done ? () => { } : paper}>Paper</button>
            <button id='Scissors' onClick={!done ? () => { } : scissors}>Scissors</button>
          </div>
        </div>
        {/* This is the user choice portion */}
        <div className={styles.lowerPart}>
          {/* This is the score board display */}
          <div className={styles.scoreBoard}>
            <table className={styles.score}>
              <tbody>
                <tr>
                  <th className={styles.computerScore}>Computer&apos;s Score</th>
                  <th className={styles.playerScore}>Your Score</th>
                </tr>
                <tr>
                  <td id={styles.computerScoreRes}>{comPoints}</td>
                  <td id={styles.playerScoreRes}>{playerPoints}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* This is the score board display */}
          {/* This is the Choice display option section */}
          <div className={styles.theChoice}>
            <table className={styles.choice}>
              <tbody>
                <tr>
                  <th className={styles.computerChoice}>Computer&apos;s Choice</th>
                  <th className={styles.playerChoice}>Your Choice</th>
                </tr>
                <tr>
                  <td id={styles.computerChoiceRes}>{!undefined ? computerChoice : 'undefined'}</td>
                  <td id={styles.playerChoiceRes}>{!undefined ? userChoice : 'undefined'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* This is the Choice display option section */}
        </div>
        <button onClick={checkRes}
          className={styles.resBtn}>
          Check Results
        </button>
      </div>
    </>
  );
}
