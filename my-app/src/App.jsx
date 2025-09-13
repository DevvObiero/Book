import Book from './Book.jsx'
import  Data  from './data.js';


function App() {

const Details = Data.map((item) => { 
  return (
    
    <Book
      title={item.title}
      author={item.author}
      price={item.price}
      id={item.id}  
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
