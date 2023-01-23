import styles from './Home.module.scss';
import Button from '../UI/Button/Button.jsx';
import Select from '../UI/Select/Select.jsx';
import { useEffect, useMemo } from 'react';

const Home = ({ theme, setTheme, setNeedFetch, onStart }) => {
  const options = useMemo(() => [{ value: 'React' }, { value: 'JavaScript' }], []);

  useEffect(() => {
    if (!theme) {
      setTheme(options[0].value);
      return;
    }
    setTheme(theme);
  }, [theme, setTheme, options]);

  const onChangeSelect = selected => {
    setNeedFetch(true);
    setTheme(selected);
  };

  return (
    <div className={styles.home}>
      <h2>Привет!</h2>
      <p className={styles.text}>
        Мы предлагаем вам викторины, которые состоят из 5 вопросов. Выбирайте тему и жмите кнопку
        &quot;Начать&quot;. Желаем удачи!
      </p>
      <div className={styles.selectArea}>
        <Select value={theme} onChange={selected => onChangeSelect(selected)} options={options} />
      </div>
      <Button className={styles.btn} purpose="success" onClick={onStart}>
        Начать
      </Button>
    </div>
  );
};

export default Home;
