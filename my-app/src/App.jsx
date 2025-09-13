import './App.css'
import Book from './Book.jsx'
import  Data  from './data.js';


function App() {

const Details = Data.map((item) => { 
  return (
    
    <Book
      name={item.title}
      author={item.author}
      price={item.price}
      key={item.id}  
    />
  )
})





  return (
    <>
      {Details}
    </>
  )
}

export default App
