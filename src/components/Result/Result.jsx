import styles from './Result.module.scss';
import logo from '../../assets/images/results/finish.png';
import Button from '../UI/Button/Button.jsx';
import { useState } from 'react';
import Loader from '../UI/Loader/Loader.jsx';

const Result = ({ setActive, questions, score, setResultsActive }) => {
  const [loading, setLoading] = useState(true);

  const moveHome = () => {
    setActive(prevState => ({
      ...prevState,
      result: false,
      home: true
    }));
  };

  const tryAgain = () => {
    setActive(prevState => ({
      ...prevState,
      result: false,
      game: true
    }));
  };

  return (
    <div className={styles.result}>
      {loading && (
        <div className={styles.image}>
          <Loader />
        </div>
      )}
      {
        <img
          style={{ display: loading ? 'none' : 'block' }}
          src={logo.toString()}
          onLoad={() => setLoading(false)}
          alt="result"
          width="150"
          height="150"
        />
      }
      <h2>
        Правильных ответов: {score} из {questions.length}
      </h2>
      <div className={styles.buttons}>
        <Button className={styles.btn} purpose="main" onClick={moveHome}>
          Главная
        </Button>
        <Button className={styles.btn} purpose="info" onClick={() => setResultsActive(true)}>
          Мои ответы
        </Button>
        <Button className={styles.btn} purpose="success" onClick={tryAgain}>
          Еще раз
        </Button>
      </div>
    </div>
  );
};

export default Result;
