import './App.css'
import Book from './Book.jsx'
import Data from './data.js'


function App() {


  const Details = Data.map((item) => {
    return
    <Book
      key={item.id}
      title={item.title}
      author={item.author}
      price={item.price}
    
    />
  })
  return (
    <>
   <Book/>
    </>
  )
}

export default App
