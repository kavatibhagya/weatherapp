import React from 'react';
import './App.scss';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header></Header>
    <main>
      <Container></Container>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
