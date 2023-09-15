import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Courses from './components/Courses'
import SelectedCourses from './components/SelectedCourses'

function App() {
  const [ courses, setCourses] = useState([]);
  const [ creditSum, setCredit ] = useState(0);
  const [ sum, setSum ] = useState(0);

  const selected = x => {
    const {title, credit, price} = x;
    // console.log(title);
    if(!courses.includes(x.title)){
      const temporary = [...courses, title];

      if( creditSum + credit  <= 20) {
        setCredit(creditSum + credit);
        setCourses(temporary);
        setSum(sum + price);
      }
      else  alert('negative bruhhh');
    }
    else alert('toast bruh')

  }
  

  return (
    <div>
      <div className='m-10 '>
        <Header></Header>
        <main className='flex'>
          <Courses selected= {selected}></Courses>
          <SelectedCourses courses={courses} creditSum={creditSum} sum={sum} ></SelectedCourses>
        </main>
        
      </div>
    </div>
  )
}

export default App
