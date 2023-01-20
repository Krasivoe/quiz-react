import styles from './Home.module.scss';
import Button from '../UI/Button/Button.jsx';
import Select from '../UI/Select/Select.jsx';
import { useState } from 'react';

const Home = () => {
  const options = [{ value: 'React' }, { value: 'JavaScript' }];
  const [select, setSelect] = useState(options[0].value);

  return (
    <div className={styles.home}>
      <h2>Привет!</h2>
      <p className={styles.text}>
        Мы предлагаем вам викторины, которые состоят из 5 вопросов. Выбирайте тему и жмите кнопку
        &quot;Начать&quot;. Желаем удачи!
      </p>
      <div className={styles.selectArea}>
        <Select value={select} onChange={selected => setSelect(selected)} options={options} />
      </div>
      <Button className={styles.btn} purpose="success">
        Начать
      </Button>
    </div>
  );
};

export default Home;
