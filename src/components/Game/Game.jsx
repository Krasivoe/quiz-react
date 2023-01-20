import styles from './Game.module.scss';

const Game = () => {
  return (
    <div className={[styles.game, styles.last1, styles.last2].join(' ')}>
      <div className={styles.progress}>
        <div style={{ width: '50%' }} className={styles.line} />
      </div>
      <h1>Что такое useState?</h1>
      <ul className={styles.list}>
        <li className={styles.answer}>Это функция для хранения данных компонента</li>
        <li className={styles.answer}>Это глобальный стейт</li>
        <li className={styles.answer}>Это когда ты никому не нужен</li>
      </ul>
    </div>
  );
};

export default Game;
