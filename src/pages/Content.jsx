import React from 'react'
import {Routes, Route} from "react-router-dom"
import ArticleDetails from '../components/ArticleDetails'
import Articles from './Articles'
import Css from './Css'
import Home from './Home'
import Html from './Html'
import Js from './Js'

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/js" element={<Js />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </main>
  )
}

export default Content