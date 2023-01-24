import styles from './Answers.module.scss';
import QuestionList from '../UI/Question/QuestionList.jsx';

const Answers = ({ questions, userAnswers }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {questions?.map((question, idx) => (
          <li key={question.title}>
            <h3 className={styles.title}>{question?.title}</h3>
            <QuestionList question={question} userAnswer={userAnswers[idx]} />
            <hr className={styles.line} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;
