import styles from './Question.module.scss';
import QuestionItem from './QuestionItem.jsx';

const QuestionList = ({ question, userAnswer }) => {
  return (
    <ul className={styles.list}>
      {question?.answers.map((item, idx) => (
        <QuestionItem key={item} answer={userAnswer} correct={question.correct} index={idx}>
          {item}
        </QuestionItem>
      ))}
    </ul>
  );
};

export default QuestionList;
