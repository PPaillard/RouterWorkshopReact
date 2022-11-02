import React from 'react'
import { useParams } from 'react-router-dom'

const ArticleDetails = () => {

const {id} = useParams()

  return (
    <div>ArticleDetails {id}</div>
  )
}

export default ArticleDetails