import styles from './Question.module.scss';

const QuestionItem = ({ answer, correct, index, children, ...props }) => {
  if (correct === index) {
    return (
      <li className={[styles.answer, styles.correct].join(' ')} {...props}>
        {children}
      </li>
    );
  }
  if (answer === index) {
    return (
      <li className={[styles.answer, styles.bad].join(' ')} {...props}>
        {children}
      </li>
    );
  }
  return (
    <li className={styles.answer} {...props}>
      {children}
    </li>
  );
};

export default QuestionItem;
