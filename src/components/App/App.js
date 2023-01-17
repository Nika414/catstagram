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
    // console.log(location.search.slice(6));
    // const result = axios.post(`https://unsplash.com/oauth/token?${new URLSearchParams({
    //   client_id: 'Hs54jT5JHcdQtGRyC1hU1LPY5w40_AeH8D9Tnm3_mk0',
    //   client_secret: 'WygNa1ltWMjnPW3XEFAPmWDGLG6iRQrzXv7Aqi8Db4A',
    //   redirect_uri: 'http://localhost:3000/feed/',
    //   code: 'KeL1S_i9CaHuiJS9jC7Yr_3A8iduhzT50giPSuzSX5o',
    //   grant_type: 'authorization_code',
    // }).toString()}`);
    // console.log(result);
    // axios.get('https://api.unsplash.com/me', {
    //   headers: {
    //     Authorization: 'Bearer I6KUzrW0zeLeM4SAMZi3-IEfPFj7uRLDn8z5S1Zjn9Y',
    //   },
    // });
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* {location.pathname === '/' && window.location.replace(`https://unsplash.com/oauth/authorize?${new URLSearchParams({
            client_id: 'Hs54jT5JHcdQtGRyC1hU1LPY5w40_AeH8D9Tnm3_mk0',
            redirect_uri: 'http://localhost:3000/feed/',
            response_type: 'code',
            scope: 'public read_user write_user read_photos write_likes',
          }).toString()}`)} */}
    </div>
  );
}

export default App;
