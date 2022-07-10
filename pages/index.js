import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const options = ['Rock', 'Paper', 'Scissors'];

  const router = useRouter();

  let [userChoice, setUserChoice] = useState('None');
  let [computerChoice, setComputerChoice] = useState('None');
  let [comPoints, setComPoints] = useState(0);
  let [playerPoints, setPlayerPoints] = useState(0);
  let [done, setDone] = useState(false);
  let [clicked, setClicked] = useState(false);

  useEffect((x = userChoice, y = computerChoice) => {
    if (x == 'Rock' && y == 'Scissors') {
      setPlayerPoints(playerPoints + 1);
    } else if (x == 'Scissors' && y == 'Rock') {
      setComPoints(comPoints + 1);
    } else if (x == 'Paper' && y == 'Rock') {
      setPlayerPoints(playerPoints + 1);
    } else if (x == 'Rock' && y == 'Paper') {
      setComPoints(comPoints + 1);
    } else if (x == 'Paper' && y == 'Scissors') {
      setComPoints(comPoints + 1);
    } else if (x == 'Scissors' && y == 'Paper') {
      setPlayerPoints(playerPoints + 1);
    } else {
      setComPoints(comPoints);
      setPlayerPoints(playerPoints);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userChoice, computerChoice]);


  function playing() {
    setClicked(true);
    if (clicked) {
      setComputerChoice(options[Math.floor(Math.random() * options.length)]);
    }
  }

  const choiceWork = (inp) => {
    setUserChoice(inp);
    playing();
  }

  return (
    <>
      <div className={styles.wholeBody}>
        <button onClick={done ? null : () => {
          playing();
          setDone(true);
        }}
          className={done ? styles.btnDisabled : styles.playButton}>
          Let&apos;s Play
        </button>
        {/* This is the user choice portion */}
        <div className={styles.userChoice}>
          <p>Your Choice:</p>
          <div className={done ? styles.btns : styles.btnsDisabled}>
            <button id='Rock' onClick={!done ? null : () => { choiceWork('Rock') }}>
              Rock</button>
            <button id='Paper' onClick={!done ? null : () => { choiceWork('Paper') }}>
              Paper</button>
            <button id='Scissors'
              onClick={!done ? null : () => { choiceWork('Scissors') }}>
              Scissors</button>
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
        <button onClick={() => { router.reload(window.location.pathname) }}
          className={styles.resBtn}>
          Restart
        </button>
      </div>
    </>
  );
}