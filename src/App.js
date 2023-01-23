import './styles/App.scss';
import Game from './components/Game/Game.jsx';
import Result from './components/Result/Result.jsx';
import Home from './components/Home/Home.jsx';
import { useEffect, useState } from 'react';
import { useFetching } from './hooks/useFetching.js';
import { shuffleQuestions } from "./utils/ShuffleQuestions.js";

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

  useEffect(() => {
    setNeedFetch(true);
  }, []);

  useEffect(() => {
    if (data && activeContent.game) {
      setQuestions(shuffleQuestions([...data]).slice(0, 5));
      setScore(0);
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
          active={activeContent}
          setActive={setActiveContent}
          questions={questions}
          isLoading={isLoading}
          error={error}
          setScore={setScore}
        />
      )}

      {activeContent.result && (
        <Result
          active={activeContent}
          setActive={setActiveContent}
          questions={questions}
          score={score}
        />
      )}
    </div>
  );
};

export default App;
