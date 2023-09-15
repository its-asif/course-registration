import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Courses from './components/Courses'

function App() {
  

  return (
    <div>
      <div className='m-10 '>
        <Header></Header>
        <main>
          <Courses></Courses>
        </main>
        
      </div>
    </div>
  )
}

export default App
