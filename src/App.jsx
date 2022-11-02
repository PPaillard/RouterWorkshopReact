import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Content from './pages/Content'
import Footer from './components/Footer'

function App() {
  return (<>
    <Header />
    <Content />
    <Footer />
  </>)
}

export default App
