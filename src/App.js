import { useState } from 'react'

import './styles.css'

import Title from './title'
import Sentence from './nameLength'
import SentenceReversed from './nameReversed'


export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <Sentence name={name}/>
      <SentenceReversed name={name}/>
    </div>
  )
}
