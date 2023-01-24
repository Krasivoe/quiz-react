import styles from './Result.module.scss';
import logoGood from '../../assets/images/results/cool.png';
import logoTry from '../../assets/images/results/try.png';
import logoBad from '../../assets/images/results/cry.png';
import Button from '../UI/Button/Button.jsx';
import { useMemo, useState } from 'react';
import Loader from '../UI/Loader/Loader.jsx';

const Result = ({ setActive, questions, score }) => {
  const [logo, setLogo] = useState(logoBad);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    if (score > 1) setLogo(logoTry);
    if (score === 5) setLogo(logoGood);
  }, [score]);

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
        <Button className={styles.btn} purpose="info">
          Результаты
        </Button>
        <Button className={styles.btn} purpose="success" onClick={tryAgain}>
          Еще раз
        </Button>
      </div>
    </div>
  );
};

export default Result;
