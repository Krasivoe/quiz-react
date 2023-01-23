import styles from './Result.module.scss';
import logoGood from '../../assets/images/results/cool.png';
import logoTry from '../../assets/images/results/try.png';
import logoBad from '../../assets/images/results/cry.png';
import Button from '../UI/Button/Button.jsx';
import { useMemo, useState } from 'react';

const Result = ({ active, setActive, questions, score }) => {
  const [logo, setLogo] = useState(logoBad);

  useMemo(() => {
    if (score > 1) setLogo(logoTry);
    if (score === 5) setLogo(logoGood);
  }, [score]);

  const moveHome = () => {
    setActive({ ...active, result: false, home: true });
  };

  const moveGame = () => {
    setActive({ ...active, result: false, game: true });
  };

  return (
    <div className={styles.result}>
      <img src={logo.toString()} alt="result" width="150" height="150" />
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
        <Button className={styles.btn} purpose="success" onClick={moveGame}>
          Еще раз
        </Button>
      </div>
    </div>
  );
};

export default Result;
