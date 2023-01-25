import styles from './Game.module.scss';
import { useEffect, useState } from 'react';
import Loader from '../UI/Loader/Loader.jsx';

const Game = ({ setActive, questions, error, isLoading, setScore, setUserAnswers }) => {
  const [step, setStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (questions) {
      setCurrentQuestion(questions[step]);
      setProgress(Math.round((step / (questions.length - 1)) * 100));
    }
    if (step === 5) {
      setActive(prevState => ({
        ...prevState,
        game: false,
        result: true
      }));
    }
  }, [questions, step, setActive]);

  const chooseAnswer = answer => {
    if (answer === currentQuestion.correct) {
      setScore(score => score + 1);
    }
    setUserAnswers(prev => [...prev, answer]);
    setStep(step => step + 1);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1 style={{ textAlign: 'center' }}>{`Ошибка загрузки! ${error}`}</h1>;
  }

  return (
    <div className={styles.game}>
      <div className={styles.progress}>
        <div style={{ width: `${progress}%` }} className={styles.line} />
      </div>

      <h2>{currentQuestion?.title}</h2>

      <ul className={styles.list}>
        {currentQuestion?.answers.map((item, idx) => (
          <li className={styles.answer} onClick={() => chooseAnswer(idx)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
