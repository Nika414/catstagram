import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCards } from '../store/cardsSlice';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards({}));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
