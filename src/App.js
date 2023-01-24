import './styles/App.scss';
import Game from './components/Game/Game.jsx';
import Result from './components/Result/Result.jsx';
import Home from './components/Home/Home.jsx';
import { useEffect, useState } from 'react';
import { useFetching } from './hooks/useFetching.js';
import { shuffleQuestions } from './utils/ShuffleQuestions.js';
import Modal from './components/UI/Modal/Modal.jsx';
import Answers from './components/Answers/Answers.jsx';

const App = () => {
  const [activeContent, setActiveContent] = useState({
    home: true,
    game: false,
    result: false
  });
  const [theme, setTheme] = useState('');
  const [data, setData] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [fetching, isLoading, error] = useFetching(async () => {
    const url = theme === 'React' ? 'data/ReactQuestions.json' : 'data/JsQuestions.json';
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  });
  const [needFetch, setNeedFetch] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [resultsActive, setResultsActive] = useState(false);

  useEffect(() => {
    setNeedFetch(true);
  }, []);

  useEffect(() => {
    if (data && activeContent.game) {
      setQuestions(shuffleQuestions([...data]).slice(0, 5));
      setScore(0);
      setUserAnswers([]);
    }
  }, [data, activeContent]);

  const startGame = () => {
    if (needFetch) {
      void fetching();
      setNeedFetch(false);
    }
    setActiveContent({ ...activeContent, home: false, game: true });
  };

  return (
    <div className="App">
      {activeContent.home && (
        <Home theme={theme} setTheme={setTheme} setNeedFetch={setNeedFetch} onStart={startGame} />
      )}

      {activeContent.game && (
        <Game
          setActive={setActiveContent}
          questions={questions}
          isLoading={isLoading}
          error={error}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
        />
      )}

      {activeContent.result && (
        <Result
          setActive={setActiveContent}
          questions={questions}
          score={score}
          setResultsActive={setResultsActive}
        />
      )}

      <Modal active={resultsActive} setActive={setResultsActive}>
        <Answers questions={questions} userAnswers={userAnswers} />
      </Modal>
    </div>
  );
};

export default App;
