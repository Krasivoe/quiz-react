import styles from './Result.module.scss';
import logoGood from '../../assets/images/results/cool.png';
import logoTry from '../../assets/images/results/try.png';
import logoBad from '../../assets/images/results/cry.png';
import Button from '../UI/Button/Button.jsx';

const Result = () => {
  return (
    <div className={styles.result}>
      <img src={logoTry} alt="result" width="150" height="150" />
      <h2>Правильных ответов 3 из 10</h2>
      <div className={styles.buttons}>
        <Button className={styles.btn} purpose="main">
          Главная
        </Button>
        <Button className={styles.btn} purpose="info">
          Резульаты
        </Button>
        <Button className={styles.btn} purpose="success">
          Еще раз
        </Button>
      </div>
    </div>
  );
};

export default Result;
