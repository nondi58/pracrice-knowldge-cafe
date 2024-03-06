
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);
  const handleMarkedTime=time=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
  }
  const handleBookMarks=(blog)=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }


  return (
    
    <>
      <Header></Header>
      <div className='flex justify-between mt-5 pt-6 w-9/12'>
      <Blogs handleBookMarks={handleBookMarks}
       handleMarkedTime={handleMarkedTime}
      
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}
      readingTime={readingTime}
     
      ></Bookmarks>
      </div>
      
      
      
    </>
  )
}

export default App
