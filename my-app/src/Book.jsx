export default function Book(props) { 

    return (
         <div className="book-card">
      <h2 className="book-title">{props.title}</h2>
      <p className="book-author">By {props.author}</p>
      <p className="book-price">{props.price}</p>
    </div>

    )

}