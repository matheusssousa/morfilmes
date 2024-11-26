import { BrowserRouter } from 'react-router';
import MyRoute from './routes/myRoute';
import './styles/index.css';
import Nav from './components/nav';
import { useEffect } from 'react';
import Message from './components/message';
import Header from './components/header';

export default function App() {

  useEffect(() => {
    const firstacess = localStorage.getItem('showMessage');

    if (!firstacess) {
      localStorage.setItem('showMessage', 'true');
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='page-body'>
        <Nav />
        <Header />
        <Message />
        <MyRoute />
      </div>
    </BrowserRouter>
  )
}
